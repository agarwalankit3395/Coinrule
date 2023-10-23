import React from 'react'
import { Box, Container, Divider, Grid, Typography } from '@mui/material';
import logo from "../../../assets/contactUsImg/contactUs.png";
import logo2 from "../../../assets/contactUsImg/support_arbitragecrypto.pro-2.2.png";
const ContactUs = () => {
    return (
        <>
            <Box className='herosbg'>
                <Box sx={{ paddingY: { lg: '8rem', md: '6rem', xs: '10rem' }, position: 'relative' }} >
                    <Container maxWidth="lg">
                        <Grid container spacing={1} justifyContent="center"> 
                        <Box sx={{width:{lg:'60%', md:'60%', sm:'100%', xs:'100%' }}}> 
                            <img src={logo2} width={'100%'} alt='contactUsLogo' /> 
                        </Box>
                        </Grid>
                    </Container>
                </Box>
            </Box>
        </>
    )
}

export default ContactUs;