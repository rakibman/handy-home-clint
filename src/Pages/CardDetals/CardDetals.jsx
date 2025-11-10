import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import Swal from "sweetalert2";

const CardDetals = () => {
  const navigate = useNavigate();
  const [service, setService] = useState({});
  const [loading, setLoading] = useState(true);
  const {
    name,
    provider_email,
    price,
    service_Name,
    category,
    description,
    thumbnail,
  } = service;
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:3000/services/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setService(data);
        setLoading(false);
      });
  }, [id]);
  const handleDlete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/services/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            navigate("/all-models");

            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };
  if (loading) {
    return <p>loading...</p>;
  }
  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10 grid grid-cols-5 gap-4">
      {/* Thumbnail */}
      <img
        src={thumbnail}
        alt={service_Name}
        className="w-full h-fit object-cover rounded-lg mb-6 col-span-3"
      />

      <div className="col-span-2">
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
          {/* <p className="text-gray-500 text-sm">Created at: {created_at}</p>
          <p className="text-gray-500 text-sm">Total Booked: {Booked}</p> */}
        </div>

        {/* Description */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Description</h2>
          <p className="text-gray-700">{description}</p>
        </div>

        {/* Book Button */}
        <div className="mt-6 flex gap-3">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-lg transition">
            Book Now
          </button>
          <Link to={`/update/${id}`} className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-lg transition">
            Update
          </Link>
          <button
            onClick={() => handleDlete(id)}
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-lg transition"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardDetals;
