import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import ServiceCard from "../../Components/ServiceCard";

const MyServices = () => {
  const { user } = useContext(AuthContext);

  const [myServices, setMyservices] = useState([]);
  console.log(myServices);
  useEffect(() => {
    fetch(`http://localhost:3000/my-services?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyservices(data);
        // console.log(data);
      });
  }, [user?.email]);
  if (!myServices) {
    return <p>loading...</p>;
  }
  return (
    <div>
      <h1 className="text-5xl font-bold text-center py-5">My Services</h1>
      <div className="grid grid-cols-4 gap-5 mt-7">
        {myServices.map((service) => (
          <ServiceCard service={service} />
        ))}
      </div>
    </div>
  );
};

export default MyServices;
