import React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material';
import imgContactUs from '../../../assets/contactUsImg/contactUs.png'

const usContact = async () => {
    return (<>
        <Box className='herosbg' >
            <Box sx={{ paddingY: { md: '6rem', xs: '3rem' }, position: 'relative' }}>
            <Container maxWidth='lg'>
                <Box paddingY={'2rem'}>
                    <Typography variant='h3' component="h3" color={"#fff"} fontWeight="500" textAlign="center" gutterBottom>Terms of Service </Typography>

                    <Typography variant='h6' color={"#fff"} gutterBottom textAlign={'justify'}>1. Acceptance of Terms </Typography>
                    <Typography color={"#fff"} variant='body1' gutterBottom textAlign={'justify'}>By accessing or using our software (hereinafter referred to as “Arbitrage crypto pro”), you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, please do not use the Software.</Typography>

                    <Typography color={"#fff"} variant='h6' gutterBottom textAlign={'justify'}>2. No Refunds</Typography>
                    <Typography color={"#fff"} variant='body1' gutterBottom textAlign={'justify'}>Due to the nature of the Software and the immediate benefits it provides upon access, we do not offer refunds once access has been granted.                        </Typography>

                    <Typography color={"#fff"} variant='h6' gutterBottom textAlign={'justify'}>3. Access and Subscription </Typography>
                    <Typography color={"#fff"} variant='body1' gutterBottom textAlign={'justify'}>Access to the Software is provided exclusively through payments made via the MetaMask wallet. Your access to the Software will be granted for a period of one month or one year, depending on the subscription plan you have chosen and paid for. You are solely responsible for maintaining the security and access to your MetaMask wallet.</Typography>

                    <Typography color={"#fff"} variant='h6' gutterBottom textAlign={'justify'}>4. Confidentiality </Typography>
                    <Typography color={"#fff"} variant='body1' gutterBottom textAlign={'justify'}>You agree not to disclose, share, or distribute any information obtained from the Software to any third parties. The information provided by the Software is for your personal use only.
                    </Typography>

                    <Typography color={"#fff"} variant='h6' gutterBottom textAlign={'justify'}>5. Disclaimer of Accuracy </Typography>
                    <Typography color={"#fff"} variant='body1' gutterBottom textAlign={'justify'}>The Software provides information of an informational nature only and should not be considered financial, investment, or legal advice. We make no representations or warranties regarding the accuracy, completeness, or reliability of the information provided. You are solely responsible for any decisions or actions taken based on the information obtained from the Software.
                    </Typography>

                    <Typography color={"#fff"} variant='h6' gutterBottom textAlign={'justify'}>6. Limitation of Liability
                    </Typography>
                    <Typography color={"#fff"} variant='body1' gutterBottom textAlign={'justify'}>We shall not be liable for any losses or damages incurred as a result of using the Software, including but not limited to losses incurred in arbitration or trading. You agree to use the Software at your own risk.
                    </Typography>

                    <Typography color={"#fff"} variant='h6' gutterBottom textAlign={'justify'}>7. Modification of Terms
                    </Typography>
                    <Typography color={"#fff"} variant='body1' gutterBottom textAlign={'justify'}>We reserve the right to modify, update, or change these Terms of Service at any time without prior notice. It is your responsibility to review these terms periodically. Your continued use of the Software following any changes constitutes your acceptance of those changes.
                    </Typography>

                    <Typography color={"#fff"} variant='h6' gutterBottom textAlign={'justify'}>8. Termination
                    </Typography>
                    <Typography color={"#fff"} variant='body1' gutterBottom textAlign={'justify'}>We reserve the right to terminate or suspend your access to the Software at our sole discretion, without prior notice, for any reason, including but not limited to a breach of these Terms of Service.
                    </Typography>

                    <Typography color={"#fff"} variant='h6' gutterBottom textAlign={'justify'}>9. Governing Law
                    </Typography>
                    <Typography color={"#fff"} variant='body1' gutterBottom textAlign={'justify'}>These Terms of Service shall be governed by and construed in accordance with the laws of Croatia.
                    </Typography>

                    <Typography color={"#fff"} variant='h6' gutterBottom textAlign={'justify'}>10. Contact Information
                    </Typography>
                    <Typography color={"#fff"} variant='body1' gutterBottom textAlign={'justify'}>If you have any questions or concerns about these Terms of Service, please contact us at help@arbitragecrypto.pro.
                    </Typography>
                </Box>
            </Container>
            </Box>
        </Box></>
        );
        
    }
    
    export default usContact;
    // <> 
    // <Box className='herosbg'>
    //         <Box sx={{ paddingY: { md: '6rem', xs: '3rem' }, position: 'relative' }}>
    //             <Container maxWidth='lg' sx={{ marginTop: '3rem' }} >
    //                 <Grid container spacing={1} alignItems={'center'}>
    //                     <Grid item md={6} xs={12}>
    //                         <Box position='relative' >
                              
    //                             <Typography variant='h2' textAlign={'center'} color={"#fff"} fontWeight='500' gutterBottom component='h2' paddingY={'1rem'}>
    //                             We present to you Crypto arbitrage pro
    //                             </Typography>
                               
    //                         </Box>
    //                     </Grid>
    //                     <Grid item md={6} xs={12}>
    //                         <Box>
    //                             <img src={imgContactUs} alt='img' width={'100%'} />
    //                         </Box>
    //                     </Grid>
    //                 </Grid>
    //             </Container>
    //         </Box>
    //     </Box>
    // </>