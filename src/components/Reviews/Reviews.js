import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
import React from "react";
import { Col, Row } from "react-bootstrap";
import useReview from "../../hooks/useReview";
import "./Reviews.css";
import Rating from "react-rating";

const Reviews = () => {
  const [reviews] = useReview();

  return (
    <div className="container text-center">
      <h1 className="mt-5">What our customers say!</h1>
      <Row xs={1} md={2} className="py-5 mx-auto d-flex justify-content-center">
        {reviews.map((review) => (
          <Col key={review._id} className="review-container border rounded m-3" md={6} lg={3}>
            <img src={review.picture} alt="" />
            <h4>{review.name}</h4>
            <p>{review.comment}</p>
            <p>
              Rating:
              <Rating
                initialRating={review.star}
                readonly
                emptySymbol={
                  <FontAwesomeIcon className="text-warning px-1" icon={emptyStar}></FontAwesomeIcon>
                }
                fullSymbol={<FontAwesomeIcon className="text-warning px-1" icon={fullStar}></FontAwesomeIcon>}
              />
            </p>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Reviews;
