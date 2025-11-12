import React from "react";
import Banner from "../Banner/Banner";
import SortServices from "../SortServices/SortServices";


const Home = () => {
  return (
    <div>
      {/* banner section  */}
      <section className="max-w-[1200px] my-auto mx-auto min-h-[350px] bg-gray-300 ">
        <Banner />
      </section>
      <section className="max-w-[1000px] mx-auto">
        <SortServices />
      </section>
    </div>
  );
};

export default Home;
