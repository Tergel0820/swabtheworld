import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import {
  Container1,
  Container2,
  Container3,
  Container4,
  Container5,
  Container6,
  Footer,
} from "./index";

const Container0 = () => {
  const [scrollPos, setScrollPos] = useState(0);
  const [menuPos, setMenuPos] = useState("28px");
  const [rightConHider, setRightConHider] = useState(0);
  useEffect(() => {
    if (scrollPos <= 0.3) {
      setRightConHider(parseInt(scrollPos * 1000));
    }
    if (scrollPos <= 0) {
      setMenuPos("28px");
    } else if (scrollPos >= 0.02) {
      setMenuPos("-80px");
    }
  }, [scrollPos]);
  const myScroll = () => {
    setScrollPos(
      (document.body.scrollTop + document.documentElement.scrollTop) /
        (document.documentElement.scrollHeight -
          document.documentElement.clientHeight)
    );
  };

  window.addEventListener("scroll", myScroll);
  return (
    <Container fluid className="swab-container bg-primary m-0 p-0">
      <Container1 menuPos={menuPos} rightConHider={rightConHider} />
      <Container2 />
      <Container3 />
      <Container4 />
      <Container5 />
      <Container6 />
      <Footer />
    </Container>
  );
};

export { Container0 };