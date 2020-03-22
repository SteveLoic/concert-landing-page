import React, { useEffect, useState } from 'react';
import Slide from 'react-reveal/Slide';

const TimeUntilComponent = () => {
  const [remainDateUntilShow, setRemainDateUntilShow] = useState({
    deadline: 'Dec, 16, 2020',
    days: '0',
    hours: '0',
    minutes: '0',
    seconds: '0',
  });

  const { deadline, days, hours, minutes, seconds } = remainDateUntilShow;

  const getTimeUntil = (deadline) => {
    const time = Date.parse(deadline) - Date.parse(new Date());
    if (time < 0) {
      console.log('Date already passed');
    } else {
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      setRemainDateUntilShow({
        days,
        hours,
        minutes,
        seconds,
      });
    }
  };

  useEffect(() => {
    setInterval(() => {
      getTimeUntil(deadline);
    }, 1000);
  }, []);

  return (
    <Slide left delay={1000}>
      <div className='countdown_wrapper'>
        <div className='countdown_top'>Event starts in</div>
        <div className='countdown_bottom'>
          <div className='countdown_item'>
            <div className='countdown_time'>{days}</div>
            <div className='countdown_tag'>Days</div>
          </div>
          <div className='countdown_item'>
            <div className='countdown_time'>{hours}</div>
            <div className='countdown_tag'>Hrs</div>
          </div>
          <div className='countdown_item'>
            <div className='countdown_time'>{minutes}</div>
            <div className='countdown_tag'>Mins</div>
          </div>
          <div className='countdown_item'>
            <div className='countdown_time'>{seconds}</div>
            <div className='countdown_tag'>Secs</div>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default TimeUntilComponent;
