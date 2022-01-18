import React from "react";
import "../styles/global.scss";
import "../styles/animation.scss";

const Animation = ({ color, title, speed }) => {
  return (
    <div className="animation">
      <div style={{ borderColor: color }} className="animation-con">
        <div style={{ color: color }} className="animation-con1">
          <div
            style={{ animation: `letskeepit ${speed}s linear infinite` }}
            className="animation-title"
          >
            {title}
          </div>
          <div
            style={{ animation: `letskeepit ${speed}s linear infinite` }}
            className="animation-title"
          >
            {title}
          </div>
          <div
            style={{ animation: `letskeepit ${speed}s linear infinite` }}
            className="animation-title"
          >
            {title}
          </div>
          <div
            style={{ animation: `letskeepit ${speed}s linear infinite` }}
            className="animation-title"
          >
            {title}
          </div>
          <div
            style={{ animation: `letskeepit ${speed}s linear infinite` }}
            className="animation-title"
          >
            {title}
          </div>
        </div>
      </div>
    </div>
  );
};

export { Animation };