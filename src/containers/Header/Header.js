import React, { useState } from "react";
import { MdRestaurantMenu } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import Spoon from "../../components/Spoon/Spoon";
import images from "../../constants/images";
import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => {
  const [turnMenu, setTurnMenu] = useState(false);

  const openMenu = () => setTurnMenu(true);
  const closeMenu = () => setTurnMenu(false);
  // prettier-ignore
  return (
    <div className="header">
      <div className="logo"> <img className="logo__image" src={images.logo} alt="logo" /> </div>

      <ul className="navigation">
        <li className="navigation__item"><Link to="/" href="#home" className="link link_letter_04"> Home </Link> </li>
        <li className="navigation__item"><a href="#pages" className="link link_letter_04"> Pages </a> </li>
        <li className="navigation__item"><a href="#contact" className="link link_letter_04"> Contact Us </a> </li>
        <li className="navigation__item"><Link to="/blog" href="#blog" className="link link_letter_04"> Blog </Link> </li>
        <li className="navigation__item navigation__item_mr_0"> <a href="landing" className="link link_letter_04"> Landing </a> </li>
      </ul>

      <div className="header__login">
        <a className="link link_letter_07" href="#login">
          Log In / Registration
        </a>
        <div className="header__divider" />
        <a className="link link_letter_07" href="#book--table">
          Book Table
        </a>
      </div>

      <div className="navigation-small-screen">
        <GiHamburgerMenu className='navigation-small-screen__open-button' onClick={openMenu}/>
        {turnMenu && (
          <div className='navigation-small-screen__overlay slide-bottom' onClick={closeMenu}>
            <MdRestaurantMenu className='navigation-small-screen__close-button' />
            <ul className='navigation-small-screen__menu mr_bottom-1'>
              <li className="navigation-small-screen__item"><a href="#home" className="link navigation-small-screen__link link_letter_04"> Home </a> </li>
              <li className="navigation-small-screen__item"><a href="#pages" className="link navigation-small-screen__link link_letter_04"> Pages </a> </li>
              <li className="navigation-small-screen__item"><a href="#contact" className="link navigation-small-screen__link link_letter_04"> Contact Us </a> </li>
              <li className="navigation-small-screen__item"><a href="#blog" className="link navigation-small-screen__link link_letter_04"> Blog </a> </li>
              <li className="navigation-small-screen__item"><a href="#landing" className="link navigation-small-screen__link link_letter_04"> Landing </a> </li>
            </ul>
            <div className="navigation-small-screen__login">
              <a className='link mr_bottom-05' href="#login">Log In / Registration</a>
              <div className='navigation-small-screen__spoon mr_bottom-05'>
                <Spoon/>
              </div>
              <a className='link' href="#book-table">Book Table</a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Header;
