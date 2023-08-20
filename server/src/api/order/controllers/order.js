'use strict';
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);


/**
 * order controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::order.order', ({ strapi }) => ({
    // This function allows us to modify this API end point
    // and we will have our custom functionality on top of 
    // what strapi does.
    async create(ctx) {
        // extracting from user request(front-end side)
        const { products, userName, email } = ctx.request.body;

        try {
            // retrieve item information
            const lineItems = await Promise.all( // Promise.all allows us to do multiple asynchronous calls
                products.map(async (product) => {
                    const item = await strapi.service("api::item.item").findOne(product.id);
                
                    return {
                        price_data: {
                            currency: "usd",
                            product_data: {
                                name: item.name,
                            },
                            unit_amount: item.price * 100,
                        },
                        quantity: product.count,
                    }
                })
            );

            console.log(lineItems);
            // create a stripe session
            const session = await stripe.checkout.sessions.create({
                payment_method_types: ["card"],
                customer_email: email,
                mode: "payment",
                success_url: "http://localhost:3000/checkout/success",
                cancel_url: "http://localhost:3000",
                line_items: lineItems
            });

            // create the item
            await strapi.service("api::order.order").create({
                data: { userName, products, stripeSessionId: session.id}
            });

            // return the session
            console.log(session.id)
            return { id: session.id }
        } catch (error) {
            ctx.response.status = 500;
            return { error: { message: "There was a problem creating the charge."}}
        }
    }
}));
