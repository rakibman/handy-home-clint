import React, { useEffect, useState } from "react";
import BookingCard from "../../Components/BookingCard";

const MyBooking = () => {
  const [booking, setBooking] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    fetch("https://handy-home-server.vercel.app/my-bookings")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setBooking(data);
      });
  }, [refresh]);

  if (!booking) {
    return <p>loading...</p>;
  }
  return (
    <div>
      <h1 className="text-4xl py-5 font-bold text-center">Your Bookings</h1>
      <div className="grid grid-cols-1 space-y-3">
        {booking?.map((booked) => (
          <BookingCard
            setRefresh={setRefresh}
            key={booked._id}
            booked={booked}
          />
        ))}
      </div>
    </div>
  );
};

export default MyBooking;
