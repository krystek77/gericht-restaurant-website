/* eslint-disable no-unused-vars */
import React from "react";
import "./PhotoGallery.css";
import images from "../../constants/images";
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

const galleryPhotos = [images.gallery01, images.gallery02, images.gallery03, images.gallery05];

const PhotoGallery = () => {
  return (
    <div className='gallery'>
      <div className='gallery__content'>
        <div className='subtitle mr_bottom-05'>
          <p className='subtitle__text mr_bottom-05'>Menu that fits you palatte</p>
          <img className='subtitle__spoon' src={images.spoon} alt='spoon' />
        </div>
        <h2 className='title mr_bottom-15'>Instagram</h2>
        <p className='description mr_bottom-15'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
        <button type='button' className='button'>
          View More
        </button>
      </div>
      <div className='gallery__images'>
        <div className='gallery__images-container'>
          {galleryPhotos.map((image, index) => (
            <div className='gallery__image-card' key={`gallery-image-${index + 1}`}>
              <img className='gallery__image' src={image} alt={index + 1} />
              <BsInstagram className='gallery__icon' />
            </div>
          ))}
        </div>
        <BsArrowLeftShort className='gallery__arrow-left' />
        <BsArrowRightShort className='gallery__arrow-right' />
      </div>
    </div>
  );
};
export default PhotoGallery;
