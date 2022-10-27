import React from "react";
import { Col, Row } from "react-bootstrap";
import img from "../../images/Capture.PNG";
import("./Home.css");

const Home = () => {
  return (
    <div className="container py-5  px-0">
      <Row xs={1} md={2} className="g-4 py-5">
        <Col className="home-left" lg={8}>
          <h1>Your next phone</h1>
          <h1 className="text-color">Your best phone</h1>
          <p>
            The iPhone 14 and iPhone 14 Pro may have just landed on store shelves, but rumors are already
            heating up about what to expect with next year’s iPhone 15 line. Here’s what we’ve heard so far,
            and what we expect based on Apple’s recent history
          </p>
          <button className="demo-btn">Live demo</button>
        </Col>
        <Col className="home-right d-flex align-item-center" lg={4}>
          <img className="img-fluid" src={img} alt="" />
        </Col>
      </Row>
    </div>
  );
};

export default Home;
