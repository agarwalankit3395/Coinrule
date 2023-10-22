import {
  Box,
  Button,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  Typography
} from "@mui/material";
import React from "react";
import DoneIcon from "@mui/icons-material/Done";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { get_info } from "../../utils/SmartContract";
import { useEffect } from "react";
import { useState } from "react";
import { Smart_Contract_Address } from "../../utils/SmartContract";
import useWeb3 from "../../utils/useWeb3";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import { useNavigate } from "react-router-dom";
import { ethers } from "ethers";

const oneMonthPackage = [
  "Efficient Crypto Arbitrage Opportunities",
  "Real-time Price Monitoring",
  "User-Friendly Interface",
  "Customised able Alerts (upcoming)",
  "Arbitrage Strategy Insights",
  "Customer Support",
  "Percentage Difference Indicator",
  "Limitless Opportunities",
  "Automated Trading with Pro Version(upcoming)"
];

const oneYearPackage = [
  "Efficient Crypto Arbitrage Opportunities",
  "Real-time Price Monitoring",
  "User-Friendly Interface",
  "Customised able Alerts (upcoming)",
  "Arbitrage Strategy Insights",
  "Customer Support",
  "Percentage Difference Indicator",
  "Limitless Opportunities",
  "Automated Trading with Pro Version(upcoming)",
  "Telegram group for huge opportunity's"
];

