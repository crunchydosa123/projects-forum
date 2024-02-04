import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import DetailsIcon from '@mui/icons-material/Details';
import GroupIcon from '@mui/icons-material/Group';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Sidebar = () => {
  return (
    <List className='flex flex-col items-center justify-around flex-wrap' style={{ width: '200px', backgroundColor: '#f0f0f0', height: '100%', position: 'fixed' }}>
      <ListItem >
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Project Page" />
      </ListItem>
      <ListItem >
        <ListItemIcon>
          <DetailsIcon />
        </ListItemIcon>
        <ListItemText primary="Project Details Page" />
      </ListItem>
      <ListItem >
        <ListItemIcon>
          <GroupIcon />
        </ListItemIcon>
        <ListItemText primary="Collaboration Page" />
      </ListItem>
      <ListItem >
      <ListItemIcon>
          <AccountCircleIcon />
        </ListItemIcon>
        <ListItemText primary="Profile" />
      </ListItem>
    </List>
  );
};

export default Sidebar;