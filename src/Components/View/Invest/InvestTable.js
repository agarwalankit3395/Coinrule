import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { get_info } from "../../utils/SmartContract";
import useWeb3 from "../../utils/useWeb3";
import { Box, Button, CircularProgress, Typography } from "@mui/material";

import InfiniteScroll from 'react-infinite-scroller';


import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const InvestTable = () => {
  const { walletAddress } = useWeb3();
  // eslint-disable-next-line
  const [tabledata, setTabledata] = useState([]);
  const [expiryData, setExpiryDate] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    () => {
      async function main() {
        if (window.ethereum) {
          if (walletAddress !== null) {
            const info = await get_info(window.ethereum, walletAddress);
            const checkexpiryData = await info.arbi_bot.checkExpiryDate(
              walletAddress
            );
            const currentdate = Math.floor(new Date().getTime() / 1000.0);
            setExpiryDate({
              checkexpiryData: Number(checkexpiryData),
              currentdate: currentdate
            });
          }
        }
      }
      main();
    },
    [walletAddress]
  );

  

  const handleAPI = () => {
    let config = {
      method: "get",
      url: "http://localhost:4000",
    //   url: "http://159.65.124.216:3001/refresh",
      headers: {}
    };
    axios
      .request(config)
      .then(response => {
        const alldata = response.data;
        setIsLoading(false);
        setTabledata(alldata);
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (typeof window !== 'undefined') { // Check if we're running in the browser.
       handleAPI()
     }
  },[])

  const handleRefreshButton = async () => {
    setIsLoading(true);
    handleAPI();
  };
  const itemsPerPage = 20;
  const [records, setrecords] = useState(itemsPerPage);
  const [hasMore, setHasMore] = useState(true);

  const loadMore = () => {
    if (records === tabledata.length) {
        setHasMore(false);
    } else {
        setTimeout(() => {
            setrecords(records + itemsPerPage);
          }, 2000);
    }
  }

  return (
    <Paper style={{ width: "100%", height: "100%", boxShadow: "none" }}>
      {walletAddress !== null &&
      expiryData.checkexpiryData >= expiryData.currentdate
        ? isLoading
          ? <Box textAlign={'center'}><CircularProgress size={40} /></Box>
          : <Paper sx={{ width: "100%", overflow: "hidden" }}>
              <Box textAlign={'right'} sx={{ marginRight : "2rem"}}>
                <Button onClick={handleRefreshButton}>Refresh</Button>
              </Box>
              <TableContainer sx={{ maxHeight: 720 }}>
                <Table sx={{ minWidth: 650 }} aria-label="customized table">
                <InfiniteScroll pageStart={0}
                    loadMore={loadMore}
                    hasMore={hasMore}
                    loader={<CircularProgress />}
                    useWindow={false}>
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">Symbol 1</TableCell>
                      <TableCell align="center">Symbol 2</TableCell>
                      <TableCell align="center">Price 1</TableCell>
                      <TableCell align="center">Price 2</TableCell>
                      <TableCell align="center">Volume 1</TableCell>
                      <TableCell align="center">Volume 2</TableCell>
                      <TableCell align="center">Exchange 1</TableCell>
                      <TableCell align="center">Exchange 2</TableCell>
                      <TableCell align="center">Network</TableCell>
                      <TableCell align="center">Difference</TableCell>
                      <TableCell align="center">Percent</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    
                    {tabledata.map(cryptoDatas => {
                      return (
                        <TableRow key={cryptoDatas.percent}>
                          <TableCell align="center">
                            {cryptoDatas.s1}
                          </TableCell>
                          <TableCell align="center">
                            {cryptoDatas.s2}
                          </TableCell>
                          <TableCell align="center">
                            {Number.parseFloat(cryptoDatas.p1).toFixed(4)}
                          </TableCell>
                          <TableCell align="center">
                            {Number.parseFloat(cryptoDatas.p2).toFixed(4)}
                          </TableCell>
                          <TableCell align="center">
                            {Number.parseFloat(cryptoDatas.v1).toFixed(4)}
                          </TableCell>
                          <TableCell align="center">
                            {Number.parseFloat(cryptoDatas.v2).toFixed(4)}
                          </TableCell>
                          <TableCell align="center">
                            {cryptoDatas.e1}
                          </TableCell>
                          <TableCell align="center">
                            {cryptoDatas.e2}
                          </TableCell>
                          <TableCell align="center">
                            {cryptoDatas.networks}
                          </TableCell>
                          <TableCell align="center">
                            {Number.parseFloat(cryptoDatas.difference).toFixed(4)}
                          </TableCell>
                          <TableCell align="center">
                            {Number.parseFloat(cryptoDatas.percent).toFixed(4)}%
                          </TableCell>
                        </TableRow>
                      );
                    })}
                    
                  </TableBody>
                  </InfiniteScroll>
                </Table>
              </TableContainer>
            </Paper>
        : <Box paddingY="2rem" textAlign={"center"}>
            <Typography
              variant="h4"
              fontWeight={"600"}
              padding={"2rem"}
              bgcolor={"#e3f2fd"}
              borderRadius={"12px"}
            >
              {" "}Not Connected
            </Typography>
          </Box>}
    </Paper>
  );
};

export default InvestTable;
