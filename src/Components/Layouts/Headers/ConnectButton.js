import React, { useEffect } from "react";
import styled from "styled-components";

import useWeb3 from "../../utils/useWeb3";
import { get_info } from "../../utils/SmartContract";
import { Box, Button } from "@mui/material";

import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";

import { useState } from "react";
import LogoutIcon from '@mui/icons-material/Logout';

const Connectbtn = styled.div`
  cursor: pointer;
  background: ${({ theme }) => theme.soft};
  padding: 10px 10px;
  border-radius: 5px;
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  transition: 0.5s;
  &:hover {
    background: ${({ theme }) => theme.bgLighter};
    color: ${({ theme }) => theme.text};
  }
`;

const ConnectButton = () => {
  const { walletAddress, setWalletAddress } = useWeb3();
  const [open, setOpen] = React.useState(false);
  const [connected, setConnected] = useState(false);
  const [metamaskconnected, setMetaMaskConnected] = useState(false);

  useEffect(() => {
    async function main() {
      if (walletAddress !== null) {
        console.log(walletAddress);
        const account = await window.ethereum.request({
          method: "eth_requestAccounts"
        });
        setWalletAddress(account[0]);
      }
    }
    main();
  }, [walletAddress]);

  const handleConnectMetaMask = async () => {
    try {
      const BNBchainId = "0x61";
      if (window.ethereum && walletAddress == null) {
        console.log("Hello Metamask!");
        const currentChainId = await window.ethereum.request({
          method: "eth_chainId"
        });
        console.log(currentChainId);
        console.log(BNBchainId);
        if (BNBchainId === currentChainId) {
          const accounts = await window.ethereum
            .request({ method: "eth_requestAccounts" })
            .catch((err) => {
              if (err.code === 4001) {
                // EIP-1193 userRejectedRequest error
                // If this happens, the user rejected the connection request.
                console.log("Please connect to MetaMask.");
              } else {
                console.error(err);
              }
            });
          const account = accounts[0];
          setWalletAddress(account);
          await get_info(window.ethereum, account);
          console.log(account);
          handleMetaMaskConnection();
        } else {
          try {
            await window.ethereum.request({
              method: "wallet_switchEthereumChain",
              params: [{ chainId: "0x61" }]
            });
          } catch (e) {
            if (e.code === 4902) {
              try {
                await window.ethereum.request({
                  method: "wallet_addEthereumChain",
                  params: [
                    {
                      chainId: "0x61",
                      chainName: "Smart Chain - Testnet",
                      nativeCurrency: {
                        name: "Binance",
                        symbol: "BNB", // 2-6 characters long
                        decimals: 18
                      },
                      blockExplorerUrls: ["https://testnet.bscscan.com"],
                      rpcUrls: [
                        "https://data-seed-prebsc-1-s1.binance.org:8545/"
                      ]
                    }
                  ]
                });
              } catch (addError) {
                console.error(addError);
              }
            }
          }
        }
      } else if (!window.ethereum) {
        handleClick();
        console.log("Install MetaMask");
      } else {
        console.log("Already Connected");
      }
    } catch (addError) {
      console.error(addError);
    }
  };

  const handleMetaMaskConnection = async () => {
    setMetaMaskConnected(true);
  };

  const handelMetaMaskConnectedClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setMetaMaskConnected(false);
  };
  const handlemetamaskClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setConnected(false);
  };
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleDisconnectMetaMask = async () => {
    setWalletAddress(null);
    setConnected(true);
  };

  return (
    <div>
      {walletAddress == null ? (
        <Button variant="contained" onClick={handleConnectMetaMask} sx={{ paddingY: '10px', paddingX:'10px', backgroundColor: '#03af96 !important', boxShadow: 'none !important' }}>
          Connect Wallet
        </Button>
      ) : (
        // <div>
        //   <div>{walletAddress}</div>
        //   <div>
        //   </div>
        // </div>
        <Button variant="contained" onClick={handleDisconnectMetaMask}
          endIcon={<LogoutIcon sx={{ color: '#fff' }} />}
          sx={{
            paddingY: '10px', paddingX:'10px', backgroundColor: '#03af96 !important', boxShadow: 'none !important',
          }}
        >
          <Box className="walletAddress_length" >{walletAddress}</Box>
        </Button>
      )}
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar
          open={open}
          autoHideDuration={2000}
          onClose={handleClose}
          message="Please Install MetaMask!"
        ></Snackbar>
      </Stack>
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar
          open={connected}
          autoHideDuration={2000}
          onClose={handlemetamaskClose}
          message="Disconnected to MetaMask"
        ></Snackbar>
      </Stack>
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar
          open={metamaskconnected}
          autoHideDuration={2000}
          onClose={handelMetaMaskConnectedClose}
          message="Connected to MetaMask"
        ></Snackbar>
      </Stack>
    </div>
  );
};

export default ConnectButton;

//  <div>
//        {walletAddress !== null ? (
//          <div>
//            <ConnectButton
//              variant="contained"
//              className="explorebtns"
//              onClick={handleDisconnectMetaMask}
//            >
//              Disconnect
//            </ConnectButton>
//          </div>
//        ) : (
//          <div>
//            <Button variant="contained" onClick={handleConnectMetaMask}>
//              Connect Wallet
//            </Button>
//           <Connectbtn
//             variant="contained"
//             className="explorebtns"
//             onClick={handleConnectMetaMask}
//           >
//             Connect Wallet
//           </Connectbtn>
//         </div>
//        )}
//      </div>
