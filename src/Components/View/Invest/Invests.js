import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import InvestTable from './InvestTable';

const Invests = () => {
    return (
        <div>
            <Box className='herosbg'>
                <Box sx={{ paddingY: { md: '5rem', xs: '3rem' } }}>
                    <Container maxWidth='lg' sx={{ marginTop: '3rem' }} >
                        <Grid container spacing={2}>
                            <Grid item md={12} xs={12}>
                                <Box position='relative' >
                                    <Typography variant='h3' color={"#fff"} fontWeight='500' gutterBottom component='h3' textAlign="center">
                                        How to use Crypto Arbitrage
                                    </Typography>
                                    <Typography variant='h6'  fontWeight='100' color={"#fff"} gutterBottom component='h6' >
                                        Symbol 1 means which token it is on one cryptocurrency exchange, and the pair is always usdt for easier tracking
                                    </Typography>
                                    <Typography variant='h6'  fontWeight='100' color={"#fff"} gutterBottom component='h6'>
                                        Symbol 2 means which token it is on second cryptocurrency exchange, and the pair is always usdt for easier tracking
                                    </Typography>
                                    <Typography variant='h6'  fontWeight='100' color={"#fff"} gutterBottom component='h6'>
                                        Price 1 and 2 means the price at one exchange and at another                                        </Typography>
                                    <Typography variant='h6'  fontWeight='100' color={"#fff"} gutterBottom component='h6'>
                                        Volume 1 and 2 means trading volume on 1 exchange and on another
                                    </Typography>
                                    <Typography variant='h6'  fontWeight='100' color={"#fff"} gutterBottom component='h6'>
                                        Exchange 1 and 2 means which crypto exchanges are involved, which two exchanges are being compared
                                    </Typography>
                                    <Typography variant='h6'  fontWeight='100' color={"#fff"} gutterBottom component='h6'>
                                        Network means which blockchain it is, a very important item so that you know how to estimate the costs
                                    </Typography>
                                    <Typography variant='h6'  fontWeight='100' color={"#fff"} gutterBottom component='h6'>
                                        Difference means the price difference between two tokens
                                    </Typography>
                                    <Typography variant='h6'  fontWeight='100' color={"#fff"} gutterBottom component='h6'>
                                        Percent means the price difference between two tokens in percentage
                                    </Typography>

                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </Box>
            <Box>
                <Container maxWidth='xl' sx={{ marginY: '2rem' }} >
                    <InvestTable />
                </Container>
            </Box>
        </div>
    )
}

export default Invests; 