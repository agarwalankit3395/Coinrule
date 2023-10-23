import React from 'react'
import { Box, Container, Typography } from '@mui/material';


const Aboutus = () => {
    return (
        <>
            <Box className='herosbg'>
            <Box sx={{ paddingY: { md: '5rem', xs: '3rem' }, position: 'relative' }}>
                <Container maxWidth='lg'>
                    <Box paddingBottom={'2rem'}>
                        <Typography variant='h3' component="h3" color={"#fff"} fontWeight="500" textAlign="center" gutterBottom>About Us </Typography>
                        <Typography variant='body1' color={"#fff"} textAlign={'justify'} gutterBottom>We are a passionate team from Croatia with years of experience in the field of blockchain technology, investing, and trading. Our journey began as a research endeavor and evolved into a deep understanding of the potential of blockchain technology and its impact on financial freedom.
                        </Typography>
                        <Typography variant='body1' color={"#fff"} gutterBottom textAlign={'justify'}>Our dedication to this sector has allowed us to gain invaluable knowledge and experience, which we have decided to share with blockchain enthusiasts worldwide. We are convinced that blockchain technology offers unique opportunities to transform the financial world and improve access to financial assets.</Typography>
                        <Typography variant='body1' color={"#fff"} gutterBottom textAlign={'justify'}>We decided to take a step further and create this software to enable users to better understand market dynamics, make informed decisions, and achieve financial independence. Our mission is to help our users achieve their financial goals through education and information accessibility.</Typography>
                        <Typography variant='body1' color={"#fff"} gutterBottom textAlign={'justify'}>We believe in transparency, reliability, and quality, and we are committed to providing the best experience to our users. Our team continues to work diligently to enhance our software and stay updated with the latest trends and innovations in the blockchain world.
                            Thank you for choosing our software and being a part of our community. Your success is our success, and we look forward to supporting you on your journey to financial freedom.</Typography>
                    </Box>
                </Container>
                </Box>
            </Box>
        </>)
}

export default Aboutus;