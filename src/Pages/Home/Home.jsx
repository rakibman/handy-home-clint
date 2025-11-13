import React from "react";
import Banner from "../Banner/Banner";
import SortServices from "../SortServices/SortServices";
import PamServ from "../../Components/PaymentAndServices/PamServ";

const Home = () => {
  return (
    <div>
      <main>
        {/* banner section  */}
        <section className="max-w-[1200px] mx-auto min-h-[350px]">
          <Banner />
        </section>
        <section className="max-w-[1000px] mx-auto">
          <SortServices />
        </section>
        <section className="py-16 px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 dark:text-white/90">
            Why Choose Us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-10 dark:text-white/90">
            We’re dedicated to delivering high-quality services that empower our
            clients and make their lives easier. Here’s what makes us stand out.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Card 1: Blue Gradient */}
            <div
              className="bg-linear-to-r from-blue-200 via-blue-300 to-blue-400 
                    dark:from-blue-800 dark:via-blue-900 dark:to-indigo-900
                    shadow-lg rounded-2xl p-6 hover:scale-105 transition-transform text-left"
            >
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-300 mb-3">
                Expert Team
              </h3>
              <p className="text-gray-700 dark:text-gray-200">
                Our experienced professionals ensure every project is handled
                with care and precision.
              </p>
            </div>

            {/* Card 2: Pink → Purple Gradient */}
            <div
              className="bg-linear-to-r from-pink-100 via-pink-200 to-purple-200
                    dark:from-purple-700 dark:via-purple-800 dark:to-indigo-900
                    shadow-lg rounded-2xl p-6 hover:scale-105 transition-transform text-left"
            >
              <h3 className="text-xl font-semibold text-pink-600 dark:text-pink-300 mb-3">
                Quality Service
              </h3>
              <p className="text-gray-700 dark:text-gray-200">
                We focus on delivering top-notch solutions that meet your goals
                and expectations.
              </p>
            </div>

            {/* Card 3: Peach Gradient */}
            <div
              className="bg-[linear-gradient(120deg,#feecdc,#fde2e4)]
                    dark:bg-[linear-gradient(120deg,#2c2c2c,#1a1a1a)]
                    shadow-lg rounded-2xl p-6 hover:scale-105 transition-transform text-left"
            >
              <h3 className="text-xl font-semibold text-orange-500 dark:text-orange-400 mb-3">
                Customer Support
              </h3>
              <p className="text-gray-700 dark:text-gray-200">
                We’re here 24/7 to support you and ensure your satisfaction
                every step of the way.
              </p>
            </div>
          </div>
        </section>

        {/* our service and pament section  */}
        <section>
          <PamServ />
        </section>
      </main>
    </div>
  );
};

export default Home;
