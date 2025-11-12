import React, { useEffect, useState } from "react";
import ServiceCard from "../../Components/ServiceCard";

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

  // search by price
  const handelMinMaxPrice = (e) => {
    e.preventDefault();
    const minPrice = e.target.minPrice.value || 0;
    const maxPrice = e.target.maxPrice.value || Infinity;
    fetch(
      `http://localhost:3000/sort-services?minPrice=${minPrice}&maxPrice=${maxPrice}`
    )
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // search by name
  const handleSearch = (e) => {
    e.preventDefault();
    const search_text = e.target.serarch``.value;
    console.log(search_text);

    // fetch(`https://3d-model-server.vercel.app/search?search=${search_text}`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //   });
  };
  return (
    <div>
      <h1 className="text-4xl text-center py-7 font-semibold">Our Services</h1>
      <div className="flex justify-between items-center w-6xl">
        <form onSubmit={handleSearch} className="flex gap-3">
          <input
            name="serarch"
            type="text"
            placeholder="Type here"
            className="input w-30"
          />
          <button role="submit" onClick={handelMinMaxPrice} className="btn">
            search
          </button>
        </form>
        <form onSubmit={handelMinMaxPrice} className="flex my-5 gap-3 ">
          <input
            name="minPrice"
            type="text"
            placeholder="Min Price"
            className="input w-30"
          />
          <input
            name="maxPrice"
            type="text"
            placeholder="Max Price"
            className="input w-30"
          />
          <button role="submit" className="btn">
            search
          </button>
        </form>
      </div>
      <div>
        {services.length == 0 ? (
          <p className="text-center text-4xl font-semibold">No Data found</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {services?.map((service) => (
              <ServiceCard key={service._id} service={service} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;
