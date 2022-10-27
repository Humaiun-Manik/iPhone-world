import React from "react";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useReview from "../../hooks/useReview";
import img from "../../images/Capture.PNG";
import Review from "../Review/Review";
import("./Home.css");

const Home = () => {
  const navigate = useNavigate();
  const [reviews] = useReview();
  const firstThreeReviews = reviews.slice(0, 3);

  return (
    <div className="container py-5  px-0">
      <div>
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
      <div className="text-center mt-5 pt-5">
        <h1 className="customer-reviews">
          Customer Reviews <span className="text-color">(3)</span>
        </h1>
        <Row xs={1} md={2} className="py-5 mx-auto d-flex justify-content-center">
          {firstThreeReviews.map((review) => (
            <Review key={review._id} review={review}></Review>
          ))}
        </Row>
        <button onClick={() => navigate("/reviews")} className="all-reviews">
          See All Reviews
        </button>
      </div>
    </div>
  );
};

export default Home;
