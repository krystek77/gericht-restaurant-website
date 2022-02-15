import React from 'react';
import './BackgroundCurve.css';

function BackgroundCurve({ image, classes = '' }) {
  const classesString = classes ? `curve ${classes}` : 'curve';
  return (
    <div className={classesString}>
      <img src={image} alt="curve" />
    </div>
  );
}
export default BackgroundCurve;
