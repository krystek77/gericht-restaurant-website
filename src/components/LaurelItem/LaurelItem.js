import React from 'react';
import Title from '../../components/Title/Title';
import Description from '../../components/Description/Description';
import './LaurelItem.css';

function LaurelItem({ image, title, content }) {
  return (
    <div className="laurel__item">
      <div className="laurel__image-wrapper">
        <img className="laurel__image" src={image} alt={title} />
      </div>
      <div className="laurel__content">
        <Title content={title} purpose="item" classes="title_header-h4" />
        <Description>{content}</Description>
      </div>
    </div>
  );
}

export default LaurelItem;
