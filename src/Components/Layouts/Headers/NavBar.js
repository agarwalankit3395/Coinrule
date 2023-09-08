import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Box } from '@mui/material';

const Baritems = styled.div`
    color: ${({ theme }) => theme.boxbg};
    display: flex;
    gap:30px;
    padding: 13px;
`
const Menuitems = styled.div`
    display:flex;
`

const Itemsl = styled.div`
    color: ${({ theme }) => theme.boxbg}; 
    font-size: 16px;
    font-weight: normal;
    transition: 0.5s;
    position: relative;
    &:hover {
        color: ${({ theme }) => theme.bgBtns};
    }
`
 

const NavBar = () => {
    return (
        <div> 
            <Baritems>
                <Menuitems>
                    <Box className='topmenus' style={{ textDecoration: 'none' }}>
                        <Itemsl className='dropdown' style={{ display: 'flex', alignItems: 'center' }}>
                            <Link to='/about' className='dropbtn' style={{ cursor: 'pointer', textDecoration:'none', color:'#fff' }}>
                                About
                            </Link> 
                        </Itemsl>
                    </Box>
                </Menuitems>
                <Menuitems>
                    <Box className='topmenus' style={{ textDecoration: 'none' }}>
                        <Itemsl className='dropdown' style={{ display: 'flex', alignItems: 'center' }}>
                            <Link to='/price' className='dropbtn' style={{ cursor: 'pointer', textDecoration:'none', color:'#fff' }}>
                                Pricing
                            </Link> 
                        </Itemsl>
                    </Box>
                </Menuitems>
                <Menuitems>
                    <Box className='topmenus' style={{ textDecoration: 'none' }}>
                        <Itemsl className='dropdown' style={{ display: 'flex', alignItems: 'center' }}>
                            <Link to='/invest' className='dropbtn' style={{ cursor: 'pointer', textDecoration:'none', color:'#fff' }}>
                                Crypto Arbitrage
                            </Link> 
                        </Itemsl>
                    </Box>
                </Menuitems>


            </Baritems>

        </div>
    )
}

export default NavBar;