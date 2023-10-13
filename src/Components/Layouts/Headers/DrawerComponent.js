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
    titles: 'Invest',
    route: '/invest'
  } 
]

// const Connectbtn = styled.div` 
//     cursor: pointer; 
//     background: ${({ theme }) => theme.bgBtns};
//     padding: 10px 20px;
//     border-radius: 5px;
//     font-size: 16px;
//     font-weight: 700;
//     color: #fff;
// `

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
        {/*<Box sx={{ margin: '10px' }} >
          <ConnectButton />
        </Box>*/}
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