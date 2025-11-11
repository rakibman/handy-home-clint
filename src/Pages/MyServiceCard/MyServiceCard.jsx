import React from "react";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";

const MyServiceCard = ({ service }) => {
  const navigate = useNavigate();
  const { thumbnail, category, description, _id, service_Name, price } =
    service;

  const handleDlete = (id) => {
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
            navigate("/services");

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
            <div className="text-sm opacity-50 font-semibold">
              Price: ${price}
            </div>
          </div>
        </div>
      </td>
      <td className="w-1/3">
        <p className="underline">{category}</p>
        <p>{description}</p>
      </td>
      <th className="w-1/3 text-right">
        <Link to={`/update/${_id}`} className="btn btn-ghost btn-xs">
          Update Service
        </Link>
        <button onClick={handleDlete} className="btn btn-ghost btn-xs">
          Delete
        </button>
      </th>
    </tr>
  );
};

export default MyServiceCard;
