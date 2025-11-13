import React, { useEffect, useState } from "react";
import ServiceCard from "../../Components/ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://handy-home-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setLoading(false);
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
      `https://handy-home-server.vercel.app/sort-services?minPrice=${minPrice}&maxPrice=${maxPrice}`
    )
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // search by name
  const handleSearch = (e) => {
    e.preventDefault();
    const search_text = e.target.search.value;

    fetch(`https://handy-home-server.vercel.app/search?search=${search_text}`)
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  if (loading) {
    return <p className="text-5xl font-bold">loading...</p>;
  }
  return (
    <div className="p-5">
      <h1 className="text-4xl text-center py-7 font-semibold">Our Services</h1>
      <div className="md:flex justify-between items-center lg:w-6xl">
        <div>
          <h1 className="text-2xl font-semibold">Search by Name</h1>
          <form onSubmit={handleSearch} className="flex gap-3 py-3">
            <input
              name="search"
              type="text"
              placeholder="Type here"
              className="input w-30"
            />
            <button role="submit" className="btn">
              search
            </button>
          </form>
        </div>
        <div>
          <h1 className="text-2xl font-semibold">Search By Price</h1>
          <form onSubmit={handelMinMaxPrice} className="flex py-3 gap-3 ">
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
      </div>
      <div>
        {services.length == 0 ? (
          <p className="text-center text-4xl font-semibold">No Data found</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1  gap-3">
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
