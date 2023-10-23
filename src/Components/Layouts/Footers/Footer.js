import React from "react";
import styled from "styled-components";
import { Container, Grid, Box, Typography, Divider } from "@mui/material";
import { Link } from "react-router-dom";

import InstagramIcon from "@mui/icons-material/Instagram";

import TelegramIcon from "@mui/icons-material/Telegram";
import { device } from "../../utils/Device";
import withRouter from "../../../withRouter";

const Collecboxs = styled.div`
  background: ${({ theme }) => theme.boxbg};
  @media ${device.mobileS} {
    padding: 2rem 0px;
  }
  @media ${device.tablet} {
    padding: 2rem 2rem;
  }
  @media ${device.laptopL} {
    padding: 2rem 2rem;
  }
  @media ${device.desktop} {
    padding: 2rem 2rem;
  }
`;
const Hotext = styled.h3`color: ${({ theme }) => theme.text};`;
const Hr = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.textSoft};
  width: 100%;
  margin-top: 3rem;
`;
const Menuitems = styled.div`padding: 10px 0;`;

const Itemsl = styled.div`
  color: ${({ theme }) => theme.text};
  font-size: 16px;
  font-weight: 400 !important;
  transition: 0.5s;
  &:hover {
    color: ${({ theme }) => theme.bgBtns};
  }
`;
const Copys = styled.span`
  color: ${({ theme }) => theme.text};
  font-weight: 500 !important;
`;
const Iconsmain = styled.div`
  background: ${({ theme }) => theme.bgBtns};
  color: ${({ theme }) => theme.text};
  display: flex;
  padding: 6px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    background: ${({ theme }) => theme.bgLighter};
  }
`;
const Inputbase = styled.input`
  border: 1px solid ${({ theme }) => theme.bgBtns};
  background: transparent;
  padding: 10px;
  border-radius: 5px;
  color: ${({ theme }) => theme.text};
  width: 100%;
`;
const Submitbtn = styled.button`
  background: ${({ theme }) => theme.bgBtns};
  border: 1px solid ${({ theme }) => theme.bgBtns};
  color: ${({ theme }) => theme.text};
  position: relative;
  right: 2rem;
  padding: 6.7px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  cursor: pointer;
`;

const Footer = ({ router }) => {
  return (
    <div>
      <Divider sx={{ borderColor: "#ccc" }} />
      <Collecboxs className="collBoxPadd">
        <Container maxWidth="xl"> 
          <Grid container spacing={1} marginTop="1rem" alignItems={"center"}>
            <Grid item lg={4} md={12} sm={12} xs={12}>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexWrap="wrap"
                sx={{
                  justifyContent: { xs: "center", md: "center", lg:'start' },
                }}
              >
                <Copys>
                  <Typography variant="body2">
                    © Copyright 2023 Crypto arbitrage pro. All Rights Reserved
                  </Typography>
                </Copys>
              </Box>
            </Grid>
            <Grid item lg={4} md={12} sm={12} xs={12}>
              {/* <Box> */}

              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                sx={{
                  gap: "13px",
                  justifyContent: { xs: "center", md: "center", lg:'center' },
                }}
              >
                <Menuitems>
                  <Link
                    to="/aboutus"
                    target="_blank"
                    style={{ textDecoration: "none" }}
                  >
                    <Itemsl>About Us</Itemsl>
                  </Link>
                </Menuitems>
                <Menuitems>
                  <Link
                    to="/termsofServices"
                    target="_blank"
                    style={{ textDecoration: "none" }}
                  >
                    <Itemsl>Terms of Service</Itemsl>
                  </Link>
                </Menuitems>
                <Menuitems>
                  <Link
                    to="/contactUs"
                    target="_blank"
                    style={{ textDecoration: "none" }}
                  >
                    <Itemsl>Contact Us</Itemsl>
                  </Link>
                </Menuitems>
              </Box>
              {/* </Box> */}
            </Grid>
            <Grid item lg={4} md={12} sm={12} xs={12}>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="end"
                sx={{
                  gap: "10px",
                  justifyContent: { xs: "center", md: "center", lg:'end' },
                }}
              >
                <Iconsmain>
                  <InstagramIcon fontSize="small" sx={{ color: "#fff" }} />
                </Iconsmain>
                <Iconsmain>
                  <TelegramIcon fontSize="small" sx={{ color: "#fff" }} />
                </Iconsmain>

              </Box>
            </Grid>
          </Grid>
        </Container>
      </Collecboxs>
    </div>
  );
};

export default withRouter(Footer);
