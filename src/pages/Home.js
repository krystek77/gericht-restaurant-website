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
  Footer,
} from '../containers';
import BackgroundCurve from '../components/BackgroundCurve/BackgroundCurve';
import Layout from '../components/Layout/Layout';

import images from '../constants/images';

function Home() {
  return (
    <Layout>
      <BackgroundCurve classes="curve_left-home" image={images.bg_vL_SVG} />
      <BackgroundCurve classes="curve_right-home" image={images.bg_vR_SVG} />
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
    </Layout>
  );
}

export default Home;
