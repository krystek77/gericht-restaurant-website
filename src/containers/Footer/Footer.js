import React from 'react';
import Newsletter from '../../components/Newsletter/Newsletter';
import Spoon from '../../components/Spoon/Spoon';
import Copyright from '../../components/Copyright/Copyright';
import images from '../../constants/images';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__background background_marble_scroll"></div>
      <Newsletter classes="newsletter_mr_bottom-8" />
      <div className="footer__content">
        <div className="footer__contact">
          <p className="footer__contact-header">Contact Us</p>
          <p className="footer__contact-address">
            9 W 53rd St, New York, NY 10019, USA
          </p>
          <p className="footer__contact-phone">+1 212-344-1230</p>
          <p className="footer__contact-phone">+1 212-555-1230</p>
        </div>
        <div className="footer__social-media">
          <img
            className="footer__social-media-logo"
            src={images.GerichtLogoSVG}
            alt="Gericht Logo"
          />
          <p className="footer__social-media-info">
            "The best way to find yourself is to lose yourself in the service of
            others.”
          </p>
          <Spoon />
          <div className="footer__social-media-icons">
            <img
              className="footer__social-media-facebook"
              src={images.facebook}
              alt="facebook"
            />
            <img
              className="footer__social-media-twitter"
              src={images.twitter}
              alt="twitter"
            />
            <img
              className="footer__social-media-instagram"
              src={images.instagram}
              alt="instagram"
            />
          </div>
        </div>
        <div className="footer__working-hours">
          <p className="footer__working-hours-header ">Working Hours</p>
          <div className="footer__working-hours-details">
            <p className="footer__workin-hours-days">Monday-Friday:</p>
            <p className="footer__workin-hours-time">08:00 am -12:00 am</p>
          </div>
          <div className="footer__working-hours-details">
            <p className="footer__workin-hours-days">Saturday-Sunday:</p>
            <p className="footer__workin-hours-time">07:00am -11:00 pm</p>
          </div>
        </div>
      </div>
      <Copyright />
    </div>
  );
};
export default Footer;
