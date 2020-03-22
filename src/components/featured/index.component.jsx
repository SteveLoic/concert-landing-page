import React from 'react';
import CarrouselComponent from './carrousel.component';
import TimeUntilComponent from './timeUntil.component';

const IndexComponent = () => {
  return (
    <div style={{ position: 'relative' }}>
      <CarrouselComponent />
      <div className='artist_name'>
        <div className='wrapper'>Ariana Grande</div>
      </div>
      <TimeUntilComponent />
    </div>
  );
};

export default IndexComponent;
