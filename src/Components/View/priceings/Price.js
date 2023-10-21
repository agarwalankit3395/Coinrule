import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import PricingCorrily from './PricingCorrily'

const Price = () => {
    return (
        <div>
            <Box className='herosbg'>
                <Box sx={{ paddingY: { md: '6rem', xs: '3rem' }  }}>
                    <Container maxWidth='lg' sx={{ marginTop: '3rem' }} >
                        <Grid container spacing={1}>
                            <Grid item md={12} xs={12}>
                                <Box position="relative" >
                                    <Typography variant='h3' color={"#fff"} fontWeight='500' gutterBottom component='h3' textAlign="center">
                                        Pricing
                                    </Typography>
                                    <Typography variant='h5' fontWeight='300' gutterBottom component='h5'>
                                        With Coinrule you can easily develop your own trading strategies and set them up to run automatically on your favourite exchange. Start with a Free Account Today
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </Box>
            <PricingCorrily/>
        </div>
    )
}

export default Price