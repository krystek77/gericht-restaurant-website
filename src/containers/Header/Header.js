import React from 'react';
// import { MdRestaurantMenu } from 'react-icons/md';
// import { GiHamburgerMenu } from 'react-icons/gi';
import './Header.css';
import images from '../../constants/images';

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img className="logo__image" src={images.logo} alt="logo" />
      </div>
      <ul className="navigation">
        <li className="navigation__item">
          <a href="#home" className="link link_letter_04">
            Home
          </a>
        </li>
        <li className="navigation__item">
          <a href="#pages" className="link link_letter_04">
            Pages
          </a>
        </li>
        <li className="navigation__item">
          <a href="#contact" className="link link_letter_04">
            Contact Us
          </a>
        </li>
        <li className="navigation__item">
          <a href="#blog" className="link link_letter_04">
            Blog
          </a>
        </li>
        <li className="navigation__item navigation__item_mr_0">
          <a href="landing" className="link link_letter_04">
            Landing
          </a>
        </li>
      </ul>
      <div className="header__login">
        <a className="link link_letter_07" href="#login">
          Log In / Registration
        </a>
        <div className="header__divider" />
        <a className="link link_letter_07" href="#book-a-table">
          Book Table
        </a>
      </div>
      {/* <div>
        <GiHamburgerMenu />
        <div>
          <MdRestaurantMenu />
        </div>
      </div> */}
    </div>
  );
};
export default Header;
