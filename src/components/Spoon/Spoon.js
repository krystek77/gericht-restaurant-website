import React from 'react';
import images from '../../constants/images';
import './Spoon.css';

function Spoon({ classes = '' }) {
  const classesString = classes ? `spoon ${classes}` : 'spoon';
  return <img className={classesString} src={images.spoon} alt="spoon" />;
}
export default Spoon;
