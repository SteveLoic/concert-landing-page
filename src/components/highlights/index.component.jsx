import React from 'react';
import DescriptionComponent from './description.component';
import DisCountComponent from './discount.component';

const HighlightComponent = () => {
  return (
    <div className="highlight_wrapper">
      <DescriptionComponent />
      <DisCountComponent />
    </div>
  );
};

export default HighlightComponent;
