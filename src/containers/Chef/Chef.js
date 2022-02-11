import React from "react";
import Subtitle from "../../components/Subtitle/Subtitle";
import Title from "../../components/Title/Title";
import Description from "../../components/Description/Description";

import images from "../../constants/images";
import "./Chef.css";

const Chef = () => {
  return (
    <div className='chef background_marble_scroll'>
      <div className='chef__image-wrapper'>
        <img className='chef__image' src={images.chef} alt='chef' />
      </div>
      <div className='chef__content'>
        <Subtitle content="Chef's Word" />
        <Title content='What We Believe It' purpose='section' classes='mr_bottom-4' />
        <div className='chef__quote'>
          <img className="chef__quote-image" src={images.quote} alt='quote' />
          <p className='chef__quote-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .</p>
        </div>
        <Description classes='description_mr_bottom-4'>auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.</Description>
        <div className="chef__signature">
          <p className="chef__signature-name">Kevin Luo</p>
          <p className="chef__signature-job-position">Chef & Founder</p>
        </div>
        <img className="chef__picture" src={images.KevinLuo} alt="Kevin Luo - chef" />
      </div>
    </div>
  );
};
export default Chef;
