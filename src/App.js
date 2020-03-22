import React from 'react';
import './resources/styles.css';

import { Element } from 'react-scroll';

import HeaderComponent from './components/header/header.component';
import IndexComponent from './components/featured/index.component';
import VenueInfoComponent from './components/venueInfo/venueinfo.component';
import HighlightComponent from './components/highlights/index.component';
import PricingComponent from './components/princing/index.component';
import LocationComponent from './components/location/index.component';
import FooterComponenet from './components/footer/footer.component';

function App() {
  return (
    <div className='App' style={{ height: '1500px', backgroundColor: 'blue' }}>
      <HeaderComponent />
      <Element name='EventStart'>
        <IndexComponent />
      </Element>

      <Element name='VenueInfo'>
        <VenueInfoComponent />
      </Element>

      <Element name='Highligts'>
        <HighlightComponent />
      </Element>
      <Element name='Pricing'>
        <PricingComponent />
      </Element>

      <Element name='Location'>
        <LocationComponent />
      </Element>

      <FooterComponenet />
    </div>
  );
}

export default App;
