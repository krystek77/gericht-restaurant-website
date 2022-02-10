import React from 'react';
import './Special.css';
import images from '../../constants/images';
const wines = [
  { name: 'Chapel Hill Shiraz', price: 56, tags: 'AU | Bottle' },
  { name: 'Catena Malbec', price: 59, tags: 'AR | Bottle' },
  { name: 'La Vieille Rosé', price: 44, tags: 'FR | 750 ml' },
  { name: 'Rhino Pale Ale', price: 31, tags: 'CA | 750 ml' },
  { name: 'Irish Guinness', price: 26, tags: 'IE | 750 ml' },
];

const coctails = [
  {
    name: 'Aperol Spritz',
    price: 56,
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30m',
  },
  {
    name: "Dark 'N' Stormy",
    price: 59,
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  { name: 'Daiquiri', price: 44, tags: 'Rum | Citrus juice | Sugar' },
  {
    name: 'Old Fashioned',
    price: 31,
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    name: 'Negroni',
    price: 26,
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const Special = () => {
  return (
    <div className="special">
      <div className="subtitle flex_center mr_bottom-05">
        <p className="subtitle__text mr_bottom-05">
          Menu that fits you palatte
        </p>
        <img className="subtitle__spoon" src={images.spoon} alt="spoon" />
      </div>
      <h2 className="title mr_bottom-4">Today's special</h2>

      <div className="special__content">
        <div className="special__wines">
          <h3 className="title title_header-h3 mr_bottom-3 align_center">
            Wine & Beer
          </h3>

          {wines.map(({ name, price, tags }, index) => (
            <div className="special__menu-item" key={index}>
              <div className="special__menu-header">
                <p className="special__menu-name">{name}</p>
                <div className="special__menu-dash"></div>
                <p className="special__menu-price">{`$${price}`}</p>
              </div>
              <p className="special__menu-tags">{tags}</p>
            </div>
          ))}
        </div>
        <div className="special__image">
          <img src={images.special} alt="for making drinks" />
        </div>
        <div className="special__coctails">
          <h3 className="title title_header-h3 mr_bottom-3 align_center">
            Coctails
          </h3>

          {coctails.map(({ name, price, tags }, index) => (
            <div className="special__menu-item" key={index}>
              <div className="special__menu-header">
                <p className="special__menu-name">{name}</p>
                <div className="special__menu-dash"></div>
                <p className="special__menu-price">{`$${price}`}</p>
              </div>
              <p className="special__menu-tags">{tags}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Special;
