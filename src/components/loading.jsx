import React, { useState } from "react";
import "../styles/loading.scss";
import "../styles/global.scss";

const Loading = () => {
  const [loadingLeft, setLoadingLeft] = useState("0vh");
  const [loadingRight, setLoadingRight] = useState("0vh");
  const [loadingStop, setLoadingStop] = useState("flex");
  const [loadingFlex, setLoadingFlex] = useState("flex");
  setTimeout(() => {
    setLoadingLeft("-100vh");
    setLoadingRight("100vh");
    setLoadingStop("none");
    setTimeout(() => {
      setLoadingFlex("none");
    }, 600);
  }, 2000);
  return (
    <div style={{ display: loadingFlex }} className="loading-container center">
      <div
        style={{ top: loadingLeft }}
        className="loading-animation loading-left"
      ></div>
      <div
        style={{ top: loadingRight }}
        className="loading-animation loading-right"
      ></div>
      <div
        style={{ display: loadingStop }}
        className="loading bg-primary center"
      >
        <div className="lds-ring d-inline-block">
          <div className="d-block"></div>
          <div className="d-block"></div>
          <div className="d-block"></div>
          <div className="d-block"></div>
        </div>
      </div>
    </div>
  );
};

export { Loading };