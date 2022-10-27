import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
import React from "react";
import { Col } from "react-bootstrap";
import Rating from "react-rating";

const Review = ({ review, children }) => {
  return (
    <Col key={review._id} className="review-container border rounded m-3" md={6} lg={3}>
      <img src={review.picture} alt="" />
      <h4>{review.name}</h4>
      <p>{review.comment}</p>
      <p>
        Rating:
        <Rating
          initialRating={review.star}
          readonly
          emptySymbol={<FontAwesomeIcon className="text-warning px-1" icon={emptyStar}></FontAwesomeIcon>}
          fullSymbol={<FontAwesomeIcon className="text-warning px-1 ms-1" icon={fullStar}></FontAwesomeIcon>}
        />
      </p>
    </Col>
  );
};

export default Review;
