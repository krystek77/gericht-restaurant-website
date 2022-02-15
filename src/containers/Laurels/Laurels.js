/* eslint-disable no-unused-vars */
import React from 'react';
import images from '../../constants/images';
import Subtitle from '../../components/Subtitle/Subtitle';
import Title from '../../components/Title/Title';
import LaurelItem from '../../components/LaurelItem/LaurelItem';
import './Laurels.css';

const laurelsData = [
  {
    image: images.Laurel02,
    title: 'Bib Gourmond',
    content: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    image: images.Laurel01,
    title: 'Rising Star',
    content: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    image: images.Laurel05,
    title: 'AA Hospitality',
    content: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    image: images.Laurel03,
    title: 'Outstanding Chef',
    content: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

const Laurels = () => {
  return (
    <div className="laurels background_marble_scroll">
      <div className="laurels__inner">
        <div className="laurels__content">
          <Subtitle content="Awards & recognition" />
          <Title
            content="Our Laurels"
            purpose="section"
            classes="mr_bottom-4"
          />
          <div className="laurels__items">
            {laurelsData.map((laurel, index) => (
              <LaurelItem key={index} {...laurel} />
            ))}
          </div>
        </div>
        <div className="laurels__image-wrapper">
          <img className="laurels__image" src={images.Laurel} alt="Laurels" />
        </div>
      </div>
    </div>
  );
};
export default Laurels;
