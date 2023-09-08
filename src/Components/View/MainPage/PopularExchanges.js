import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'

const PopularExchanges = () => {
    return (
        <Box sx={{ background: 'linear-gradient(270deg,#4641ff 0%,#876eff 100%)',}} position={'relative'} >
            <Container maxWidth={'lg'}>
                <Grid container spacing={2} alignItems={'center'}>
                    <Grid item md={4} sm={12} xs={12}>
                        <Box paddingY={'1rem'} display={'flex'} alignItems={'center'} justifyContent={'flex-start'} gap={'15px'}>
                            <Box>
                                <svg xmlns="https://www.w3.org/2000/svg" width="53" height="49" viewBox="0 0 53 49">
                                    <g fill="none" fill-rule="evenodd" stroke="#000" transform="translate(1 1)">
                                        <path d="M35 24h16v14H35z"></path>
                                        <circle cx="43" cy="31" r="2"></circle>
                                        <path d="M6.973 16C4.931 11.27 6.181 5.653 9.995 2.423c3.814-3.23 9.196-3.23 13.01 0S28.07 11.269 26.027 16"></path>
                                        <path d="M15.715 16L14 12.89l1.41-1.786 2.09 2.693 2.09-2.693L21 12.89 19.285 16h-3.57zM17.5 3L14 9.316l3.5 4.48 3.5-4.48L17.5 3zM0 16h51v31H0z"></path>
                                        <circle cx="18" cy="23" r="2"></circle>
                                        <circle cx="25" cy="31" r="2"></circle>
                                        <circle cx="18" cy="41" r="2"></circle>
                                        <path d="M23 31H0M16 23l-4.571 4H0M16 41l-4.571-4H0M30 10.973h6.887m-4.684-4.885v7.808m7.785.104c.045-.499-.036-1-.235-1.461a2.767 2.767 0 0 0-2.61-1.566h-.449c1.382 0 2.503-1.094 2.503-2.443s-1.12-2.442-2.503-2.442H30M33.443 4v2.088M36.587 4v2.088"></path>
                                        <path d="M26 7.303c3.26-4.183 9.039-5.497 13.805-3.14 4.767 2.357 7.197 7.73 5.806 12.837M21 1.705A5.614 5.614 0 0 1 25.824.057 5.649 5.649 0 0 1 30 3"></path>
                                        <path d="M45 10h.554c2.673 0 4.965 1.682 5.446 4M4.694 14c-.787-.002-1.47-.64-1.649-1.543-.18-.903.19-1.833.895-2.247.704-.414 1.557-.202 2.06.51"></path>
                                    </g>
                                </svg>
                            </Box>
                            <Box>
                                <Typography color={"#fff"} variant='body2'>Works with the top 10+</Typography>
                                <Typography color={"#fff"} variant='h6'>Popular Exchanges</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item md={4} sm={12} xs={12}>
                        <Box paddingY={'1rem'} display={'flex'} alignItems={'center'} justifyContent={'flex-start'} gap={'15px'}>
                            <Box>
                                <svg xmlns="https://www.w3.org/2000/svg" width="38" height="54" viewBox="0 0 38 54">
                                    <g fill="none" fill-rule="evenodd" stroke="#000">
                                        <path d="M37 34.391L19 49 1 34.391V5.174l5.294 4.174L19 1l12.706 8.348L37 5.174z"></path>
                                        <path d="M37 38.391L19 53 1 38.391V9.174l5.294 4.174L19 5l12.706 8.348L37 9.174z"></path>
                                        <path d="M16.82 25.215L24.1 18l2.9 2.882-7.28 7.236L16.82 31l-2.9-2.882L11 25.215l2.92-2.882zM6 13v25m26-25v25"></path>
                                    </g>
                                </svg>
                            </Box>
                            <Box>
                                <Typography color={"#fff"} variant='body2'>Military-grade</Typography>
                                <Typography color={"#fff"} variant='h6'>Security & Encryption</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item md={4} sm={12} xs={12}>
                        <Box paddingY={'1rem'} display={'flex'} alignItems={'center'} justifyContent={'flex-start'} gap={'10px'}>
                            <Box>
                                 <img src='https://coinrule.com/pic/index-benefits-feedbacknew.png' width={'60px'} alt='img' />
                            </Box>
                            <Box>
                                <Typography color={"#fff"} variant='body2'>"Coinrule stands out, intuitive and simple to set up"</Typography>
                                <Typography color={"#fff"} variant='h6'> Jordan</Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default PopularExchanges