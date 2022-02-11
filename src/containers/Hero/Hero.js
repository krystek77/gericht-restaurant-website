/* eslint-disable no-unused-vars */
import React from 'react';
import images from '../../constants/images';
import './Hero.css';
import ActionButton from '../../components/ActionButton/ActionButton';
import Title from '../../components/Title/Title';
import Subtitle from '../../components/Subtitle/Subtitle';

const heroImages = [images.hero_01, images.hero_02, images.hero_03];

const Hero = () => {
  return (
    <div className="hero section_padding">
      <div className="hero__inner">
        <div className="hero__info">
          <Subtitle content="Chase the new Flavour" classes="mr_bottom-05" />
          <Title
            purpose="page"
            classes="title_header-h1 mr_bottom-2"
            content="The Key To Fine Dining"
          />
          <p className="description hero__description mr_bottom-2">
            Sit tellus lobortis sed senectus vivamus molestie. Condimentum
            volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
            aliquam amet tellus
          </p>
          <ActionButton label="Explore More" />
        </div>

        <div className="hero__images">
          <div className="hero__images-container">
            {heroImages.map((image, index) => (
              <div className="hero__image-card" key={`hero-image_${index + 1}`}>
                <img className="hero__image" src={image} alt={image} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="hero__indicators">
        {heroImages.map((_, index) => {
          return (
            <React.Fragment key={index}>
              {index === 1 && <div className="pointer hero__pointer"></div>}
              <span className="hero__indicator" key={index}>
                {`0${index + 1}`}
              </span>
            </React.Fragment>
          );
        })}
      </div>

      <button className="hero__scroll-button">
        <div className="pointer pointer_horizontal hero__pointer"></div>
        <span className="hero__scroll-text">SCROLL</span>
      </button>
    </div>
  );
};
export default Hero;
