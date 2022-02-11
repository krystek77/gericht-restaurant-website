import React from 'react';
import Spoon from '../Spoon/Spoon';
import './Subtitle.css';

function Subtitle({ classes = '', content = 'Give subtitle' }) {
  const classesString = classes ? `subtitle ${classes}` : 'subtitle';
  return (
    <div className={classesString}>
      <p className="subtitle__text">{content}</p>
      <Spoon />
    </div>
  );
}
export default Subtitle;
