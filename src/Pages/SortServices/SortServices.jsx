import React, { useEffect, useState } from "react";
import ServiceCard from "../../Components/ServiceCard";
// import { motion } from "motion/react";

const SortServices = () => {
  const [services, serServices] = useState([]);
  useEffect(() => {
    fetch("https://handy-home-server.vercel.app/banner-services")
      .then((res) => res.json())
      .then((data) => {
        serServices(data);
      });
  }, []);
  if (!services) {
    return <p>loading...</p>;
  }
  return (
    <div className="my-5">
      <div>
        <h1 className="text-3xl font-bold text-center">
          Our Top Rated services
        </h1>
      </div>
      <div className="grid grid-cols-3 gap-5 my-10">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default SortServices;
