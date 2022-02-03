import React, {useState} from 'react';
import { MdRestaurantMenu } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';

import images from '../../constants/images';
import './Header.css';

const Header = () => {
  const [turnMenu, setTurnMenu] = useState(false);

  const openMenu = () => setTurnMenu(true);
  const closeMenu = () => setTurnMenu(false);

  return (
    <div className="header">
      <div className="logo">
        <img className="logo__image" src={images.logo} alt="logo" />
      </div>
      <ul className="navigation">
        <li className="navigation__item"><a href="#home" className="link link_letter_04"> Home </a> </li>
        <li className="navigation__item"><a href="#pages" className="link link_letter_04"> Pages </a> </li>
        <li className="navigation__item"><a href="#contact" className="link link_letter_04"> Contact Us </a> </li>
        <li className="navigation__item"><a href="#blog" className="link link_letter_04"> Blog </a> </li>
        <li className="navigation__item navigation__item_mr_0"> <a href="landing" className="link link_letter_04"> Landing </a> </li>
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

      <div className="navigation-small-screen">
        <GiHamburgerMenu className='navigation-small-screen__open-button' onClick={openMenu}/>
        {turnMenu && (
          <div className='navigation-small-screen__overlay slide-bottom' onClick={closeMenu}>
            <MdRestaurantMenu className='navigation-small-screen__close-button' />
            <ul className='navigation-small-screen__menu'>
              <li className="navigation-small-screen__item"><a href="#home" className="link navigation-small-screen__link link_letter_04"> Home </a> </li>
              <li className="navigation-small-screen__item"><a href="#pages" className="link navigation-small-screen__link link_letter_04"> Pages </a> </li>
              <li className="navigation-small-screen__item"><a href="#contact" className="link navigation-small-screen__link link_letter_04"> Contact Us </a> </li>
              <li className="navigation-small-screen__item"><a href="#blog" className="link navigation-small-screen__link link_letter_04"> Blog </a> </li>
              <li className="navigation-small-screen__item"><a href="landing" className="link navigation-small-screen__link link_letter_04"> Landing </a> </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
export default Header;
