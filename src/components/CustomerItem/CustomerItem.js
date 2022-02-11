import React from "react";
import Description from '../Description/Description'
import "./CustomerItem.css";

function CustomerItem({ image, info, name, job }) {
  return (
    <div className='customer-card'>
      <div className='customer-card__image-wrapper'>
        <img className='customer-card__image' src={image} alt={name} />
      </div>
      <div className='customer-card__content'>
        <Description classes="description_font-style_italic description_mr_bottom-1">{info}</Description>
        <p className='customer-card__name mr_bottom-025'>{name}</p>
        <p className='customer-card__job'>{job}</p>
      </div>
    </div>
  );
}
export default CustomerItem;
