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
                                    <Typography variant='h6' color={"#fff"} fontWeight='300' gutterBottom component='h5'>
                                    We offer two payment options: monthly and yearly. To subscribe, simply click on the Connect wallet. We provide you with two options: Metamask. Payment is made using BNB tokens. We have chosen this token due to its very low fees. After a successful transaction, you should be redirected to the software. If you are not redirected, click on the 'Crypto Arbitrage' menu and make sure to always connect with the same wallet, as it won't work with different wallet addresses.
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