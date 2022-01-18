import React, { useState } from "react";
import { Percent, Animation } from "../index";
import "../../styles/global.scss";
import "../../styles/container3.scss";

const Container3 = () => {
  const [tColor, setTColor] = useState("#5e62d1");
  const [bgColor, setBgColor] = useState("#5fecc8");
  const [twi, setTwi] = useState("160px");
  const [acp, setAcp] = useState("70px");
  const [hider, setHider] = useState("100px");
  const [hiderTop, setHiderTop] = useState("270px");
  const color = "#5e62d1";
  const bColor = "#5fecc8";
  const color1 = "#3c6d79";
  const bColor1 = "#f9ae65";
  const color2 = "#dc856a";
  const bColor2 = "#dbed83";
  const color3 = "#ffd196";
  const bColor3 = "#47a96f";
  setTimeout(() => {
    setTwi(0);
    setTimeout(() => {
      setAcp(0);
      setTimeout(() => {
        setHider("50px");
        setHiderTop("300px");
      }, 100);
    }, 400);
  }, 1000);
  const interval = setInterval(() => {
    switch (tColor) {
      case color:
        setTColor(color1);
        setBgColor(bColor1);
        break;
      case color1:
        setTColor(color2);
        setBgColor(bColor2);
        break;
      case color2:
        setTColor(color3);
        setBgColor(bColor3);
        break;
      default:
        setTColor(color);
        setBgColor(bColor);
        break;
    }
    clearInterval(interval);
  }, 1000);
  return (
    <div style={{ backgroundColor: bgColor }} className="con3">
      <div style={{ color: tColor }} className="con3-header center">
        <div className="null"></div>
        <div style={{ top: twi }} className="twiacp">
          THE WORLD IS
        </div>
        <div style={{ top: acp }} className="twiacp acp">
          {" "}
          A COLOURFUL PLACE
        </div>
        <div
          style={{ backgroundColor: bgColor, height: hider, top: hiderTop }}
          className="header-hider"
        ></div>
      </div>
      <Animation title="LET'S KEET IT THAT WAY" color={tColor} speed="3" />
      <div className="con3-body">
        <div style={{ color: tColor }} className="long-text">
          Anyone can get blood cancer, but not everyone has the same chance of
          survival. Patients who need a stem cell transplant require a donor of
          the same ethnicity. But right now, 70% of all registered donors are
          white, even though roughly 88% of the world's population is not.
          <div className="margin-top">
            With your help, we can give all patients a better chance of finding
            their life-saving match.
          </div>
        </div>
        <div style={{ borderColor: tColor }} className="con3-half-circle"></div>
        <div style={{backgroundColor: bgColor}} className="percents-con">
          <Percent
            tColor={tColor}
            title1="70,1 % — WHITE"
            title2="15,2 % — ASIAN"
          />
          <Percent
            tColor={tColor}
            title1="4,8 % — OTHER"
            title2="4,8 % — UNKNOWN"
          />
          <Percent
            tColor={tColor}
            title1="1,4 % — BLACK"
            title2="1,3 % — ARAB"
          />
          <Percent
            tColor={tColor}
            title1="1,0 % — FIRST NATIONS"
            title2="0,9 % — HISPANIC"
          />
          <Percent
            tColor={tColor}
            title1="0,4 % — METIS"
            title2="0,4 % — JEWISH"
          />
          <div style={{ backgroundColor: tColor }} className="short-line"></div>
        </div>
        <div className="con3-footer" style={{ color: tColor }}>
          COMPOSITION OF STEM CELL DONOR REGISTRIES IN CANADA (HEMA-QUEBEC AND
          CANADIAN BLOOD SERVICES, 2017)
        </div>
      </div>
    </div>
  );
};

export { Container3 };