import { Box, Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React, { useState } from 'react'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'; 
import { Link } from 'react-router-dom';
// import styled from 'styled-components'; sx={{width:'150px'}}


const Pages = [
  {
    titles: 'Home',
    route: '/about'
  }, 
  {
    titles: 'Pricing',
    route: '/price'
  },
  {
    titles: 'Crypto Arbitrage',
    route: '/invest'
  } 
]

const DrawerComponent = () => {

  const [openDrawer, setOpenDrawer] = useState(false);


  return (
    <React.Fragment>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List sx={{width:'200px'}}> 
          {
            Pages.map((page, index) => (

              <ListItemButton key={page} onClick={() => setOpenDrawer(false)}>
                <ListItemIcon>
                  <ListItemText>
                    <Link to={page.route} style={{ textDecoration: 'none', color: '#000' }}>
                      {page.titles}
                    </Link>
                  </ListItemText>
                </ListItemIcon>
              </ListItemButton>
            ))
          }

        </List>
      </Drawer>
      <Box marginLeft='auto'>
        <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
          <MenuRoundedIcon />
        </IconButton>
      </Box>
    </React.Fragment>
  )
}

export default DrawerComponent;