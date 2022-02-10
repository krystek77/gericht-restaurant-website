import React from 'react';
import images from '../../constants/images';
import './Bite.css';

function Bite({ position = '' }) {
  const classes = position ? `bite ${position}` : 'bite';

  return (
    <div className={classes}>
      <img
        className="bite__image"
        src={images.bite_delight}
        alt="bite delight in every"
      />
    </div>
  );
}
export default Bite;
