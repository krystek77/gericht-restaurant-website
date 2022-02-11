import React from 'react';
import images from '../../constants/images';
import './Subtitle.css';

function Subtitle({ classes = '', content = 'Give subtitle' }) {
  const classesString = classes ? `subtitle ${classes}` : 'subtitle';
  return (
    <div className={classesString}>
      <p className="subtitle__text">{content}</p>
      <img className="subtitle__spoon" src={images.spoon} alt="spoon" />
    </div>
  );
}
export default Subtitle;
