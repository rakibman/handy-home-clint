import React from "react";
import { Link } from "react-router";

const MyServiceCard = ({ service }) => {
  const { thumbnail, category, description, _id, service_Name, price } =
    service;
  return (
    <tr className="w-[1000px] bg-white/25 backdrop-blur-xl border border-white/40 shadow-lg text-black flex items-center rounded-xl">
      <td className="w-1/3">
        <div className="flex items-center gap-3 ">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={thumbnail} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{service_Name}</div>
            <div className="text-sm opacity-50 font-semibold">Price: ${price}</div>
          </div>
        </div>
      </td>
      <td className="w-1/3">
        <p className="underline">{category}</p>
        <p>{description}</p>
        
      </td>
      <th className="w-1/3 text-right">
        <button className="btn btn-ghost btn-xs">details</button>
        <button className="btn btn-ghost btn-xs">Delete</button>
      </th>
    </tr>
  );
};

export default MyServiceCard;
