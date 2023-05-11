import React from 'react';
import '../style.css';
import { Divider, IconButton, Toolbar, Typography, Badge  } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SideDrawer from './SideDrawer.tsx';

// import { makeStyles } from '@mui/styles';

// const useStyles = makeStyles((theme)=>(
//     {
//         title:{
//             flexGrow:1,
//         }  
//     }
// ))



const Header = () => {

    // const classes = useStyles();
  return (
    <div>
    <Toolbar>
    <SideDrawer>
        <IconButton color='inherit'>
            <MenuIcon/>
            </IconButton>
            </SideDrawer>
            <Typography className='title'>Blog Website</Typography>
          
            <IconButton  color='inherit' >
            <Badge badgeContent={1} color='secondary'>
            <NotificationsIcon/>
            </Badge>
            </IconButton>

               <IconButton  color='inherit'>
            <AccountCircleOutlinedIcon/>
            </IconButton>

        
    </Toolbar>  
    <Divider/>
    <Toolbar>Express Your Blogging</Toolbar>  
    </div>
  )
}

export default Header
