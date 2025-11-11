import React from 'react';

const BookingCard = ({booked}) => {
    return (
        <div className=''>
            <div className=" flex gap-40 bg-base-100 px-5 py-3 rounded-xl">
        <img
          className="size-10 rounded-box"
          src={booked.thumbnail}
        />

        <div>
          <div>{booked.name}</div>
          <div className="text-xs uppercase font-semibold opacity-60">
            Remaining Reason
          </div>
        </div>

        <button className="btn ">delete</button>
      </div>
        </div>
    );
};

export default BookingCard;