import { Box, Typography } from '@mui/material';
import React from 'react'
import styled from 'styled-components';

import metalogo from '../../../assets/wallet-icon/wallet-connect.svg'


const Walletbnt = styled.button`
    padding: 7px 13px;
    border: 1px solid ${({ theme }) => theme.bgBtns};
    background: ${({ theme }) => theme.bgBtns};
    color:  ${({ theme }) => theme.bg};
    border-radius: 10px;
    font-size: 16px;
    cursor: pointer;
    transition: 0.5s;
    display: flex;
    align-items: center;
    gap: 10px;
    &:hover {
        background: ${({ theme }) => theme.bg};
        color: ${({ theme }) => theme.bgBtns}; 
        border: 1px solid ${({ theme }) => theme.bgBtns}
    }
`

const WallBox = styled.div`
    background: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.bgBtns};
    padding: 2px 8px;
    border-radius: 3px;
`


const AddressWallet = () => {
    return (
        <div>
            <Box>
                <Walletbnt variant="outlined" >
                    <Box display='flex' alignItems='center'>
                        <img src={metalogo} width='20px' alt='metamask wallet' />
                    </Box>
                    <Box>
                        <Typography>
                            0 <span>BNB</span>
                        </Typography>
                    </Box>
                    <WallBox>
                        0xE5D3...3b0E
                    </WallBox>
                </Walletbnt>
            </Box>
        </div>
    )
}

export default AddressWallet;