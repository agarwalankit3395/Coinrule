import React, { useEffect } from "react";
import styled from "styled-components";

import useWeb3 from "../../utils/useWeb3";
import { get_info } from "../../utils/SmartContract";
import { Button } from "@mui/material";
import { useState } from "react";

const Connectbtn = styled.div`
  cursor: pointer;
  background: ${({ theme }) => theme.soft};
  padding: 10px 13px;
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
        console.log("Install MetaMask");
      } else {
        console.log("Already Connected");
      }
    } catch (addError) {
      console.error(addError);
    }
  };

  const handleDisconnectMetaMask = async () => {
    setWalletAddress(null);
  };

  return (
    <div>
      {walletAddress == null ? (
        <Button variant="contained" onClick={handleConnectMetaMask}>
          Connect Wallet
        </Button>
      ) : (
        // <div>
        //   <div>{walletAddress}</div>
        //   <div>
        //   </div>
        // </div>
            <Button variant="contained" onClick={handleDisconnectMetaMask}>
            {walletAddress}
            </Button>
      )}
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
