import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Header() {
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      if (scrollPosition > 0) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    //  <div className='header_part' style={{ flexGrow: 1 }}>
    // <AppBar position="fixed" style={{ top: showHeader ? 0 : -64, transition: 'top 0.3s' }}> 
    <AppBar display="flex" position="absolute" style={{ top: showHeader ? 0 : -64, transition: 'top 0.3s' }}> 
      <Toolbar>
        <div className='header_part'>
        {/* <div> */}
          <Typography variant="h6" component="div">
            <IconButton edge="start" color="inherit" aria-label="phone">
              <PhoneIcon />
            </IconButton>
            647-260-9785 | Monday - Sunday 11:30 AM - 6:30 PM
          </Typography>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;