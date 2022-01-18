import React from "react";
import { Button } from "./index";
import "../styles/container6.scss";
import "../styles/global.scss";

const Container6 = () => {
  return (
    <div>
      <div className="con6 w-100 d-flex">
        <div className="con6-right-con">
          <div className="yourstemcells">
            <div className="yourstem">YOUR STEM</div>
            <div>CELLS</div>
            <div className="arebored">ARE BORED</div>
          </div>
          <div className="bosoo-mongol bosoo-mongol-3">
            Send them on a wild ride.
          </div>
        </div>
        <div className="con6-left-con">
          <div className="d-flex">
            <div className="sotinyyet-con">
              <div className="sotinyyet">SO TINY, YET SO CRUCIAL</div>
              <div className="findouthow">
                FIND OUT HOW THEY CAN MAKE A WORLD OF DIFFERENCE
              </div>
            </div>
            <div className="con6-video-con">
              <video className="con6-video" autoplay loop>
                <source
                  src="https://swabtheworld.com/assets/videos/swab_loop.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
          <div className="con6-button-con w-100">
            <Button
              title="BECOME A DONOR"
              className="swab-button d-flex bg-white"
              style={{ color: "#5e62d1" }}
            />
          </div>
        </div>
      </div>
      <div className="con7 bg-white d-flex">
        <div className="con7-left-con">
          <div className="ourpartners">
            <div className="our">OUR</div>
            <div className="partners">PARTNERS</div>
          </div>
          <div className="bosoo-mongol bosoo-mongol-4">
            Their support is invaluable.
          </div>
        </div>
        <div className="con7-right-con">
          <div className="con7-link-con">
            <a href="https://www.llscanada.org/">
              <img
                style={{ height: "130px" }}
                className="con7-img"
                src="https://swabtheworld.com/upload/images/LLSCTEST.png"
              />
            </a>
            <a href="https://www.blood.ca/swabtheworld">
              <img
                style={{ height: "90px" }}
                className="con7-img"
                src="https://swabtheworld.com/upload/images/FR_CBSTEST.png"
              />
            </a>
            <a href="https://www.cntrp.ca/">
              <img
                style={{ height: "80px" }}
                className="con7-img"
                src="https://swabtheworld.com/upload/images/CTRPTEST.png"
              />
            </a>
            <a href="https://www.hema-quebec.qc.ca/index.fr.html">
              <img
                style={{ height: "230px" }}
                className="con7-img"
                src="https://swabtheworld.com/upload/images/HemaQuebecLogo.png"
              />
            </a>
            <a href="https://wmda.info/">
              <img
                style={{ height: "100px" }}
                className="con7-img"
                src="https://swabtheworld.com/upload/images/WMDALogo.png"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Container6 };