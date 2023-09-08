import { Box, Container, Grid,} from '@mui/material';
import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import styled from 'styled-components';
import { device } from '../../utils/Device';


const Accordionbox = styled.div`
    background: ${({ theme }) => theme.bg};
    border: 1px solid ${({ theme }) => theme.bgLighter};
    border-radius:5px;
    padding:4px 20px;
    margin-bottom:6px;
    transition: 0.5s;
    &:hover{
        background: ${({ theme }) => theme.bgLighter};
    }
   
`
const Texttypography = styled.h6`
     color: ${({ theme }) => theme.text};
     font-size:20px;
     font-weight: 500 !important;
     transition: 0.5s;
     &:hover{
         color: ${({ theme }) => theme.bgBtns};
     }
     @media ${device.mobileS} {
        font-size:17px;
    }
`
const Distypography = styled.p`
     color: ${({ theme }) => theme.text};
     font-size: 17px;
     font-weight: 500 !important;
`
const Bookicon = styled.svg`
    color: ${({ theme }) => theme.bgBtns};
    width: 30px;
    height: 26px;
`


const FAQData = () => {
    return (
        <div>
            <Box>
                <Container maxWidth='lg'>
                    <Grid container spacing={1}>
                        <Grid item md={10} xs={12} margin='auto'>
                            <Box>
                                {accordata.map((item) => (
                                    <Accordionbox key={item}>
                                        <Accordion sx={{ boxShadow: 'none', background: 'transparent' }}>
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel1a-content"
                                                id="panel1a-header"
                                                sx={{ padding: '0px' }}
                                            >
                                                <Box display='flex' alignItems='center' gap='10px'>
                                                    <Bookicon>
                                                        <AutoStoriesOutlinedIcon />
                                                    </Bookicon> 
                                                    <Texttypography>
                                                        {item.heading}
                                                    </Texttypography>
                                                </Box>

                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Distypography>
                                                     {item.discription}
                                                </Distypography>
                                            </AccordionDetails>
                                        </Accordion>
                                    </Accordionbox>
                                ))}
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </div>
    )
}

export default FAQData;

// Accordion function components 

const accordata = [
    {
        heading: 'How can I contact Multi Token Staking?',
        discription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
    },
    {
        heading: 'How do I reset my password?',
        discription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
    },
    {
        heading: 'How to set up 2FA?',
        discription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
    },
    {
        heading: 'Reset your two-factor authentication (2FA).',
        discription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
    },
    {
        heading: 'What is the Multi Token Staking Token?',
        discription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
    },
    {
        heading: 'What Is a Utility Token?',
        discription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
    },
    {
        heading: 'How Many Multi Token Staking Tokens Will Be Issued?',
        discription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
    },
    {
        heading: 'What Is the Multi Token Staking Token Distribution?',
        discription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
    },
    {
        heading: 'When Will the Multi Token Staking Token Be Listed?',
        discription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
    },
    {
        heading: 'What Is KYC and Why Is It Required?',
        discription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
    }, 
]