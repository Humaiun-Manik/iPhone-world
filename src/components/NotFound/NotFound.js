import React from "react";
import img from "../../images/not-found.jpg";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found text-center">
      <img src={img} alt="" />
    </div>
  );
};

export default NotFound;
