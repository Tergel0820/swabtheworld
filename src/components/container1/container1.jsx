import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Header, RightCon, Num } from "../";
import "../../styles/container1.scss";
import "../../styles/global.scss";

const Container1 = ({ menuPos, rightConHider }) => {
  return (
    <Container fluid className="container1 bg-primary m-0 p-0">
      <Header menuPos={menuPos} />
      <Row className="d-flex p-0">
        <Col md="12" lg="6" xl="6">
          <div className="left-con">
            <div className="fairfightforall">
              <div className="fairfight">FAIR FIGHT</div>
              <div className="forall">FOR ALL</div>
            </div>
            <div className="second-content d-flex">
              <div className="img-con bg-secondary">
                <img
                  className="img"
                  src="https://swabtheworld.com/assets/images/layout/home-main-0.png"
                />
              </div>
              <div className="bosoo-mongol">
                Give a blood cancer patient the kiss of life.
              </div>
              <div className="wereall-con">
                <Num />
                <div className="wereall">WE'RE ALL CREATED EQUAL</div>
                <img
                  className="wereall-img"
                  src="https://swabtheworld.com/assets/images/layout/trail-00.png"
                />
              </div>
            </div>
          </div>
        </Col>
        <Col md="12" lg="6" xl="6">
          <RightCon rightConHider={rightConHider} />
        </Col>
      </Row>
    </Container>
  );
};

export { Container1 };