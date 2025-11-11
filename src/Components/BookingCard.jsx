import React from "react";

const BookingCard = ({ booked }) => {
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

      <button className="btn ">delete</button>
    </div>
  );
};

export default BookingCard;
