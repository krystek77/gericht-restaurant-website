/* eslint-disable no-unused-vars */
import React from 'react';
import './AboutUs.css';
import images from '../../constants/images';
import ActionButton from '../../components/ActionButton/ActionButton';
import Title from '../../components/Title/Title';
import Description from '../../components/Description/Description';
import Spoon from '../../components/Spoon/Spoon';

const AboutUs = () => {
  return (
    <div className="about-us background_marble">
      <div className="about-us__background">
        <img className="about-us__g-letter" src={images.G_SVG} alt="G letter" />
      </div>

      <div className="about-us__info">
        <Title
          classes="title_wrap_no mr_bottom-05"
          purpose="section"
          content="About Us"
        />
        <Spoon classes="spoon_direction_left mr_bottom-2" />
        <Description classes="description_align_left-reverse">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
          adipiscing ultrices vulputate posuere tristique. In sed odio nec
          aliquet eu proin mauris et.
        </Description>
        <ActionButton label="Know More" />
      </div>

      <div className="about-us__knife">
        <img src={images.knife} alt="knife" />
      </div>

      <div className="about-us__history">
        <Title
          classes="title_wrap_no mr_bottom-05"
          purpose="section"
          content="Our History"
        />
        <img
          className="spoon mr_bottom-2 spoon_direction_right"
          src={images.spoon}
          alt="spoon"
        />
        <Description classes="description_align_left">
          Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat.
          Risus placerat morbi volutpat habitasse interdum mi aliquam In sed
          odio nec aliquet.
        </Description>
        <ActionButton label="Know More" />
      </div>
    </div>
  );
};
export default AboutUs;
