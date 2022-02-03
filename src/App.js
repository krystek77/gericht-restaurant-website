import React from 'react';
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
  Laurels,
  Updates,
  PhotoGallery,
  Footer,
} from './containers';

const App = () => {
  return (
    <div>
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
      <Updates />
      <PhotoGallery />
      <Footer />
    </div>
  );
};
export default App;
