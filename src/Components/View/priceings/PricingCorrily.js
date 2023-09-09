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
  const [allowancePrice, setAllowancePrice] = useState(0);
  const { walletAddress, setWalletAddress } = useWeb3();
  const [metamaskconnected, setMetaMaskConnected] = useState(false);
  const [subscriptionAlert, setSubscriptionAlert] = useState(false);
  const [allowanceAlert, setAllowanceAlert] = useState(false);
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

  useEffect(() => {
    async function checkAllowance() {
      if (window.ethereum && walletAddress !== null) {
        const checkAllowance = await info?.usdt_token.allowance(
          walletAddress.toString(),
          Smart_Contract_Address
        );
        const check = checkAllowance.toString();
        console.log(Number(check));
        setAllowancePrice(Number(check));
      }
    }
    checkAllowance();
  }, [info, allowancePrice, walletAddress]);

  const handleWalletConnect = async () => {
    try {
      if (walletAddress == null) {
        const account = await window.ethereum.request({
          method: "eth_requestAccounts"
        });
        console.log(account[0]);
        setWalletAddress(account[0]);
        handleMetaMaskConnection();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleOneMonthPackage = async () => {
    try {
      const checkAllowance = await info?.usdt_token.allowance(
        walletAddress.toString(),
        Smart_Contract_Address
      );
      console.log(checkAllowance.toString());

      const monthlyPrice = await info?.arbi_bot.MonthSubscribyionFee();
      console.log(monthlyPrice.toString());
      // const pricecheck = ethers.utils.parseUnits(monthlyPrice, "gwei");
      const Monthprice = monthlyPrice.toString();
      const yearPrice = await info?.arbi_bot.YearSubscribyionFee();
      if (checkAllowance.toString() < Monthprice) {
        const res = await info?.usdt_token.increaseAllowance(
          Smart_Contract_Address,
          yearPrice.toString()
        );
        console.log(res);
        await res.wait();
        handleAllowanceAlert();
      }
      const result = await info?.arbi_bot.Subscription("1");
      console.log(result);
      await result.wait();
      handleSubscriptionOpenAlert();
      navigate("/invest", { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  const handleOneYearPackage = async () => {
    const checkAllowance = await info.usdt_token.allowance(
      walletAddress.toString(),
      Smart_Contract_Address
    );
    console.log(checkAllowance.toString());

    const yearPrice = await info.arbi_bot.YearSubscribyionFee();
    console.log(yearPrice);
    if (checkAllowance.toString() < yearPrice.toString()) {
      const res = await info.usdt_token.increaseAllowance(
        Smart_Contract_Address,
        yearPrice.toString()
      );
      console.log(res);
      await res.wait();

      handleAllowanceAlert();
    }
    const result = await info.arbi_bot.Subscription("2");
    await result.wait();
    handleSubscriptionOpenAlert();
    navigate("/invest", { replace: true });
  };

  const handleUnsubscribe = async () => {
    const res = await info.arbi_bot.UnSubscription();
    console.log(res);
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

  const handleSubscriptionOpenAlert = async () => {
    setSubscriptionAlert(true);
  };

  const handleSubscriptionCloseAlert = async (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSubscriptionAlert(false);
  };

  const handleAllowanceAlert = async () => {
    setAllowanceAlert(true);
  };

  const handleAllowanceCloseAlert = async (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setAllowanceAlert(false);
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
                <Typography variant="h4" fontWeight={"500"} color="#fff">
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
                      <Typography variant="h6" fontWeight={"400"} color="#fff">
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
                        textTransform: "capitalize"
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
                        textTransform: "capitalize"
                      }}
                    >
                      {allowancePrice > 0 ? "Subscribe" : "Allowance"}
                    </Button>
                  )}
                  {/* <Button
                    onClick={handleUnsubscribe}
                    endIcon={<AddOutlinedIcon sx={{ color: "#fff" }} />}
                    variant="contained"
                    sx={{
                      boxShadow: "none",
                      fontSize: "20px",
                      borderRadius: "50px",
                      paddingX: "2rem",
                      color: "#fff",
                      textTransform: "capitalize"
                    }}
                  >
                    unsubscribe
                  </Button> */}
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
                <Typography variant="h4" fontWeight={"500"} color="#fff">
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
                      <Typography variant="h6" fontWeight={"400"} color="#fff">
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
                        textTransform: "capitalize"
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
                        textTransform: "capitalize"
                      }}
                    >
                      {allowancePrice > 0 ? "Subscribe" : "Allowance"}
                    </Button>
                  )}

                  {/* <Button
                    onClick={handleUnsubscribe}
                    endIcon={<AddOutlinedIcon sx={{ color: "#fff" }} />}
                    variant="contained"
                    sx={{
                      boxShadow: "none",
                      fontSize: "20px",
                      borderRadius: "50px",
                      paddingX: "2rem",
                      color: "#fff",
                      textTransform: "capitalize"
                    }}
                  >
                    unsubscribe
                  </Button> */}
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
          open={allowanceAlert}
          autoHideDuration={2000}
          onClose={handleAllowanceCloseAlert}
          message="Allowance has been provided!"
        ></Snackbar>
      </Stack>
    </Box>
  );
};

export default PricingCorrily;
