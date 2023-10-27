import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

import macbook from "../../../assets/homePageImg/macbook.png";
import profileweek2 from "../../../assets/homePageImg/ProfitWeek-2.png";
import profileweek4 from "../../../assets/homePageImg/ProfitWeek-4.png";
import profileweek5 from "../../../assets/homePageImg/ProfitWeek-1.2.png";
import profileweek6 from "../../../assets/homePageImg/ProfitWeek-3.2.png";

const About = () => {
  return (
    <div>
      <Box className="herosbg">
        <Box
          sx={{ paddingY: { md: "6rem", xs: "3rem" }, position: "relative" }}
        >
          <Container maxWidth="lg" sx={{ marginTop: "6rem" }}>
            <Grid container spacing={1} alignItems={"center"}>
              <Grid item md={6} xs={12}>
                <Box position="relative">
                  <Typography
                    variant="h3"
                    textAlign={"center"}
                    color={"#fff"}
                    fontWeight="500"
                    gutterBottom
                    component="h3"
                    paddingY={"1rem"}
                    marginBottom="12rem"
                  >
                    We present to you Crypto arbitrage pro
                  </Typography>
                </Box>
              </Grid>
              <Grid item md={6} xs={12}>
                <Box>
                  <img src={macbook} alt="img" width={"100%"} />
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
      <Box
        sx={{ paddingY: { md: "5rem", sm: "3rem", xs: "2rem" } }}
        position={"relative"}
      >
        <Container maxWidth="lg">
          <Grid container spacing={1} alignItems={"center"}>
            <Grid item md={6} xs={12}>
              <Box sx={{ width: { md: "90%" } }}>
                <img src={profileweek5} width="100%" alt="profile1" />
              </Box>
            </Grid>
            <Grid item md={6} xs={12}>
              <Box>
                <Typography
                  variant="h6"
                  textAlign={"left"}
                  gutterBottom
                  fontWeight={"400"}
                >
                  We are thrilled to introduce a revolutionary cryptocurrency
                  arbitrage software, designed to cater to both beginners and
                  experts alike. This advanced tool enables real-time monitoring
                  of arbitrage opportunities across more than 10 leading crypto
                  exchanges, including Binance, Kraken, MXC, and KuCoin.{" "}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box
        sx={{
          paddingY: { md: "6rem", sm: "3rem", xs: "2rem" },
          background: "#F2F2F2"
        }}
        position={"relative"}
      >
        <Container maxWidth="lg">
          <Grid container spacing={1} alignItems={"center"}>
            <Grid item md={6} xs={12}>
              <Box>
                <Typography
                  variant="h6"
                  textAlign={"left"}
                  gutterBottom
                  fontWeight={"400"}
                >
                  Arbitrage Crypto Pro is a versatile asset in your trading
                  arsenal, providing comprehensive insights and empowering quick
                  decision-making. It is designed to help you swiftly identify
                  price disparities between two different exchanges. This
                  real-time data is critical for identifying arbitrage
                  opportunities that occur when prices diverge, allowing for
                  rapid transactions in your favor.{" "}
                </Typography>
              </Box>
            </Grid>
            <Grid item md={6} xs={12}>
              <Box sx={{ width: { md: "70%" } }} margin={"auto"}>
                <img src={profileweek2} width="100%" alt="profile2" />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box
        sx={{ paddingY: { md: "6rem", sm: "3rem", xs: "2rem" } }}
        position={"relative"}
      >
        <Container maxWidth="lg">
          <Grid container spacing={1} alignItems={"center"}>
            <Grid item md={6} xs={12}>
              <Box sx={{ width: { md: "70%" } }}>
                <img src={profileweek4} width="100%" alt="profile4" />
              </Box>
            </Grid>
            <Grid item md={6} xs={12}>
              <Box>
                <Typography variant="h4" gutterBottom fontWeight={"500"}>
                  We present to you Arbitrage crypto pro software
                </Typography>
                <Typography
                  variant="h6"
                  textAlign={"left"}
                  gutterBottom
                  fontWeight={"400"}
                >
                  But that's not all. Our software goes beyond price
                  differentials. It offers in-depth analysis of trading volume
                  on both exchanges, providing a clear understanding of market
                  activity and liquidity, which are key factors for successful
                  arbitrage trades. However, the true power of our software lies
                  in presenting the percentage differences between prices on the
                  two exchanges. This metric serves as a reliable indicator for
                  quickly assessing the potential profitability of arbitrage
                  trades.{" "}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box
        sx={{
          paddingY: { md: "6rem", sm: "3rem", xs: "2rem" },
          background: "#F2F2F2"
        }}
        position={"relative"}
      >
        <Container maxWidth="lg">
          <Grid container spacing={1} alignItems={"center"}>
            <Grid item md={6} xs={12}>
              <Box>
                <Typography
                  textAlign={"left"}
                  variant="h6"
                  gutterBottom
                  fontWeight={"400"}
                >
                  In essence, Arbitrage Crypto Pro software streamlines the
                  process of recognizing and capitalizing on arbitrage
                  opportunities, eliminating the challenges and limitations of
                  manual tracking. It has the potential to reshape the crypto
                  market and become a source of income, offering you a
                  substantial competitive advantage in the ever-changing world
                  of cryptocurrencies.
                </Typography>
              </Box>
            </Grid>
            <Grid item md={6} xs={12}>
              <Box sx={{ width: { md: "70%" } }} margin={"auto"}>
                <img src={profileweek6} width="100%" alt="profile3" />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default About;
