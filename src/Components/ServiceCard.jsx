import React from "react";
import { Link } from "react-router";

const ServiceCard = ({ service }) => {
  const { thumbnail, category, description, _id, service_Name, price } =
    service;
  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      <figure className="h-48 overflow-hidden">
        <img
          src={thumbnail}
          alt={service_Name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{service_Name}</h2>
        <div className="badge text-xs badge-xs badge-secondary rounded-full">
          {category}
        </div>
        <div className="font-semibold ">Price : ${price}</div>
        <p className="line-clamp-1">{description}</p>
        <div className="card-actions justify-between items-center mt-4">
          <div className="flex gap-4 text-sm text-base-content/60"></div>
          <Link
            to={`/service-detals/${_id}`}
            className="btn rounded-full bg-linear-to-r from-pink-500 to-red-600 hover:from-red-600 hover:to-pink-500 text-white w-full btn-sm"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
