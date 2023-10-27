import React from 'react'
import { Toolbar, Box, useMediaQuery, useTheme, Container } from '@mui/material'

import logo from './DitiaeBank.png'
import DrawerComponent from './DrawerComponent';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import NavBar from './NavBar';
import ConnectButton from './ConnectButton';

const Navbarmain = styled.div`
    // background: ${({ theme }) => theme.soft}; 
    position: absolute;
    top:0;
    display:flex;
    align-items:center;
    z-index:10;
    width:100%;
    height:100px;
`

const Logo = styled.div``
const Img = styled.img` 
    width:150px
`
styled.div`
    margin-left: 1rem;
    cursor: pointer;
`
styled.div`    
        cursor: pointer; 
        background: ${({ theme }) => theme.bgBtns};
        padding: 10px 20px;
        border-radius: 5px;
        font-size: 16px;
        font-weight: 700;
        color: #fff; 
    $:hover { 
        background: ${({ theme }) => theme.bg};
    }
`



const HeaderBar = ({router }) => {
 
    const theme = useTheme(); 

    const isMatch = useMediaQuery(theme.breakpoints.down('md'));

  
    return (
        <React.Fragment>
            <Navbarmain>
                <Container maxWidth='xl'>
                    <Toolbar sx={{paddingX:'0px'}}>
                        <Box paddingY='8px' component={Link} to='/'>
                            <Logo>
                                <Img src={logo} sizes='' style={{borderRadius:'12px'}} alt='' />
                            </Logo>
                        </Box>
                        {
                            isMatch ? (
                                <>
                                    <DrawerComponent />
                                    <Box>
                                        <ConnectButton />
                                    </Box>
                                </>
                            ) : (
                                <>
                                    <Box marginLeft='auto'>
                                        <NavBar />
                                    </Box>
                                    <Box sx={{ marginLeft: '3rem' }} >
                                        <ConnectButton />
                                    </Box>
                                      
                                </>
                            )}
                    </Toolbar>
                </Container>
            </Navbarmain>
        </React.Fragment>
    )
};

export default HeaderBar;

