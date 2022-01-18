import React from "react";
import "../../styles/footer.scss";
import "../../styles/global.scss";

const CircleButton = ({ icon }) => {
  return (
    <div className="circle-button center">
      <div className="circle-button-background"></div>
      <svg className="circle-button-icon" role="img">
        <use xlinkHref={icon}></use>
      </svg>
    </div>
  );
};

export { CircleButton };