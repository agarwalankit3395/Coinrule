import React from 'react'
import styled from 'styled-components'
import { Container, Grid, Box, Typography, Divider, } from '@mui/material'
import { Link } from 'react-router-dom'

import logo from '../Headers/arbitrage.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { device } from '../../utils/Device'
import withRouter from '../../../withRouter'
import Aboutus from '../../View/aboutUs/Aboutus'

const Collecboxs = styled.div`
    background: ${({ theme }) => theme.boxbg};
    @media ${device.mobileS} {
        padding:2rem 0px
    }
    @media ${device.tablet} {
        padding:2rem 2rem
    }
    @media ${device.laptopL} {
        padding:2rem 2rem
    }
    @media ${device.desktop} {
        padding:2rem 2rem
    }
`
const Hotext = styled.h3`
    color: ${({ theme }) => theme.text};
`
const Hr = styled.div`
    border-bottom: 1px solid ${({ theme }) => theme.textSoft};
    width:100%;
    margin-top: 3rem;
`
const Menuitems = styled.div`
    padding:10px 0;
`

const Itemsl = styled.div`
    color: ${({ theme }) => theme.text}; 
    font-size: 16px;
    font-weight: 400 !important;
    transition: 0.5s; 
    &:hover {
        color: ${({ theme }) => theme.bgBtns}; 
    }
`
const Copys = styled.span`
    color: ${({ theme }) => theme.text}; 
    font-weight: 500 !important;
`
const Iconsmain = styled.div`
    background: ${({ theme }) => theme.bgBtns};
    color: ${({ theme }) => theme.text}; 
    display: flex;
    padding: 6px;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 0.5s;
    &:hover {
        background: ${({ theme }) => theme.bgLighter};  
    }
`
const Inputbase = styled.input`
    border: 1px solid ${({ theme }) => theme.bgBtns}; 
    background: transparent;
    padding:10px;
    border-radius:5px;
    color: ${({ theme }) => theme.text};
    width: 100%;
`
const Submitbtn = styled.button`
    background: ${({ theme }) => theme.bgBtns}; 
    border: 1px solid ${({ theme }) => theme.bgBtns}; 
    color: ${({ theme }) => theme.text};
    position: relative;
    right: 2rem;
    padding: 6.7px; 
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    cursor: pointer;
`


