/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";
import Bite from "../../components/Bite/Bite";
import videos from "../../constants/videos";
import "./Video.css";

const Video = () => {
  const [isPlayed, setIsPlayed] = useState(false);
  const ref = useRef(null);

  const handleVideo = () => {
    if (isPlayed) {
      ref.current.pause();
      setIsPlayed(false);
    } else {
      ref.current.play();
      setIsPlayed(true);
    }
  };
  return (
    <div className='video-section'>
      <Bite position="top-left-2"/>
      <video className='video-section__video' muted loop ref={ref}>
        <source src={videos.video01} type='video/mp4' />
      </video>
      <div className='video-section__overlay'>
        <button className='video-section__play-button' type='button' onClick={handleVideo}>
          {isPlayed ? <BsFillPauseFill className='video-section__pause-icon' /> : <BsFillPlayFill className='video-section__play-icon' />}
        </button>
      </div>
    </div>
  );
};
export default Video;
