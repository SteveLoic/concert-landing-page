import React from 'react';
import { scroller } from 'react-scroll';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SideDrawer = ({ open, onClose }) => {
  const scrollToElement = (element) => {
    scroller.scrollTo(element, {
      duration: 1500,
      delay: 1000,
      smooth: true,
      offset: -150,
    });
    onClose();
  };

  return (
    <Drawer anchor='right' open={open} onClose={onClose}>
      <List component='nav'>
        <ListItem
          button
          onClick={() => {
            scrollToElement('EventStart');
          }}
        >
          Event Start in
        </ListItem>
        <ListItem
          button
          onClick={() => {
            scrollToElement('VenueInfo');
          }}
        >
          Venue Info
        </ListItem>
        <ListItem
          button
          onClick={() => {
            scrollToElement('Highligts');
          }}
        >
          Highlights
        </ListItem>
        <ListItem
          button
          onClick={() => {
            scrollToElement('Pricing');
          }}
        >
          Pricing
        </ListItem>
        <ListItem
          button
          onClick={() => {
            scrollToElement('Location');
          }}
        >
          Location
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideDrawer;
