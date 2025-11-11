import React, { useEffect, useState } from "react";
import BookingCard from "../../Components/BookingCard";

const MyBooking = () => {
  const [booking, setBooking] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/my-bookings")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setBooking(data)
      });
  }, []);
  return (
    <div className="grid grid-cols-1 space-y-3">
      {booking?.map((booked) => (
        <BookingCard booked={booked} />
      ))}
    </div>
  );
};

export default MyBooking;
