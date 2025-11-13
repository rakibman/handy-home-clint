import React from "react";
import Banner from "../Banner/Banner";
import SortServices from "../SortServices/SortServices";
import PamServ from "../../Components/PaymentAndServices/PamServ";
import WhyChose from "../../Components/whyChose";

const Home = () => {
  return (
    <main>
      {/* banner section  */}
      <section className="min-h-[350px]">
        <Banner />
      </section>
      <section className="max-w-[1000px] mx-auto">
        <SortServices />
      </section>
      <section>
        <WhyChose />
      </section>

      {/* our service and pament section  */}
      <section>
        <PamServ />
      </section>
    </main>
  );
};

export default Home;
