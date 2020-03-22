import React from 'react';
import Slider from 'react-slick';

import slide_one from './../../resources/images/slide_one.jpg';
import slider_two from './../../resources/images/slide_two.jpg';
import slider_three from './../../resources/images/slide_three.jpg';

const CarrouselComponent = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
  };

  return (
    <div
      className='carrousel_wrapper'
      style={{
        height: `${window.innerHeight}px`,
        overflow: 'hidden',
      }}
    >
      <Slider {...settings}>
        <div>
          <div
            className='carrousel_image'
            style={{
              background: `url(${slide_one})`,
              height: `${window.innerHeight}px`,
            }}
          />
        </div>
        <div>
          <div
            className='carrousel_image'
            style={{
              background: `url(${slider_two})`,
              height: `${window.innerHeight}px`,
            }}
          />
        </div>
        <div>
          <div
            className='carrousel_image'
            style={{
              background: `url(${slider_three})`,
              height: `${window.innerHeight}px`,
            }}
          />
        </div>
      </Slider>
    </div>
  );
};

export default CarrouselComponent;
