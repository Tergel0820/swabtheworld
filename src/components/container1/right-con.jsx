import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import "../../styles/right-con.scss";
import "../../styles/global.scss";

const RightCon = ({ rightConHider }) => {
  const [index, setIndex] = useState(0);
  const size = useWindowSize();

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
    useEffect(() => {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowSize;
  }
  return (
    <div className="right-con">
      <div
        style={{ width: `${rightConHider}%` }}
        className="right-con-hider"
      ></div>
      <div className="right-con-1">
        <Carousel
          className="right-con-carousel w-100 center"
          activeIndex={index}
          onSelect={handleSelect}
        >
          <Carousel.Item className="right-con-carousel w-100">
            <div className="right-con-carousel-item right-con-carousel-item-1 d-flex flex-column align-items-center w-100">
              <img
                className="right-con-carousel-item-1-circle right-con-carousel-item-1-circle-1"
                src="https://swabtheworld.com/assets/lottie-theme-0/images/Vector_Smart_Object21_copy_5_graphics.png"
              />
              <img
                className="right-con-carousel-item-1-circle right-con-carousel-item-1-circle-2"
                src="https://swabtheworld.com/assets/lottie-theme-0/images/Vector_Smart_Object21_copy_graphics.png"
              />
              <div>
                <div className="right-con-carousel-item-1-tug"></div>
                <div
                  // style={
                  //   size.height <= 1000
                  //     ? { height: "300px", width: "600px" }
                  //     : { height: size.height / 3, width: size.height / 1.5 }
                  // }
                  className="right-con-carousel-item-1-boat-con center"
                >
                  <div className="right-con-carousel-item-1-boat"></div>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item className="right-con-carousel w-100">
            <div className="right-con-carousel-item d-flex flex-column justify-content-end right-con-carousel-item-2 w-100">
              <img
                className="right-con-carousel-item-1-circle right-con-carousel-item-2-circle-1"
                src="https://swabtheworld.com/assets/lottie-theme-0/images/Vector_Smart_Object21_copy_5_graphics.png"
              />
              <img
                className="right-con-carousel-item-1-circle right-con-carousel-item-2-circle-2"
                src="https://swabtheworld.com/assets/lottie-theme-0/images/Vector_Smart_Object21_copy_graphics.png"
              />
              <img
                className="right-con-carousel-item-1-circle right-con-carousel-item-2-circle-3"
                src="https://swabtheworld.com/assets/lottie-theme-0/images/Vector_Smart_Object21_copy_5_graphics.png"
              />
              <div className="right-con-carousel-item-2-suuri"></div>
            </div>
          </Carousel.Item>
          <Carousel.Item className="right-con-carousel w-100">
            <div className="right-con-carousel-item right-con-carousel-item-3 center w-100">
              <div className="right-con-carousel-item-3-halfcircle-con center d-flex flex-column justify-content-end">
                <div className="right-con-carousel-item-3-halfcircle"></div>
              </div>
              <div className="right-con-carousel-item-3-circle-1-con d-flex flex-column justify-content-end">
                <img
                  className="right-con-carousel-item-1-circle right-con-carousel-item-3-circle-1"
                  src="https://swabtheworld.com/assets/lottie-theme-0/images/Vector_Smart_Object21_copy_5_graphics.png"
                />
              </div>
              <img
                className="right-con-carousel-item-1-circle right-con-carousel-item-3-circle-2"
                src="https://swabtheworld.com/assets/lottie-theme-0/images/Vector_Smart_Object21_copy_graphics.png"
              />
              <img
                className="right-con-carousel-item-1-circle right-con-carousel-item-3-circle-3"
                src="https://swabtheworld.com/assets/lottie-theme-0/images/Vector_Smart_Object21_copy_5_graphics.png"
              />
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};
export { RightCon };