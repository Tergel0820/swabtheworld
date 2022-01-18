import React from "react";
import { Step } from "../index";
import "../../styles/global.scss";
import "../../styles/container1.scss";
import "../../styles/container2.scss";

const Container2 = () => {
  return (
    <div className="swab-con2">
      <div className="itspretty-con">
        <div className="itspretty">
          <div>IT'S</div>
          <div>PRETTY</div>
          <div>DAMN</div>
          <div>SIMPLE</div>
        </div>
        <div className="bosoo-mongol bosoo-mongol-1">
          About 1 in 800 people go on to donate.
        </div>
      </div>
      <div className="step-s">
        <div className="step-container">
          <div className="step-line"></div>
          <Step
            step="1"
            title="SWAB YOUR CHEEKS AND JOIN THE STEM CELL DONOR REGISTRY."
            img="https://swabtheworld.com/assets/images/layout/step-0-1.jpg"
          />
          <Step
            step="2"
            title="WAIT TO BE MATCHED WITH A PATIENT ANYWHERE IN THE WORLD."
            img="https://swabtheworld.com/assets/images/layout/step-0-2.jpg"
            style={{ top: "85px", left: "53vw" }}
          />
          <Step
            step="3"
            title="DONATE YOUR STEM CELLS AND SAVE A LIFE."
            img="https://swabtheworld.com/assets/images/layout/step-0-3.jpg"
            style={{ top: "-20px", left: "-57px" }}
            conStyle={{ height: "110px" }}
          />
        </div>
      </div>
    </div>
  );
};

export { Container2 };