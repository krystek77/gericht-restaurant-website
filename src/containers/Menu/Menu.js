import React from 'react';
import Bite from '../../components/Bite/Bite';
import './Menu.css';

const Menu = () => {
  return (
    <div className="menu background_glassful">
      <div className="menu__overlay"></div>
      <Bite position="top-left" />
      <ul className="menu__items">
        <li className="menu__item mr_bottom-4">
          <a className="menu__link" href="#barmenu">
            Bar Menu
          </a>
        </li>
        <li className="menu__item mr_bottom-4">
          <a className="menu__link" href="#foodmenu">
            Food Menu
          </a>
        </li>
        <li className="menu__item">
          <a className="menu__link" href="#dessertmenu">
            Dessert Menu
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Menu;
