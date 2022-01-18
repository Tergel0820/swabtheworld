import React from "react";
import "../styles/global.scss";

const Button = ({ title, className, style }) => {
  return (
    <button className={className}>
      <div className="swab-button-background bg-secondary"></div>
      <div style={style} className="swab-button-title">
        {title}
      </div>
      <div style={style} className="swab-button-title">
        {title}
      </div>
    </button>
  );
};

export { Button };