import React from 'react';
import './Title.css';

function Title({ content = 'Give title', classes = '', purpose = '' }) {
  const classesString = classes ? `title ${classes}` : 'title';

  switch (purpose) {
    case 'page': {
      return <h1 className={classesString}>{content}</h1>;
    }
    case 'section':
      return <h2 className={classesString}>{content}</h2>;
    case 'item':
      return <h3 className={classesString}>{content}</h3>;
    default: {
      throw new Error(`Title purpose unknown ${purpose}`);
    }
  }
}
export default Title;
