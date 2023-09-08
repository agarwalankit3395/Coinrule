import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import Modal from 'react-modal';
import { Box, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import meta from '../../../assets/wallet-icon/metamask.svg'
import connect from '../../../assets/wallet-icon/wallet-connect.svg'

import useWeb3 from "../../utils/useWeb3";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        background: '#fff',
        borderRadius: '12px',
        width: '100%',
        maxWidth: '500px',
        border: 'none',
    },
};


const Connectbtn = styled.div` 
    cursor: pointer; 
    background: ${({ theme }) => theme.soft};
    padding: 10px 13px;
    border-radius: 5px;
    width:100%;
    font-size: 16px;
    font-weight: 500;
    color: #fff;
    transition: 0.5s; 
    &:hover { 
        background: ${({ theme }) => theme.bgLighter};
        color: ${({ theme }) => theme.text};
    }
`
const Metabtn = styled.div` 
    cursor: pointer; 
    background: ${({ theme }) => theme.bgLighter};
    padding: 24px 4rem;
    border-radius: 5px;
    width:100%;
    font-size: 16px;
    font-weight: 700; 
    text-align:center;
    transition: 0.5s; 
    &:hover { 
        background: ${({ theme }) => theme.bgBtns};
        color: ${({ theme }) => theme.boxbg};
    }
        
`



const ConnectButton = () => {
    const [userWalletAddress, setUserWalletAddress] = useState("");
    const { setWalletAddress } = useWeb3();

    useEffect(() => {
        async function main() {
            if (window.ethereum) {
                const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
                setUserWalletAddress(accounts[0])
                setWalletAddress(accounts[0])
            }
        }
        main()
    }, [])


    const handleConnectMetaMask = async () => {
        const BNBchainId = 0x61;
        if (window.ethereum) {
            try {
                console.log("Hello Metamask!");
                const currentChainId = await window.ethereum.request({ method: 'eth_chainId' });
                console.log(currentChainId);
                if (BNBchainId == currentChainId) {
                    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
                        .catch((err) => {
                            if (err.code === 4001) {
                                // EIP-1193 userRejectedRequest error
                                // If this happens, the user rejected the connection request.
                                console.log('Please connect to MetaMask.');
                            } else {
                                console.error(err);
                            }
                        });
                    const account = accounts[0];
                    setWalletAddress(account)
                    setUserWalletAddress(account);
                    console.log(account)
                } else {
                    try {
                        await window.ethereum.request({ method: 'wallet_switchEthereumChain', params: [{ chainId: '0x61' }], })
                    } catch (e) {
                        if (e.code === 4902) {
                            try {
                                await window.ethereum.request({
                                    method: 'wallet_addEthereumChain',
                                    params: [
                                        {
                                            chainId: '0x61',
                                            chainName: 'Smart Chain - Testnet',
                                            nativeCurrency: {
                                                name: 'Binance',
                                                symbol: 'BNB', // 2-6 characters long
                                                decimals: 18
                                            },
                                            blockExplorerUrls: ['https://testnet.bscscan.com'],
                                            rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545/'],
                                        },
                                    ],
                                });
                            } catch (addError) {
                                console.error(addError);
                            }
                        }
                    }
                }
            } catch (addError) {
                console.error(addError);
            }

        } else {

            console.log("Install MetaMask")
        }
    }

    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '${({ theme }) => theme.bgBtns}';
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div>
            <Connectbtn variant='contained' className='explorebtns' onClick={openModal}>
                {userWalletAddress ? userWalletAddress : "Connect Wallet"}
            </Connectbtn>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <Box display='flex' alignItems='center' justifyContent='space-between'>
                    <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Wallet Connect</h2>
                    <button onClick={closeModal} style={{ background: 'transparent', border: 'none', cursor: 'pointer', }}>
                        <CloseIcon />
                    </button>
                </Box>

                <Box paddingY='1rem' >
                    <Box marginBottom='10px'>
                        <Metabtn variant='contained' className='explorebtns'>
                            <Box>
                                <img src={meta} width='40px' />
                            </Box>
                            <Typography variant='h5' gutterBottom onClick={handleConnectMetaMask}>
                                MetaMask
                            </Typography>
                            <Typography>
                                Connect to your MetaMask Wallet
                            </Typography>
                        </Metabtn>
                    </Box>
                    {/* <Box>
                        <Metabtn variant='contained' className='explorebtns'>
                            <Box>
                                <img src={connect} width='40px' />
                            </Box>
                            <Typography variant='h5' gutterBottom>
                                MetaMask
                            </Typography>
                            <Typography>
                                Connect to your MetaMask Wallet
                            </Typography>
                        </Metabtn>
                    </Box> */}
                </Box>
            </Modal>

        </div>
    )
}

export default ConnectButton;