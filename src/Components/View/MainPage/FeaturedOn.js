import { Box, Container, Grid } from '@mui/material';
import React from 'react'
import image1 from '../../../assets/icon-logo/bi.webp'
import image2 from '../../../assets/icon-logo/forbes.webp'
import image3 from '../../../assets/icon-logo/tc.webp'
import image4 from '../../../assets/icon-logo/yahoo.webp'
import image5 from '../../../assets/icon-logo/yc.webp'


const FeaturedOn = () => {
  return (
    <Box bgcolor={"#fff"} position={'relative'} marginY={'1rem'} padding={'10px'}>
        <Container maxWidth={'lg'}>
            <Grid container spacing={2} alignItems={'center'}>
                <Grid item lg={2.4} md={3} sm={6} xs={6}>
                    <Box>
                        <img src={image1} width={'150px'} alt='img' />
                    </Box>
                </Grid>
                <Grid item lg={2.4} md={3} sm={6} xs={6}>
                    <Box>
                        <img src={image2} width={'150px'} alt='img' />
                    </Box>
                </Grid>
                <Grid item lg={2.4} md={3} sm={6} xs={6}>
                    <Box>
                        <img src={image3} width={'150px'} alt='img' />
                    </Box>
                </Grid>
                <Grid item lg={2.4} md={3} sm={6} xs={6}>
                    <Box>
                        <img src={image4} width={'150px'} alt='img' />
                    </Box>
                </Grid>
                <Grid item lg={2.4} md={3} sm={6} xs={6}>
                    <Box>
                        <img src={image5} width={'150px'} alt='img' />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    </Box>
  )
}

export default FeaturedOn;