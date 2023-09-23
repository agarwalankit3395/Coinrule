import React from 'react'
import { Box, Container, Divider, Typography } from '@mui/material';

const TermsServiceAbout = () => {
    return (
        <>
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
        </>
    )
}

export default TermsServiceAbout;