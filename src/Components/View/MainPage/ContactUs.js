import React from 'react'
import { Box, Container, Divider, Grid, Typography } from '@mui/material';
import logo from "../../../assets/contactUsImg/contactUs.png";
const ContactUs = () => {
    return (
        <>
        <Box className='herosbg'>
        <Box sx={{ paddingY: { md: '5rem', xs: '3rem' }, position: 'relative' }}>
        <Container maxWidth="lg">
                    <Grid container spacing={1} alignItems={'center'}>
                        <Grid item md={6} xs={12}>
                            <Box sx={{ width: { md: '90%' } }} >
                                <img src={logo} width='100%' alt='profile1' />
                               
                            </Box>
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <Box>

                                <Typography variant='h2' textAlign={'center'} gutterBottom fontWeight={'500'}>
                                    Point to Contact                      
                                </Typography>
                                <Typography variant='h6' textAlign={'center'} gutterBottom fontWeight={'400'}>
                                    example@gmail.com   
                                </Typography>
                                <Typography variant='h6' textAlign={'center'} gutterBottom fontWeight={'400'}>
                                    +91-1576892786   
                                </Typography>
                                
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    </>
    )
}

export default ContactUs;