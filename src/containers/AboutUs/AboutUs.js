/* eslint-disable no-unused-vars */
import React from "react";
import "./AboutUs.css";
import images from "../../constants/images";

const AboutUs = () => {
  return (
    <div className='about-us background_marble'>
      <div className='about-us__background'>
        <img className='about-us__g-letter' src={images.G_SVG} alt='G letter' />
      </div>

      <div className='about-us__info'>
        <h2 className='title title_wrap_no mr_bottom-05'>About Us</h2>
        <img className='spoon mr_bottom-2 spoon_direction_left' src={images.spoon} alt='spoon' />
        <p className='description description_align_left-reverse mr_bottom-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
        <button className='button'>Know More</button>
      </div>

      <div className='about-us__knife'>
        <img src={images.knife} alt='knife' />
      </div>      

      <div className='about-us__history'>
        <h2 className='title title_wrap_no mr_bottom-05'>Our History</h2>
        <img className='spoon mr_bottom-2 spoon_direction_right' src={images.spoon} alt='spoon' />
        <p className='description description_align_left mr_bottom-2'>Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.</p>
        <button className='button'>Know More</button>
      </div>
    </div>
  );
};
export default AboutUs;
