import React, { useEffect, useState } from "react";
import ServiceCard from "../../Components/ServiceCard";
import { div } from "motion/react-client";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <h1 className="text-4xl text-center py-7 font-semibold">Our Services</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {services?.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
