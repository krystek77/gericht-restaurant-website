import React from 'react';
import {
  Hero,
  AboutUs,
  Reservation,
  Menu,
  Special,
  Chef,
  Customers,
  Video,
  Laurels,
  Blog,
  PhotoGallery,
} from '../containers';

import images from '../constants/images';

function Home() {
  return (
    <div className="page">
      <div className="curve curve_left">
        <img src={images.bg_vL_SVG} alt="left curve" />
      </div>
      <div className="curve curve_right">
        <img src={images.bg_vR_SVG} alt="right curve" />
      </div>
      <Hero />
      <AboutUs />
      <Reservation />
      <Menu />
      <Special />
      <Chef />
      <Customers />
      <Video />
      <Laurels />
      <Blog />
      <PhotoGallery />
    </div>
  );
}

export default Home;
