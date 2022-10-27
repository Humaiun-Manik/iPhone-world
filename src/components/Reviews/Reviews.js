import React from "react";
import { Row } from "react-bootstrap";
import useReview from "../../hooks/useReview";
import "./Reviews.css";
import Review from "../Review/Review";

const Reviews = () => {
  const [reviews] = useReview();

  return (
    <div className="container text-center">
      <h1 className="mt-5">What our customers say!</h1>
      <Row xs={1} md={2} className="py-5 mx-auto d-flex justify-content-center">
        {reviews.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </Row>
    </div>
  );
};

export default Reviews;
