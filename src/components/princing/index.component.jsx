import React, { useState } from 'react';
import MyButton from './../ui/button/buttton.component';

import Zoom from 'react-reveal/Zoom';

const PricinComponent = () => {
  const [tickets, setTickets] = useState({
    prices: [100, 150, 250],
    positions: ['Balcony', 'Meduim', 'Star'],
    desc: [
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy ',
      'eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam ',
      'voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
    ],
    Link: ['http://sales/b', 'http://sales/m', 'http://sales/s'],
    delay: [500, 0, 500],
  });

  const showBoxes = () =>
    tickets.prices.map((box, i) => (
      <Zoom delay={tickets.delay[i]} key={i}>
        <div className='pricing_item'>
          <div className='pricing_inner_wrapper'>
            <div className='pricing_title'>
              <span>XAF{tickets.prices[i]}</span>
              <span>{tickets.positions[i]}</span>
            </div>
            <div className='pricing_description'>{tickets.desc[i]}</div>
            <div className='pricing_buttons'>
              <MyButton
                text='Purchase'
                bck='#ffa800'
                color='#ffffff'
                link={tickets.Link[i]}
              />
            </div>
          </div>
        </div>
      </Zoom>
    ));

  return (
    <div className='bck_black'>
      <div className='center_wrapper  pricing_section'>
        <h2>Pricing</h2>
        <div className='pricing_wrapper'>{showBoxes()}</div>
      </div>
    </div>
  );
};

export default PricinComponent;
