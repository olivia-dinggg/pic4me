import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';

export default function Navigation() {
  return (
    <Box sx={{ 
        width: '100%',
        position: 'fixed',
        bottom: 0, 
      }}>
      <BottomNavigation>
        <BottomNavigationAction label="Nearby" icon={<HomeIcon />} />
        <BottomNavigationAction label="Add" icon={<AddAPhotoIcon />} />
        <BottomNavigationAction label="Home" icon={<PersonIcon />} />
      </BottomNavigation>
    </Box>
  );
}