import React from "react";
import "../../styles/container5.scss";
import "../../styles/global.scss";

const Looking = ({ style, imgstyle, name, title, location, img }) => {
  return (
    <div className="looking-con d-flex">
      <div className="looking">LOOKING</div>
      <div style={style} className="looking-img-con center">
        <img style={imgstyle} className="looking-img" src={img} />
      </div>
      <div className="looking-con-1">
        <div className="looking-name">{name}</div>
        <div className="looking-title">{title}</div>
        <div className="looking-location d-flex justify-content-between">
          <div>{location}</div>
          <div>Why does it matter ?</div>
          <div>arrow</div>
        </div>
      </div>
    </div>
  );
};

export { Looking };