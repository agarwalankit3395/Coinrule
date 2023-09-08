import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React from 'react'

const CreateAutomated = () => {
    return (
        <Box sx={{ paddingY: { md: '6rem', sm: '3rem', xs: '2rem' } }} position={'relative'}>
            <Container maxWidth="lg">
                <Grid container spacing={2} alignItems={'center'}>
                    <Grid item md={6} xs={12}>
                        <Box sx={{width:{md:'70%'}}} >
                            <svg class="index-trade__icon" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 323 231">
                                <g fill="none" fill-rule="evenodd">
                                    <path fill="#4A545F" d="M95.144 5.518h3V-.001h-3zM95.144 20.723h3v-5.519h-3zM101.486 11.861h5.519v-3h-5.519zM86.282 11.862h5.519v-3h-5.519zM286.449 133.046h3v-5.519h-3zM286.449 148.25h3v-5.519h-3zM292.792 139.39v-3l5.519-.001v3zM277.587 139.39h5.519v-3h-5.519z"></path>
                                    <path fill="#F58E6F" d="M34.835 178.82a3.99 3.99 0 1 1-7.98 0 3.99 3.99 0 0 1 7.98 0"></path>
                                    <path fill="#FFD452" d="M13.604 111.365a6.802 6.802 0 1 1-13.605 0 6.802 6.802 0 0 1 13.604 0"></path>
                                    <path fill="#70CCDF" d="M322.188 183.662c0 6.018-4.88 10.896-10.897 10.896-6.019 0-10.897-4.878-10.897-10.896 0-6.018 4.878-10.896 10.897-10.896 6.017 0 10.897 4.878 10.897 10.896"></path>
                                    <path fill="#4A545F" d="M69.488 228.859h3V46.918h-3z"></path>
                                    <path fill="#4A545F" d="M55.154 212.764h194.283v-3H55.154z"></path>
                                    <path fill="#FFD452" d="M89.176 192.518h170.128V34.547H89.176z"></path>
                                    <path fill="#FEFEFE" d="M116.001 192.518h19.922v-62.51h-19.922zM169.355 192.518h19.922v-97.43h-19.922z"></path>
                                    <path fill="#4A545F" d="M140.648 133.008h3v-3h-3v3zm0 6h3v-3h-3v3zm0 6h3v-3h-3v3zm0 6h3v-3h-3v3zm0 6h3v-3h-3v3zm0 6h3v-3h-3v3zm0 6h3v-3h-3v3zm0 6h3v-3h-3v3zm0 6h3v-3h-3v3zm0 6h3v-3h-3v3zm0 5.51h3v-2.511h-3v2.511z"></path>
                                    <path fill="#FEFEFE" d="M218.335 192.517h19.922v-38.486h-19.922z"></path>
                                    <path fill="#4A545F" d="M242.983 157.031h3v-3h-3v3zm0 6h3v-3h-3v3zm0 6h3v-3h-3v3zm0 6h3v-3h-3v3zm0 6h3v-3h-3v3zm0 6h3v-3h-3v3zm0 5.487h3v-2.487h-3v2.487zm-48.185-94.43h3v-3h-3v3zm0 6h3v-3h-3v3zm0 6h3v-3h-3v3zm0 6h3v-3h-3v3zm0 6h3v-3h-3v3zm0 6h3v-3h-3v3zm0 6h3v-3h-3v3zm0 6h3v-3h-3v3zm0 6h3v-3h-3v3zm0 6h3v-3h-3v3zm0 6h3v-3h-3v3zm0 6h3v-3h-3v3zm0 6h3v-3h-3v3zm0 6h3v-3h-3v3zm0 6h3v-3h-3v3zm0 6h3v-3h-3v3zm0 4.43h3v-1.431h-3v1.431z"></path>
                                    <path fill="#F58E6F" d="M259.304 34.547l-23.127 19.982h13.488v27.384h19.279V54.529h13.487zM187.605 75.603a3.643 3.643 0 0 1-2.588 1.072h-5.31v-7.322h5.31a3.66 3.66 0 0 1 2.588 6.25zm-7.898-16.496h3.769a3.382 3.382 0 0 1 2.39 5.77 3.37 3.37 0 0 1-2.39.99h-3.77v-6.76zm9.013 7.454a5.711 5.711 0 0 0 2.998-1.583 5.732 5.732 0 0 0-4.052-9.785h-2.385V49.7h-3.415v5.495h-2.16v-5.495h-3.415v5.495H169.356v3.681h2.56s1.584-.227 1.584 1.547V75.41c0 1.774-1.583 1.547-1.583 1.547h-2.561v3.682h6.934v5.442h3.416V80.59h2.16v5.492h3.415v-5.492h3.36a6.99 6.99 0 0 0 4.96-2.053 7.013 7.013 0 0 0-4.88-11.974zM114.546 119.483l4.156-17.222-5.12 2.616.691-2.864 5.12-2.614 4.285-17.753h7.909l-3.173 13.149 3.973-2.03-.691 2.863-3.973 2.028-3.329 13.796h13.949l-1.939 8.031zM241.982 122.166l-12.744-6.015h-.739l-12.746 6.015 13.115-21.602zM241.538 127.145l-12.67 17.487-12.669-17.487 12.3 5.806h.739z"></path>
                                    <path fill="#F58E6F" d="M228.002 118.301v11.583l-12.427-5.714 6.107-2.883zM242.161 124.17l-12.426 5.714v-11.583l6.321 2.986z"></path>
                                    <path fill="#4A545F" d="M80.936 230.359h3v-3h-3v3zm6 0h3v-3h-3v3zm6 0h3v-3h-3v3zm6 0h3v-3h-3v3zm6 0h3v-3h-3v3zm6 0h3v-3h-3v3zm6 0h3v-3h-3v3zm6 0h3v-3h-3v3zm6 0h3v-3h-3v3zm6 0h3v-3h-3v3zm6 0h3v-3h-3v3zm6 0h3v-3h-3v3zm6 0h3v-3h-3v3zm6 0h3v-3h-3v3zm6 0h3v-3h-3v3zm6 0h3v-3h-3v3zm6 0h3v-3h-3v3zm6 0h3v-3h-3v3zm6 0h3v-3h-3v3zm6 0h3v-3h-3v3zm6 0h3v-3h-3v3zm6 0h3v-3h-3v3zm6 0h3v-3h-3v3zm6 0h3v-3h-3v3zm6 0h3v-3h-3v3zm6 0h3v-3h-3v3zm6 0h3v-3h-3v3zm6 0h3v-3h-3v3zm6 0h3v-3h-3v3zm6 0h3v-3h-3v3zm6 0h3v-3h-3v3zm6 0h2.612v-3h-2.612v3zM49.427 19.672h3v-2.613h-3v2.613zm0 6h3v-3h-3v3zm0 6h3v-3h-3v3zm0 6h3v-3h-3v3zm0 6h3v-3h-3v3zm0 6h3v-3h-3v3zm0 6h3v-3h-3v3zm0 6h3v-3h-3v3zm0 6h3v-3h-3v3zm0 6h3v-3h-3v3zm0 6h3v-3h-3v3zm0 6h3v-3h-3v3zm0 6h3v-3h-3v3zm0 6h3v-3h-3v3zm0 6h3v-3h-3v3zm0 6h3v-3h-3v3zm0 6h3v-3h-3v3zm0 6h3v-3h-3v3zm0 6h3v-3h-3v3zm0 6h3v-3h-3v3zm0 6h3v-3h-3v3zm0 6h3v-3h-3v3zm0 6h3v-3h-3v3zm0 6h3v-3h-3v3zm0 6h3v-3h-3v3zm0 6h3v-3h-3v3zm0 6h3v-3h-3v3zm0 6h3v-3h-3v3zm0 6h3v-3h-3v3zm0 6h3v-3h-3v3zm0 6h3v-3h-3v3zm0 6h3v-3h-3v3zm209.97-180.403l-.094-.085-.074.066-.943-1.008.007-.007-1.099-1.188 2.11-1.95 2.13 1.97-2.038 2.203zm-4.575 4.054l-2.035-2.204 2.203-2.035 2.036 2.204-2.204 2.035zm8.981.017l-2.202-2.035 2.036-2.203 2.204 2.035-2.038 2.203zm-13.387 4.055l-2.036-2.204 2.203-2.035 2.036 2.203-2.203 2.035zm17.796.018l-2.204-2.035 2.035-2.206 2.204 2.036-2.036 2.206zm-22.203 4.053l-2.035-2.203 2.203-2.035 2.035 2.203-2.203 2.035zm26.609.018l-2.204-2.035 2.038-2.203 2.202 2.035-2.036 2.203zm-31.016 4.054l-2.037-2.203 2.203-2.037 2.037 2.203-2.203 2.038zm35.422.018l-2.202-2.036 2.036-2.204 2.204 2.036-2.038 2.204zm-39.828 4.053l-2.037-2.203 2.203-2.035 2.037 2.203-2.203 2.035zm44.218 0l-2.185-2.017 2.036-2.203 2.184 2.017-2.036 2.203z"></path>
                                </g>
                            </svg>
                        </Box>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <Box>
                            <Typography variant='h4' gutterBottom fontWeight={'500'}>
                                Create Automated Trading Strategies Running 24/7
                            </Typography>
                            <Typography variant='h6' gutterBottom fontWeight={'400'}>
                                Set custom trading strategies and never miss a new rally or get caught in a dip. Coinrule obsessively seeks out effective market indicators to enable smart allocation of funds while putting you in control of your investment machine.
                            </Typography>
                            <Box paddingY='3rem'>
                            <Button variant="contained" sx={{ boxShadow: 'none', fontSize: '24px', borderRadius: '50px', background: 'linear-gradient(180deg,rgb(255,229,64) 0%,rgb(255,185,57) 100%)', paddingX: '2rem', color:'#000' }}>
                                Start Free
                            </Button>
                        </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default CreateAutomated;