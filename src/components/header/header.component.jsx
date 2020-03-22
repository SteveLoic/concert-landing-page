import React, { useState, useEffect } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

import SideDrawer from './sideDrawer.component';

const HeaderComponent = () => {
  const [drawerOpen, setDrawerState] = useState(false);
  const [headerShow, setHeaderShow] = useState(false);

  const handleCrow = () => {
    if (window.scrollY > 0) {
      setHeaderShow(!headerShow);
    } else {
      setHeaderShow(headerShow);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleCrow);

    return () => window.removeEventListener('scroll', handleCrow);
  }, []);

  return (
    <div>
      <AppBar
        position='fixed'
        style={{
          backgroundColor: headerShow ? '#2f2f2f' : 'transparent',
          boxShadow: 'none',
          padding: '10px 0px',
        }}
      >
        <Toolbar>
          <div className='header_logo'>
            <div className='font_righteous header_logo_venue'>The Venue</div>
            <div className=' header_logo_title'>Musical Event</div>
          </div>

          <IconButton
            aria-label='Menu'
            color='inherit'
            onClick={() => {
              setDrawerState(!drawerOpen);
            }}
          >
            <MenuIcon />
          </IconButton>
          <SideDrawer
            open={drawerOpen}
            onClose={() => setDrawerState(!drawerOpen)}
          />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default HeaderComponent;
