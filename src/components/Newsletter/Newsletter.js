import React from "react";
import Subtitle from "../Subtitle/Subtitle";
import ActionButton from "../ActionButton/ActionButton";
import Title from "../Title/Title";

import "./Newsletter.css";

function Newsletter({ classes = "" }) {
  const classesString = classes ? `newsletter ${classes}` : "newsletter";
  const subscribe = (e) => {
    e.preventDefault();
  };
  return (
    <div className={classesString}>
      <Subtitle content='Newsletter' classes='flex_center' />
      <Title content='Subscribe To Our Newsletter' purpose='section' classes='mr_bottom-15' />
      <p className='newsletter__message'>And never miss latest Updates!</p>
      <form className='newsletter__form' onSubmit={subscribe}>
        <div className='newsletter__input'>
          <input onChange={() => {}} className='newsletter__input-text' type='text' placeholder='Email address' />
          <ActionButton type='submit' label='Subscribe' />
        </div>
      </form>
    </div>
  );
}
export default Newsletter;
