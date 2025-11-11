import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

const MyServices = () => {
  const { user } = useContext(AuthContext);
  console.log(user?.email);
//   const [myServices, setMyservices] = useState([]);
//   console.log(myServices);
  useEffect(() => {
    fetch(`http://localhost:3000/my-services?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        // setMyservices(data);
        console.log(data);
      });
  }, [user?.email]);
//   if (!myServices) {
//     return <p>loading...</p>;
//   }
  return <div>jldskfj</div>;
};

export default MyServices;
