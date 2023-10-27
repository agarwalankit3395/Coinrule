import { Box, Button, Container, Grid, Typography, } from '@mui/material';
import React from 'react'
import styled from 'styled-components';
import imgads from '../../../assets/index-hero-screenshot.webp'

const Mainpage = styled.div``
const Access = styled.div`
    color: ${({ theme }) => theme.boxbg};
    font-size: 24px;
    font-weight: 400;
`

const Home = () => {
    return (
        <div>
            <Mainpage className='herosbg'>
                <Box sx={{ paddingY: { md: '8rem', xs: '3rem' } }}>
                    <Container maxWidth='lg' sx={{marginTop:'3rem'}} >
                        <Grid container spacing={2}>
                            <Grid item md={6} xs={12}>
                                <Box position='relative' >
                                    <Typography variant='h3' color={"#fff"} fontWeight='bold' gutterBottom component='h3'>
                                        Create Trading Bots, Follow Smart Investors
                                    </Typography>
                                    <Access>
                                        Catch the next market opportunity and compete with professional traders. No coding required.
                                    </Access>
                                    <Box paddingY='3rem'>
                                        <Button variant="contained" sx={{ boxShadow: 'none', fontSize: '24px', borderRadius: '50px', background: 'linear-gradient(180deg,rgb(255,229,64) 0%,rgb(255,185,57) 100%)', paddingX: '2rem', color:'#000' }}>
                                            Start Free
                                        </Button>
                                    </Box>
                                </Box>
                            </Grid>

                            <Grid item md={6} xs={12}>
                                <Box position="relative">
                                    <img src={imgads} alt='img' width={"100%"} className='imgadsI' />
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </Mainpage>
        </div>
    )
}

export default Home;