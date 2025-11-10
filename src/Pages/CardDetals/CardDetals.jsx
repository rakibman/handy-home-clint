import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const CardDetals = () => {
  const [service, setService] = useState({});
  const {
    name,
    provider_email,
    price,
    service_Name,
    category,
    description,
    thumbnail,
    created_at,
    Booked,
  } = service;
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    fetch(`http://localhost:3000/services/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setService(data);
        // console.log(data);
        // setLoading(false);
      });
  }, [id]);
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10 md:flex gap-4">
      {/* Thumbnail */}
      <img
        src={thumbnail}
        alt={service_Name}
        className="w-full h-64 object-cover rounded-lg mb-6"
      />

      <div>
        {/* Service Info */}
        <div className="mb-4">
          <h1 className="text-3xl font-bold mb-2">{service_Name}</h1>
          <p className="text-gray-600 text-sm mb-1">
            Category: <span className="font-semibold">{category}</span>
          </p>
          <p className="text-gray-600 text-sm mb-1">
            Provider: <span className="font-semibold">{name}</span>
          </p>
          <p className="text-gray-600 text-sm mb-1">
            Email: <span className="font-semibold">{provider_email}</span>
          </p>
          <p className="text-gray-600 text-sm mb-1">
            Price: <span className="font-semibold">${price}</span>
          </p>
          <p className="text-gray-500 text-sm">Created at: {created_at}</p>
          <p className="text-gray-500 text-sm">Total Booked: {Booked}</p>
        </div>

        {/* Description */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Description</h2>
          <p className="text-gray-700">{description}</p>
        </div>

        {/* Book Button */}
        <div className="mt-6">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-lg transition">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardDetals;
