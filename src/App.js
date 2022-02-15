/* eslint-disable no-unused-vars */
import React from 'react';
import images from './constants/images';
import './App.css';

import {
  Header,
  Hero,
  AboutUs,
  Reservation,
  Menu,
  Special,
  Chef,
  Customers,
  Video,
  Blog,
  Laurels,
  Updates,
  PhotoGallery,
  Footer,
} from './containers';

const App = () => {
  return (
    <div className="app">
      <div className="curve curve_left">
        <img src={images.bg_vL_SVG} alt="left curve" />
      </div>
      <div className="curve curve_right">
        <img src={images.bg_vR_SVG} alt="right curve" />
      </div>
      <Header />
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
      <Footer />
    </div>
  );
};
export default App;
