import React from "react";

const ReviewCard = ({ review }) => {
  const { userImg, name, experince } = review;
  const splitedExp = experince.slice(0, 100);
  return (
    <div className="shadow-2xl mx-auto w-60 h-45 px-4 py-3 bg-white/30 rounded-xl">
      <div className="flex gap-3 items-center">
        <img className="w-10 h-10 rounded-full" src={userImg} alt={name} />
        <div>
          <h1>{name}</h1>
          <h1>⭐⭐⭐⭐⭐</h1>
        </div>
      </div>
      <p className="py-3 text-left text-gray-500">"{splitedExp}"</p>
    </div>
  );
};

export default ReviewCard;
