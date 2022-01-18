import React from "react";
import { Animation } from "./index";
import "../styles/container4.scss";
import "../styles/global.scss";

const Container4 = () => {
  return (
    <div className="con4">
      <div className="con4-animation">
        <Animation title="BECOME A DONOR" color="#fff" speed="3" />
      </div>
      <div className="con4-img center">
        <div className="con4-title">GIVE A BLOOD CANCER PATIENT THE KISS OF LIFE</div>
      </div>
    </div>
  );
};

export { Container4 };