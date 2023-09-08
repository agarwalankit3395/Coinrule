import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react'
import styled from 'styled-components';
import { device } from '../../utils/Device';
import FAQData from './FAQData';




const Collecboxs = styled.div`
    background: ${({ theme }) => theme.bg};
    @media ${device.mobileS} {
        padding:0rem 0px
    }
    
`


const FAQ = () => {
    return (
        <div>
            <Collecboxs>
                <Box className='subheader' paddingY='6rem' sx={{paddingY: {xs:'2rem', md:'6rem'}}}>
                    <Container maxWidth='lg'>
                        <Grid container spacing={1}>
                            <Grid item md={12}>
                                <Box textAlign='center' position='relative'>
                                    <Typography variant='h2' component='h2'>
                                        FAQ
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
                <Box paddingY='4rem'>
                    <FAQData />
                </Box>
            </Collecboxs>
        </div>
    )
}

export default FAQ;