import React from 'react';
import './SpecialItem.css';

function SpecialItem({ name, price, tags }) {
  return (
    <div className="special__menu-item">
      <div className="special__menu-header">
        <p className="special__menu-name">{name}</p>
        <div className="special__menu-dash"></div>
        <p className="special__menu-price">{`$${price}`}</p>
      </div>
      <p className="special__menu-tags">{tags}</p>
    </div>
  );
}
export default SpecialItem;
