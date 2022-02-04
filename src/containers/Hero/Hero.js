/* eslint-disable no-unused-vars */
import React from 'react';
import images from '../../constants/images';
import './Hero.css';

const heroImages = [images.hero_01, images.hero_02, images.hero_03];

const Hero = () => {
  return (
    <div className="hero section_padding">
      <div className="hero__inner">
        <div className="hero__info">
          <div className="subtitle mr_bottom-05">
            <p className="subtitle__text">Chase the new Flavour</p>
            <img className="subtitle__spoon" src={images.spoon} alt="spoon" />
          </div>
          <h1 className="title title_header-h1 hero__title mr_bottom-2">
            The Key To Fine Dining
          </h1>
          <p className="description hero__description mr_bottom-2">
            Sit tellus lobortis sed senectus vivamus molestie. Condimentum
            volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
            aliquam amet tellus
          </p>
          <button className="button hero__button">Explore More</button>
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
    </div>
  );
};
export default Hero;
