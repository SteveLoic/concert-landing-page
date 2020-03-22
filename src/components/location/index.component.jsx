import React from 'react';

const LocationComponent = () => {
  return (
    <div className='location_wrapper'>
      <iframe
        title='location'
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1989.9123429887657!2d9.713163673867655!3d4.056145178434233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1061127eb9d065d9%3A0x19d777c7a6bf7631!2sStade%20Omnisport%20De%20Bepanda!5e0!3m2!1sde!2sde!4v1584886357796!5m2!1sde!2sde'
        width='100%'
        height='500px'
        frameBorder='0'
        allowfullScreen=''
        aria-hidden='false'
        tabindex='0'
      />

      <div className='location_tag'>
        <div>Location</div>
      </div>
    </div>
  );
};

export default LocationComponent;
