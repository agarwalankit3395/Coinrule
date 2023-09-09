import React, { useState } from 'react'
import styled from 'styled-components'

import useWeb3 from "../../utils/useWeb3";
import { get_info } from '../../utils/SmartContract';



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
const ConnectButton = () => {
    const [userWalletAddress, setUserWalletAddress] = useState("");
    const { setWalletAddress } = useWeb3();
    const handleConnectMetaMask = async () => {
        const BNBchainId = '0x61';
        if (window.ethereum) {
            try {
                console.log("Hello Metamask!");
                const currentChainId = await window.ethereum.request({ method: 'eth_chainId' });
                console.log(currentChainId);
                console.log(BNBchainId)
                if (BNBchainId === currentChainId) {
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
                    await get_info(window.ethereum, account);
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

    return (
        <div>
            <Connectbtn variant='contained' className='explorebtns' onClick={handleConnectMetaMask}>
                {userWalletAddress ? userWalletAddress : "Connect Wallet"}
            </Connectbtn>
        </div>
    )
}

export default ConnectButton;