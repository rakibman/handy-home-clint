import React, { useContext } from "react";
// import toast from "react-hot-toast";
// import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router";
import toast from "react-hot-toast";

const BookingCard = ({ booked}) => {
  console.log(booked.service_id);
  const { user } = useContext(AuthContext);
  const id = booked?._id;
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
    const handelReview = (e) => {
      e.preventDefault();
      const formData = {
        userImg: user?.photoURL,
        name: e.target.name.value,
        experince: e.target.experince.value,
        product_id: booked.service_id,
      };
      console.log(formData);
      fetch("http://localhost:3000/review", {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then(() => {
          toast.success("successfully added!");
        })
        .catch((err) => console.log(err));
    };
  return (
    <div className=" flex gap-40 bg-base-100 px-5 py-3 rounded-xl justify-between items-center ">
      <div>
        <img className="size-10 rounded-box" src={booked.thumbnail} />
        
      </div>

      <div>
        <div className="text-xl font-semibold py-1">
          <span>Booked By :</span> {booked.name}
        </div>
        <div className="text-xs py-1">
          <span className="font-semibold ">Booked Service :</span>{" "}
          {booked.Service_name}
        </div>
        <div className="text-xs py-1">
          <span className="font-semibold ">Booking Date :</span>{" "}
          {booked.booked_date}
        </div>
        <div className="text-xs py-1">
          <span className="font-semibold ">Provider Email :</span>{" "}
          {booked.Provider_email}
        </div>
      </div>
      <div className="flex gap-2">
        <Link
        // to={`/`}
          onClick={() => document.getElementById(`my_modal${id}`).showModal()}
          className="btn"
        >
          Review
        </Link>
        <button onClick={handleDlete} className="btn ">
          Cancel
        </button>
      </div>

      {/* modal section  */}
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id={`my_modal${id}`} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <form onSubmit={(e) => handelReview(e)} className="fieldset">
            <label className="label">Your Name</label>
            <input
              type="text"
              name="name"
              className="input w-full"
              placeholder="Name"
            />
            <label className="label">Your Experince</label>
            <input
              type="text"
              name="experince"
              className="input h-20 w-full"
              rows="3"
              placeholder="Write here"
            />
            <button role="submit" className="btn btn-neutral mt-4">
              Submit
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
  );
};

export default BookingCard;
