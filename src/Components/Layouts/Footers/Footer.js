import React from 'react'
import styled from 'styled-components'
import { Container, Grid, Box, Typography, Divider, } from '@mui/material'
import { Link } from 'react-router-dom'

import logo from '../Headers/stakelabs-logo.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { device } from '../../utils/Device'
import withRouter from '../../../withRouter'


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
            <Box paddingY={'2rem'}>
                <Container maxWidth='lg'>
                    <Box paddingBottom={'2rem'}>
                        <Typography variant='h4' gutterBottom>About Us </Typography>
                        <Typography variant='body1' gutterBottom>We are a passionate team from Croatia with years of experience in the field of blockchain technology, investing, and trading. Our journey began as a research endeavor and evolved into a deep understanding of the potential of blockchain technology and its impact on financial freedom.
                        </Typography>
                        <Typography variant='body1' gutterBottom>Our dedication to this sector has allowed us to gain invaluable knowledge and experience, which we have decided to share with blockchain enthusiasts worldwide. We are convinced that blockchain technology offers unique opportunities to transform the financial world and improve access to financial assets.</Typography>
                        <Typography variant='body1' gutterBottom>We decided to take a step further and create this software to enable users to better understand market dynamics, make informed decisions, and achieve financial independence. Our mission is to help our users achieve their financial goals through education and information accessibility.</Typography>
                        <Typography variant='body1' gutterBottom>We believe in transparency, reliability, and quality, and we are committed to providing the best experience to our users. Our team continues to work diligently to enhance our software and stay updated with the latest trends and innovations in the blockchain world.
                            Thank you for choosing our software and being a part of our community. Your success is our success, and we look forward to supporting you on your journey to financial freedom.</Typography>
                    </Box>
                    <Divider sx={{ borderColor: '#ccc' }} />
                    <Box paddingY={'2rem'}>
                        <Typography variant='h4' gutterBottom>Terms of Service </Typography>

                        <Typography variant='h6' gutterBottom>1. Acceptance of Terms </Typography>
                        <Typography variant='body1' gutterBottom>By accessing or using our software (hereinafter referred to as “Arbitrage crypto pro”), you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, please do not use the Software.</Typography>

                        <Typography variant='h6' gutterBottom>2. No Refunds</Typography>
                        <Typography variant='body1' gutterBottom>Due to the nature of the Software and the immediate benefits it provides upon access, we do not offer refunds once access has been granted.                        </Typography>

                        <Typography variant='h6' gutterBottom>3. Access and Subscription </Typography>
                        <Typography variant='body1' gutterBottom>Access to the Software is provided exclusively through payments made via the MetaMask wallet. Your access to the Software will be granted for a period of one month or one year, depending on the subscription plan you have chosen and paid for. You are solely responsible for maintaining the security and access to your MetaMask wallet.</Typography>

                        <Typography variant='h6' gutterBottom>4. Confidentiality </Typography>
                        <Typography variant='body1' gutterBottom>You agree not to disclose, share, or distribute any information obtained from the Software to any third parties. The information provided by the Software is for your personal use only.
                        </Typography>

                        <Typography variant='h6' gutterBottom>5. Disclaimer of Accuracy </Typography>
                        <Typography variant='body1' gutterBottom>The Software provides information of an informational nature only and should not be considered financial, investment, or legal advice. We make no representations or warranties regarding the accuracy, completeness, or reliability of the information provided. You are solely responsible for any decisions or actions taken based on the information obtained from the Software.
                        </Typography>

                        <Typography variant='h6' gutterBottom>6. Limitation of Liability
                        </Typography>
                        <Typography variant='body1' gutterBottom>We shall not be liable for any losses or damages incurred as a result of using the Software, including but not limited to losses incurred in arbitration or trading. You agree to use the Software at your own risk.
                        </Typography>

                        <Typography variant='h6' gutterBottom>7. Modification of Terms
                        </Typography>
                        <Typography variant='body1' gutterBottom>We reserve the right to modify, update, or change these Terms of Service at any time without prior notice. It is your responsibility to review these terms periodically. Your continued use of the Software following any changes constitutes your acceptance of those changes.
                        </Typography>

                        <Typography variant='h6' gutterBottom>8. Termination
                        </Typography>
                        <Typography variant='body1' gutterBottom>We reserve the right to terminate or suspend your access to the Software at our sole discretion, without prior notice, for any reason, including but not limited to a breach of these Terms of Service.
                        </Typography>

                        <Typography variant='h6' gutterBottom>9. Governing Law
                        </Typography>
                        <Typography variant='body1' gutterBottom>These Terms of Service shall be governed by and construed in accordance with the laws of Croatia.
                        </Typography>

                        <Typography variant='h6' gutterBottom>10. Contact Information
                        </Typography>
                        <Typography variant='body1' gutterBottom>If you have any questions or concerns about these Terms of Service, please contact us at help@arbitragecrypto.pro.
                        </Typography>
                    </Box>
                </Container>
            </Box>
            <Divider sx={{ borderColor: '#ccc' }} />
            <Collecboxs className='collBoxPadd'>
                <Container maxWidth='xl'>
                    <Grid container spacing={1}>
                        <Grid item lg={5} md={3} sm={12} xs={12}>
                            <Box>
                                <Box paddingTop='10px'>
                                    <img src={logo} width='100px' alt='' />
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
                                                Invest
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
                    </Grid>
                    <Hr />
                    <Grid container spacing={1} marginTop='2rem'>
                        <Grid item md={6} xs={12}>
                            <Box display='flex' alignItems='center' flexWrap='wrap' style={{ gap: '20px' }} >

                                <Copys>
                                    <Typography variant='body2' >
                                        © Copyright 2023 COINRULE. All Rights Reserved
                                    </Typography>
                                </Copys>
                            </Box>
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <Box display='flex' alignItems='center' justifyContent='end' sx={{ gap: '10px', justifyContent: { xs: 'start', md: 'end' } }} >
                                <Iconsmain>
                                    <FacebookIcon fontSize='small' sx={{ color: '#fff' }} />
                                </Iconsmain>
                                <Iconsmain>
                                    <InstagramIcon fontSize='small' sx={{ color: '#fff' }} />
                                </Iconsmain>
                                <Iconsmain>
                                    <LinkedInIcon fontSize='small' sx={{ color: '#fff' }} />
                                </Iconsmain>
                                <Iconsmain>
                                    <TelegramIcon fontSize='small' sx={{ color: '#fff' }} />
                                </Iconsmain>
                                <Iconsmain>
                                    <TwitterIcon fontSize='small' sx={{ color: '#fff' }} />
                                </Iconsmain>
                                <Iconsmain>
                                    <YouTubeIcon fontSize='small' sx={{ color: '#fff' }} />
                                </Iconsmain>

                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Collecboxs>
        </div>
    )
}



export default withRouter(Footer);