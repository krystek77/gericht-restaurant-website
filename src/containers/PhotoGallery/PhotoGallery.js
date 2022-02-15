/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import ActionButton from '../../components/ActionButton/ActionButton';
import Title from '../../components/Title/Title';
import Subtitle from '../../components/Subtitle/Subtitle';
import Description from '../../components/Description/Description';
import images from '../../constants/images';
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from 'react-icons/bs';
import './PhotoGallery.css';

const galleryPhotos = [
  images.gallery01,
  images.gallery02,
  images.gallery03,
  images.gallery05,
];

const PhotoGallery = () => {
  const ref = useRef(null);
  const scroll = (direction) => {
    if (direction === 'LEFT') {
      ref.current.scrollLeft -= 333;
    } else {
      ref.current.scrollLeft += 333;
    }
  };

  return (
    <div className="gallery background_marble">
      <div className="gallery__content">
        <Subtitle content="Instagram" />
        <Title
          classes="title_wrap_no mr_bottom-15"
          purpose="section"
          content="Photo Gallery"
        />
        <Description classes="description_mr_bottom-15">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
          mattis ipsum turpis elit elit scelerisque egestas mu.
        </Description>
        <ActionButton label="View More" />
      </div>

      <div className="gallery__outer">
        <div className="gallery__images" ref={ref}>
          <div className="gallery__images-container">
            {galleryPhotos.map((image, index) => (
              <div
                className="gallery__image-card"
                key={`gallery-image-${index + 1}`}
              >
                <img className="gallery__image" src={image} alt={index + 1} />
                <BsInstagram className="gallery__icon" />
              </div>
            ))}
          </div>
        </div>
        <div className="gallery__scroll-buttons">
          <BsArrowLeftShort
            className="gallery__arrow-left"
            onClick={() => scroll('LEFT')}
          />
          <BsArrowRightShort
            className="gallery__arrow-right"
            onClick={() => scroll('RIGHT')}
          />
        </div>
      </div>
    </div>
  );
};
export default PhotoGallery;
