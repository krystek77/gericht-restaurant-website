import React from "react";
import { Link } from "react-router-dom";
import './LinkButton.css'

function LinkButton({ children, to, classes = "" }) {
  const classesString = classes ? `link-button ${classes}` : "link-button";
  return (
    <Link to={to} className={classesString}>
      {children}
    </Link>
  );
}
export default LinkButton;
