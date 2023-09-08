import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react' 
import InvestTable from './InvestTable';

const Invests = () => {
    return (
        <div>
            <Box className='herosbg'>
                <Box sx={{ paddingY: { md: '8rem', xs: '3rem' } }}>
                    <Container maxWidth='lg' sx={{ marginTop: '3rem' }} >
                        <Grid container spacing={2}>
                            <Grid item md={8} xs={12}>
                                <Box position='relative' >
                                    <Typography variant='h3' color={"#fff"} fontWeight='500' gutterBottom component='h3'>
                                        Invest In Us Crypto Arbitrage 
                                    </Typography>
                                    <Typography variant='h5' color={"#fff"} fontWeight='300' gutterBottom component='h5' paddingY={'1rem'}>
                                        Democratizing access to investment opportunities through automated trading is our mission. Today you can join this exciting journey and make a difference.
                                    </Typography>
                                    <Typography variant='h5' color={"#fff"} fontWeight='300' gutterBottom component='h5'>
                                        Coinrule New Crowdfunding Campaign is Opening August 1st 2023.
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </Box> 
            <Box>
            <Container maxWidth='xl' sx={{ marginY: '3rem' }} >
                <InvestTable/>
            </Container>
            </Box>
        </div>
    )
}

export default Invests;