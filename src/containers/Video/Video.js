/* eslint-disable no-unused-vars */
import React, { useRef, useEffect } from 'react';
import { VscPlay, VscPause } from 'react-icons/vsc';
import videos from '../../constants/videos';
import './Video.css';

const Video = () => {
  const ref = useRef(null);

  const handleVideo = () => {
    if (ref.current.paused) {
      ref.current.play();
    } else ref.current.pause();
  };
  return (
    <div className="video-section">
      <video className="video-section__video" muted loop ref={ref}>
        <source src={videos.video01} type="video/mp4" />
      </video>
      <div className="video-section__overlay">
        <button
          className="video-section__play-button"
          type="button"
          onClick={handleVideo}
        >
          <VscPlay className="video-section__play-icon" />
          {/* <VscPlay className="video-section__pause-icon" /> */}
        </button>
      </div>
    </div>
  );
};
export default Video;
