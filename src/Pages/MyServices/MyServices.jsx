import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import MyServiceCard from "../MyServiceCard/MyServiceCard";
import { Link } from "react-router";

const MyServices = () => {
  const { user } = useContext(AuthContext);

  const [myServices, setMyservices] = useState([]);
  useEffect(() => {
    fetch(
      `https://handy-home-server.vercel.app/my-services?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMyservices(data);
      });
  }, [user?.email]);
  if (!myServices) {
    return <p>loading...</p>;
  }
  if(myServices.length == 0){
    return <div>
      <Link to={'/add-service'} className="btn">Add Service</Link>
    </div>
  }
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-5xl font-bold text-center py-5">My Services</h1>

      <table className="table">
        <dbody className="grid grid-cols-1 gap-5 mt-7">
          {myServices.map((service) => (
            <MyServiceCard service={service} />
          ))}
        </dbody>
      </table>
    </div>
  );
};

export default MyServices;
