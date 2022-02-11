import React from "react";
import "./CustomerItem.css";

function CustomerItem({ image, info, name, job }) {
  return (
    <div className='customer-card'>
      <div className='customer-card__image-wrapper'>
        <img className='customer-card__image' src={image} alt={name} />
      </div>
      <div className='customer-card__content'>
        <p className='customer-card__info'>{info}</p>
        <p className='customer-card__name'>{name}</p>
        <p className='customer-card__job'>{job}</p>
      </div>
    </div>
  );
}
export default CustomerItem;
