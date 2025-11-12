import React from "react";
import ReviewCard from "../ReviewCard/ReviewCard";

const Reviews = ({ reviews }) => {
    const ftReviews = reviews.slice(0, 3);

  return (
    <div className="grid grid-cols-3">
      {ftReviews?.map((review) => (
        <ReviewCard review={review} />
      ))}
    </div>
  );
};

export default Reviews;
