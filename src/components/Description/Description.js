import React from 'react';
import './Description.css';

function Description({ children, classes = '', text = 'Give some text' }) {
  const classesString = classes ? `description ${classes}` : 'description';
  return <p className={classesString}>{children}</p>;
}
export default Description;