const Footer = ({ router }) => {
    return (
        <div>
            <Divider sx={{ borderColor: '#ccc' }} />
            <Collecboxs className='collBoxPadd'>
                <Container maxWidth='xl'>
                    {/* <Grid container spacing={1}>
                        <Grid item lg={5} md={3} sm={12} xs={12}>
                            <Box>
                                <Box paddingTop='10px'>
                                    <img src={logo} width='150px' style={{ borderRadius: '12px' }} alt='' />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item lg={2} md={3} sm={4} xs={6}>
                            <Box>
                                <Hotext>
                                    <Typography variant='h6' gutterBottom component='h3'>
                                        PRODUCT
                                    </Typography>
                                </Hotext>
                                <Box paddingTop='10px'>
                                    <Menuitems>
                                        <Link to='/' target='_blank' style={{ textDecoration: 'none' }}>
                                            <Itemsl>
                                                Crypto Arbitrage
                                            </Itemsl>
                                        </Link>
                                    </Menuitems>
                                    <Menuitems>
                                        <Link to='/' target='_blank' style={{ textDecoration: 'none' }}>
                                            <Itemsl>
                                                About Us
                                            </Itemsl>
                                        </Link>
                                    </Menuitems>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item lg={2} md={3} sm={4} xs={6}>
                            <Box>
                                <Hotext>
                                    <Typography variant='h6' gutterBottom component='h3'>
                                        COMPANY
                                    </Typography>
                                </Hotext>
                                <Box paddingTop='10px'>
                                    <Menuitems>
                                        <Link to='/faq' style={{ textDecoration: 'none' }}>
                                            <Itemsl>
                                                Medium
                                            </Itemsl>
                                        </Link>
                                    </Menuitems>
                                    <Menuitems>
                                        <Link to='/blog' style={{ textDecoration: 'none' }}>
                                            <Itemsl>
                                                Tradingview
                                            </Itemsl>
                                        </Link>
                                    </Menuitems>
                                    <Menuitems>
                                        <Link to='/blog' style={{ textDecoration: 'none' }}>
                                            <Itemsl>
                                                Blog
                                            </Itemsl>
                                        </Link>
                                    </Menuitems>

                                </Box>
                            </Box>
                        </Grid>
                        <Grid item lg={3} md={3} sm={12} xs={12}>
                            <Box>
                                <Hotext>
                                    <Typography variant='h6' gutterBottom component='h3'>
                                        Newsletter
                                    </Typography>
                                </Hotext>
                                <Box>
                                    <Menuitems>
                                        <Itemsl>
                                            Signup for our newsletter to get the latest news in your inbox.
                                        </Itemsl>
                                    </Menuitems>
                                    <Menuitems>
                                        <Box display='flex' alignItems='center' position='relative'>
                                            <Inputbase type='email' placeholder='enter your email' />
                                            <Submitbtn>
                                                <ArrowForwardIcon fontSize='small' sx={{ color: '#fff' }} />
                                            </Submitbtn>
                                        </Box>
                                    </Menuitems>
                                    <Menuitems>
                                        <Itemsl>
                                            Your email is safe with us. We don't spam.
                                        </Itemsl>
                                    </Menuitems>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid> */}
                    {/* <Hr /> */}
                    <Grid container spacing={1} marginTop='1rem' >
                        <Grid item lg={4} md={4} sm={12} xs={12}>
                            <Box display='flex' alignItems='center' justifyContent='center' flexWrap='wrap' style={{ gap: '20px', justifyContent: {   xs: 'center', md: 'start' }  }} >

                                <Copys>
                                    <Typography variant='body2' >
                                        © Copyright 2023 Arbitrage. All Rights Reserved
                                    </Typography>
                                </Copys>
                            </Box>
                        </Grid>
                        <Grid item lg={4} md={4} sm={12} xs={12}  >
                            {/* <Box> */}

                                <Box display='flex' alignItems='center' justifyContent='center' sx={{ gap: '22px', justifyContent: {  xs: 'center', md: 'end' } }}>
                                    <Menuitems >
                                        <Link to='/aboutus' target='_blank' style={{ textDecoration: 'none' }}>
                                            <Itemsl>
                                            About Us
                                            </Itemsl>
                                        </Link>
                                    </Menuitems>
                                    <Menuitems>
                                        <Link to='/termsofServices' target='_blank' style={{ textDecoration: 'none' }}>
                                            <Itemsl>
                                            Terms of Service
                                            </Itemsl>
                                        </Link>
                                    </Menuitems>
                                </Box>
                            {/* </Box> */}
                        </Grid>
                        <Grid item lg={4} md={4} sm={12} xs={12}>
                            <Box display='flex' alignItems='center' justifyContent='end' sx={{ gap: '10px', justifyContent: { xs: 'center', md: 'end' } }} >
                                {/* <Iconsmain>
                                    <FacebookIcon fontSize='small' sx={{ color: '#fff' }} />
                                </Iconsmain> */}
                                <Iconsmain>
                                    <InstagramIcon fontSize='small' sx={{ color: '#fff' }} />
                                </Iconsmain>
                                {/* <Iconsmain>
                                    <LinkedInIcon fontSize='small' sx={{ color: '#fff' }} />
                                </Iconsmain> */}
                                <Iconsmain>
                                    <TelegramIcon fontSize='small' sx={{ color: '#fff' }} />
                                </Iconsmain>
                                {/* <Iconsmain>
                                    <TwitterIcon fontSize='small' sx={{ color: '#fff' }} />
                                </Iconsmain>
                                <Iconsmain>
                                    <YouTubeIcon fontSize='small' sx={{ color: '#fff' }} />
                                </Iconsmain> */}

                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Collecboxs>
        </div>
    )
}



export default withRouter(Footer);