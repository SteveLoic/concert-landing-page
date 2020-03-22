import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import Button from './../ui/button/buttton.component';

class DiscountComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disacountstart: 0,
      discountEnd: 30,
    };
  }

  procentage = () => {
    if (this.state.disacountstart < this.state.discountEnd) {
      this.setState({
        disacountstart: this.state.disacountstart + 1,
      });
    }
  };

  componentDidUpdate() {
    setTimeout(() => {
      this.procentage();
    }, 30);
  }

  render() {
    return (
      <div className='center_wrapper'>
        <div className='discount_wrapper'>
          <Fade onReveal={() => this.procentage()}>
            <div className='discount_porcentage'>
              <span>{this.state.disacountstart}%</span>
              <span>OFF</span>
            </div>
          </Fade>

          <Slide right>
            <div className='discount_description'>
              <h3>Purchase ticket before 16th December</h3>
              <p>
                tempor invidunt ut labore et dolore magna aliquyam erat, sed
                diam voluptua. At vero eos et accusam et justo duo dolores et ea
                rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                Lorem ipsum dolor sit amet.
              </p>
              <div>
                <Button
                  text='purchase tickets'
                  bck='chocolate'
                  color='#ffffff'
                  link='http://google.com'
                />
              </div>
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}

export default DiscountComponent;