const PricingCorrily = () => {
  const [info, setInfo] = useState(0);
  const { walletAddress, setWalletAddress } = useWeb3();
  const [metamaskconnected, setMetaMaskConnected] = useState(false);
  const [subscriptionAlert, setSubscriptionAlert] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    async function main() {
      if (window.ethereum && walletAddress !== null) {
        const info = await get_info(window.ethereum, walletAddress);
        setInfo(info);
      }
    }
    main();
  }, [walletAddress]);

  const handleWalletConnect = async () => {
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

  const handleOneMonthPackage = async () => {
    try {

      const monthlyPrice = await info?.arbi_bot.MonthSubscribyionFee();
      const convertedValue =( monthlyPrice/10**18).toString()
      console.log(convertedValue, "Price check")
      console.log(monthlyPrice.toString());
      const result = await info?.arbi_bot.Subscription("1", { value: ethers.utils.parseUnits(convertedValue,"ether")});
      console.log(result);
      await result.wait();
      handleSubscriptionOpenAlert();
      navigate("/invest", { replace: true });
    } catch (error) {
      console.log(error);
      if (error.message) {
        setErrorMessage(error.message);
        handleErrorAlert();
      }
      
      if (error.reason) {
      }
    }
  };

  const handleOneYearPackage = async () => {
    try {

      const yearPrice = await info.arbi_bot.YearSubscribyionFee();
      console.log(yearPrice.toString());
      const convertedValue =( yearPrice/10**18).toString()
      console.log(convertedValue, "Price check")
  
      const result = await info.arbi_bot.Subscription("2", { value: ethers.utils.parseUnits(convertedValue,"ether")});
      await result.wait();
      handleSubscriptionOpenAlert();
      navigate("/invest", { replace: true });
    } catch (error) {
      setErrorMessage(error.reason);
      handleErrorAlert();
      console.log(error)
    }

}
  const handleMetaMaskConnection = async () => {
    setMetaMaskConnected(true);
  };

  const handelMetaMaskConnectedClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setMetaMaskConnected(false);
  };

  const handleSubscriptionOpenAlert = async () => {
    setSubscriptionAlert(true);
  };

  const handleSubscriptionCloseAlert = async (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSubscriptionAlert(false);
  };

  const handleErrorAlert = async () => {
    setErrorAlert(true);
  };

  const handleErrorCloseAlert = async (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setErrorAlert(false);
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

  return (
    <Box paddingY={"6rem"}>
      <Container maxWidth={"lg"}>
        <Grid container spacing={2}>
          <Grid item md={5} sm={12} xs={12} margin={"auto"}>
            <Box
              padding={"1.5rem"}
              borderRadius={"12px"}
              sx={{
                background: "linear-gradient(90deg,#852ef6 0%,#00ffd4 100%)"
              }}
            >
              <Box>
                <Typography variant="h5" fontWeight={"500"} color="#fff">
                  Monthly Plan - 25USDT
                </Typography>
              </Box>
              <Box paddingY={"1.5rem"}>
                <List>
                  {oneMonthPackage.map((data) => (
                    <ListItem>
                      <ListItemIcon>
                        <DoneIcon sx={{ color: "#fff" }} />
                      </ListItemIcon>
                      <Typography variant="body1" fontWeight={"400"} color="#fff">
                        {data}
                      </Typography>
                    </ListItem>
                  ))}
                </List>
              </Box>
              <Box paddingTop={"2rem"}>
                <Box
                  sx={{ gap: "10px", display: "flex", alignItems: "center" }}
                >
                  {walletAddress == null ? (
                    <Button
                      onClick={handleWalletConnect}
                      variant="contained"
                      sx={{
                        boxShadow: "none",
                        fontSize: "18px",
                        borderRadius: "50px",
                        background:
                          "linear-gradient(180deg,rgb(255,229,64) 0%,rgb(255,185,57) 100%)",
                        paddingX: "1rem",
                        color: "#fff",
                        textTransform: "capitalize",
                        width:'100%'
                      }}
                    >
                      Connect Wallet
                    </Button>
                  ) : (
                    <Button
                      onClick={handleOneMonthPackage}
                      variant="contained"
                      sx={{
                        boxShadow: "none",
                        fontSize: "20px",
                        borderRadius: "50px",
                        background:
                          "linear-gradient(180deg,rgb(255,229,64) 0%,rgb(255,185,57) 100%)",
                        paddingX: "2rem",
                        color: "#fff",
                        textTransform: "capitalize",
                        width:'100%'
                      }}
                    >
                       Subscribe
                    </Button>
                  )}
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item md={5} sm={12} xs={12} margin={"auto"}>
            <Box
              padding={"1.5rem"}
              borderRadius={"12px"}
              sx={{
                background: "linear-gradient(90deg,#606060 0%,#585858 100%)"
              }}
            >
              <Box>
                <Typography variant="h5" fontWeight={"500"} color="#fff">
                  Year Plan - 200 USDT
                </Typography>
              </Box>
              <Box paddingY={"1.5rem"}>
                <List>
                  {oneYearPackage.map((yeardata, index) => (
                    <ListItem key={index}>
                      <ListItemIcon>
                        <DoneIcon sx={{ color: "#fff" }} />
                      </ListItemIcon>
                      <Typography variant="body1" fontWeight={"400"} color="#fff">
                        {yeardata}
                      </Typography>
                    </ListItem>
                  ))}
                </List>
              </Box>
              <Box paddingTop={"2rem"}>
                <Box
                  sx={{ gap: "10px", display: "flex", alignItems: "center" }}
                >
                  {walletAddress == null ? (
                    <Button
                      onClick={handleWalletConnect}
                      variant="contained"
                      sx={{
                        boxShadow: "none",
                        fontSize: "18px",
                        borderRadius: "50px",
                        background:
                          "linear-gradient(180deg,rgb(255,229,64) 0%,rgb(255,185,57) 100%)",
                        paddingX: "1rem",
                        color: "#fff",
                        textTransform: "capitalize",
                        width:'100%'
                      }}
                    >
                      Connect Wallet
                    </Button>
                  ) : (
                    <Button
                      onClick={handleOneYearPackage}
                      variant="contained"
                      sx={{
                        boxShadow: "none",
                        fontSize: "20px",
                        borderRadius: "50px",
                        background:
                          "linear-gradient(180deg,rgb(255,229,64) 0%,rgb(255,185,57) 100%)",
                        paddingX: "2rem",
                        color: "#fff",
                        textTransform: "capitalize",
                        width:'100%'
                      }}
                    >
                      Subscribe
                    </Button>
                  )}
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar
          open={metamaskconnected}
          autoHideDuration={2000}
          onClose={handelMetaMaskConnectedClose}
          message="Connected to MetaMask"
        ></Snackbar>
      </Stack>
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar
          open={subscriptionAlert}
          autoHideDuration={2000}
          onClose={handleSubscriptionCloseAlert}
          message="Subscribe to the One Month Plan!"
        ></Snackbar>
      </Stack>
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar
          open={errorAlert}
          autoHideDuration={5000}
          onClose={handleErrorCloseAlert}
          message={errorMessage}
        ></Snackbar>
      </Stack>
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar
          open={open}
          autoHideDuration={2000}
          onClose={handleClose}
          message="Please Install MetaMask!"
        ></Snackbar>
      </Stack>
    </Box>
  );
};

export default PricingCorrily;
