import React from "react";
import "../../styles/global.scss";
import "../../styles/container2.scss";

const Step = ({ step, title, img, style, conStyle }) => {
  return (
    <div style={conStyle} className="step-con">
      <div className="step-con1">
        <div className="step-step">STEP {step}</div>
        <div className="step-img-container center">
          <div style={style} className="step-img-con center">
            <img className="step-img" src={img} />
          </div>
        </div>
        <div className="step-big-title">{title}</div>
      </div>
    </div>
  );
};

export { Step };