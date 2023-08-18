import { useTheme, Box, Typography } from "@mui/material";
import { shades } from "../../theme";

const Footer = () => {
    const { palette: { neutral }} = useTheme();

    return (
        <Box marginTop="70px" p="40px 0" backgroundColor={neutral.light}>
            <Box
                width="80%"
                margin="auto"
                display="flex"
                justifyContent="space-between"
                flexWrap="wrap"
                rowGap="30px"
                // The clamp() CSS function clamps a middle
                // value within a range of values between a 
                // defined minimum bound and a maximum bound.
                columnGap="clamp(20px, 30px, 40px)"
            >
                <Box width="clamp(20%, 30%, 40%)">
                    <Typography 
                        variant="h4"
                        fontWeight="bold"
                        mb="30px"
                        color={shades.secondary[500]}
                    >ECOMMER</Typography>
                    <div>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Veritatis ipsum sint tempora omnis quidem est ea maiores 
                    sequi quod eveniet minima, corrupti accusantium corporis 
                    error dicta? Quod dignissimos adipisci repellendus!
                    </div>
                </Box>

                <Box>
                    <Typography variant="h4" fontWeight="bold" mb="30px">About Us</Typography>
                    <Typography mb="30px">Careers</Typography>
                    <Typography mb="30px">Our Stores</Typography>
                    <Typography mb="30px">Terms & conditions</Typography>
                    <Typography mb="30px">Privacy Policy</Typography>
                </Box>

                <Box>
                    <Typography variant="h4" fontWeight="bold" mb="30px">Customer Care</Typography>
                    <Typography mb="30px">Help Center</Typography>
                    <Typography mb="30px">Track Your Order</Typography>
                    <Typography mb="30px">Corporate & Bulk Purchasing</Typography>
                    <Typography mb="30px">Returns & Refunds</Typography>
                </Box>

                <Box width="clamp(20%, 25%, 30%)">
                    <Typography variant="h4" fontWeight="bold" mb="30px">Contact Us</Typography>
                    <Typography mb="30px">50 north Whatever Blvd, Washington, DC 10501</Typography>
                    <Typography mb="30px">Email: somethingsomething@gmail.com</Typography>
                    <Typography mb="30px">(222)333-4444</Typography>
                </Box>
            </Box>
        </Box>
    );

}

export default Footer;