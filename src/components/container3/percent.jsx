import React from "react"; 

const Percent = ({ tColor, title1, title2 }) => {
  return (
    <div style={{ color: tColor }} className="percent-con">
      <div style={{ backgroundColor: tColor }} className="short-line"></div>
      <div className="space-between">
        <div>{title1}</div>
        <div>{title2}</div>
      </div>
    </div>
  );
};

export { Percent };