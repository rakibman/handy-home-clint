import React from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const BookingCard = ({ booked }) => {
  // console.log(booked._id);
  const navigate = useNavigate();
  const handleDlete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to Delete this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/my-bookings/${booked._id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then(() => {
            navigate("/bookings");

            Swal.fire({
              title: "Deleted!",
              text: "Your booking has been deleted.",
              icon: "success",
            });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };
  return (
    <div className=" flex gap-40 bg-base-100 px-5 py-3 rounded-xl items-center">
      <div>
        <img className="size-10 rounded-box" src={booked.thumbnail} />
        <div className="text-xs uppercase font-semibold opacity-60 py-2">
          {booked.Service_name}
        </div>
      </div>

      <div>
        <div className="text-xl font-semibold py-1">
          <span>Booked By :</span> {booked.name}
        </div>
        <div className="text-xs py-1">
          <span className="font-semibold ">Booking Date :</span>{" "}
          {booked.booked_date}
        </div>
        <div className="text-xs py-1">
          <span className="font-semibold ">Bayer Eamil :</span>{" "}
          {booked.Bayer_email}
        </div>
        <div className="text-xs py-1">
          <span className="font-semibold ">Provider Email :</span>{" "}
          {booked.Provider_email}
        </div>
      </div>

      <button onClick={handleDlete} className="btn ">
        Cancel
      </button>
    </div>
  );
};

export default BookingCard;
