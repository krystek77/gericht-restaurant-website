import React from 'react';
import Header from '../containers/Header/Header';
import images from '../constants/images';
import Spoon from '../components/Spoon/Spoon';
import Description from '../components/Description/Description';
import ActionButton from '../components/ActionButton/ActionButton';
import Copyright from '../components/Copyright/Copyright';
import Bite from '../components/Bite/Bite'

function NotFounded() {
  return (
    <div className="page page_not-founded">
      <Bite position="not-founded_left"/>
      <Bite position="not-founded_right"/>
      <Header />
      <div className="page__not-founded background_marble_scroll">
        <img
          className="page__not-founded-image"
          src={images.NotFounded}
          alt="Not Founded"
        />
        <Spoon classes="mr_bottom-2" />
        <Description classes="description_not-founded mr_bottom-2">
          Oops! The page you are looking for does not exist. It might have been
          moved or deleted.
        </Description>
        <ActionButton label="Back To Home" />
      </div>
      <Copyright />
    </div>
  );
}

export default NotFounded;
