import React from 'react';
import Button from '@material-ui/core/Button';
import TicketButton from '../../../resources/images/icons/ticket.png';

const MyButton = ({ link, bck, text, color }) => {
  return (
    <div>
      <Button
        href={link}
        variant='contained'
        size='small'
        style={{
          background: `${bck} !important`,
          color: { color },
        }}
      >
        <img src={TicketButton} className='iconImage' alt='icon_button' />
        {text}
      </Button>
    </div>
  );
};

export default MyButton;
