import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import Swal from "sweetalert2";
import { SyncLoader } from "react-spinners";
import toast from "react-hot-toast";
import { AuthContext } from "../../context/AuthContext";
import Reviews from "../Reviews/Reviews";

const ServiceDetals = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [service, setService] = useState({});
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const {
    _id,
    name,
    provider_email,
    price,
    service_Name,
    category,
    description,
    thumbnail,
  } = service;
  const { id } = useParams();
  // singel data load func
  useEffect(() => {
    fetch(`http://localhost:3000/services/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setService(data);
        setLoading(false);
      });
  }, [id]);

  // review data load func
  useEffect(() => {
    fetch(`http://localhost:3000/review/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, [id]);
  const handelBooking = (e) => {
    const bayerName = e.target.name.value;
    const bayerEmail = e.target.email.value;
    e.preventDefault();
    const formData = {
      name: bayerName,
      price: price,
      service_id: _id,
      Service_name: service_Name,
      Bayer_email: bayerEmail,
      Provider_email: provider_email,
      thumbnail: thumbnail,
      booked_date: new Date(),
    };
    console.log(formData);
    fetch("http://localhost:3000/my-bookings", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then(() => {
        toast.success("successfully added!");
        navigate("/my-bookings");
      })
      .catch((err) => console.log(err));
  };
  if (loading) {
    return (
      <p>
        <SyncLoader />
      </p>
    );
  }
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-semibold text-center">Service Detals</h1>
      <div className=" p-6 bg-white shadow-md rounded-lg mt-7 grid grid-cols-5 gap-4">
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
            {/* Open the modal using document.getElementById('ID').showModal() method */}

            <button
              onClick={() => {
                if (provider_email === user.email) {
                  toast.error(
                    '"You are the provider, cannot book your own service"'
                  );
                } else {
                  if (user) {
                    document.getElementById("my_modal_5").showModal();
                  } else {
                    navigate("/login");
                  }
                }
              }}
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-lg transition"
            >
              Book Now
            </button>
          </div>
        </div>

        {/* modal section  */}
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            {/* <div className=" bg-linear-to-br from-cyan-50 via-cyan-200 to-cyan-400 flex items-center justify-center p-6">
            
          </div> */}
            <form
              onSubmit={handelBooking}
              className=" shadow-xl rounded-2xl p-8 w-full max-w-md space-y-6 bg-linear-to-br from-cyan-50 via-cyan-200 to-cyan-400"
            >
              <h2 className="text-2xl font-bold text-gray-800 text-center">
                Book a Service
              </h2>

              {/* Name Field */}
              <div>
                <label
                  className="block text-gray-700 font-medium mb-1"
                  htmlFor="name"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Enter your full name"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  className="block text-gray-700 font-medium mb-1"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  defaultValue={user?.email}
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 bg-linear-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                Confirm Booking
              </button>
            </form>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
      <div className="mt-10">
        <h1 className="text-3xl text-center font-semibold py-5">What Our Happy Customar Say</h1>
        <Reviews reviews={reviews} />
      </div>
    </div>
  );
};

export default ServiceDetals;
