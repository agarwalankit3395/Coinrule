import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import team1 from '../../../assets/teamPhoto.jpg'


const MeetFoundingTeam = () => {
    return (
        <div>
            <Box sx={{ paddingY: { md: '6rem', sm: '3rem', xs: '2rem' }, background: '#fff' }} position={'relative'}>
                <Container maxWidth="lg">
                    <Box paddingBottom={'3rem'}>
                        <Typography textAlign={'center'} variant='h3'>
                            Meet the Founding Team
                        </Typography>
                    </Box>
                    <Grid container spacing={2} alignItems={'center'}>
                        <Grid item md={4} sm={12} xs={12}>
                            <Box borderRadius={'12px'} padding={'2rem'} bgcolor={"#fafafa"}>
                                <Box textAlign={'center'}>
                                    <img src={team1} alt='img' style={{ width: '200px', height: '200px', borderRadius: '100px' }} />
                                </Box>
                                <Box paddingY={'1rem'}>
                                    <Typography textAlign={'center'} variant='h5' fontWeight={'400'} gutterBottom>Gabriele Musella</Typography>
                                    <Typography textAlign={'center'} variant='body2' fontWeight={'400'} gutterBottom>CEO, Product</Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item md={4} sm={12} xs={12}>
                            <Box borderRadius={'12px'} padding={'2rem'} bgcolor={"#fafafa"}>
                                <Box textAlign={'center'}>
                                    <img src={team1} alt='img' style={{ width: '200px', height: '200px', borderRadius: '100px' }} />
                                </Box>
                                <Box paddingY={'1rem'}>
                                    <Typography textAlign={'center'} variant='h5' fontWeight={'400'} gutterBottom>Gabriele Musella</Typography>
                                    <Typography textAlign={'center'} variant='body2' fontWeight={'400'} gutterBottom>CEO, Product</Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item md={4} sm={12} xs={12}>
                            <Box borderRadius={'12px'} padding={'2rem'} bgcolor={"#fafafa"}>
                                <Box textAlign={'center'}>
                                    <img src={team1} alt='img' style={{ width: '200px', height: '200px', borderRadius: '100px' }} />
                                </Box>
                                <Box paddingY={'1rem'}>
                                    <Typography textAlign={'center'} variant='h5' fontWeight={'400'} gutterBottom>Gabriele Musella</Typography>
                                    <Typography textAlign={'center'} variant='body2' fontWeight={'400'} gutterBottom>CEO, Product</Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </div>
    )
}

export default MeetFoundingTeam