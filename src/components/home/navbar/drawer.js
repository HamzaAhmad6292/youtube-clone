import React from 'react';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Drawer from '@mui/material/Drawer';
import Slide from '@mui/material/Slide'; // Import Slide component
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '@/redux/slices/userSlices';
import UploadVideo from '../../uploadVideo';

function DrawerComponent({ setOpenDrawer, handleDrawerClose, openDrawer }) {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);

  const handlelogout = () => {
    dispatch(logoutUser());
  };

  return (
    <Drawer
      open={openDrawer}
      onClose={handleDrawerClose}
      // Apply Slide transition to the drawer
      TransitionComponent={Slide}
      // Slide from right to left
      anchor="left"
    >
      <Box sx={{ width: 250 }} role="presentation" onKeyDown={handleDrawerClose}>
        <Box sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
          <Typography variant="h6">User Profile</Typography>
        </Box>
        <Divider />
        <List>
          {/* User profile section */}
          <ListItem button>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Username" secondary="user@gmail.com" />
          </ListItem>
        </List>
        <Divider />
        <List>
          {/* Navigation links */}
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <SubscriptionsIcon />
            </ListItemIcon>
            <ListItemText primary="Subscriptions" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <VideoLibraryIcon />
            </ListItemIcon>
            <Link href="uploadvideo ">
              <ListItemText primary="Upload Video" />
            </Link>
          </ListItem>
        </List>
        <Divider />
        <List>
          {/* Dark mode toggle */}
          <ListItem button>
            <ListItemIcon>{/* {darkMode ? <Brightness7Icon /> : <Brightness4Icon />} */}</ListItemIcon>
            <ListItemText primary={'Dark Mode'} />
          </ListItem>
        </List>
        <Divider />
        <List>
          {/* Logout button */}
          <ListItem button onClick={handlelogout}>
            <ListItemIcon>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
}

export default DrawerComponent;
