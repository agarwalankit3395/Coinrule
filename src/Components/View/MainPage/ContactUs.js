import React from 'react'
import { Box, Container, Divider, Grid, Typography } from '@mui/material';
import logo from "../../../assets/contactUsImg/contactUs.png";
import logo2 from "../../../assets/contactUsImg/support_arbitragecrypto.pro-2.2.png";
const ContactUs = () => {
    return (
        <>
        <Box className='herosbg'>
        <Box sx={{ paddingY: { lg : '8rem',md: '6rem', xs: '10rem' }, position: 'relative'  }} >
        <Container maxWidth="lg">
                    <Grid container spacing={1} justifyContent="center">
                        {/* <Grid item md={12} xs={12}> */}
                            {/* <Box sx={{ width: { md: '60%' } }} > */}
                                <img src={logo2} width='60%' height="40%" alt='contactUsLogo'  />
                            {/* </Box> */}
                        {/* </Grid> */}
                        {/* <Grid item md={6} xs={12}>
                            <Box>

                                <Typography variant='h2' textAlign={'center'} gutterBottom fontWeight={'500'}>
                                    Point to Contact                      
                                </Typography>
                                <Typography variant='h6' textAlign={'center'} gutterBottom fontWeight={'400'}>
                                supportMONKEYarbitragecrypto.pro   
                                </Typography>
                                <Typography variant='h6' textAlign={'center'} gutterBottom fontWeight={'400'}>
                                    +91-1576892786   
                                </Typography>
                                
                            </Box>
                        </Grid> */}
                    </Grid>
                </Container>
            </Box>
        </Box>
    </>
    )
}

export default ContactUs;