import React from "react";
import Banner from "../Banner/Banner";
import SortServices from "../SortServices/SortServices";
import { Link } from "react-router";

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
        <section className=" py-16 px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 dark:text-white/90">
            Why Choose Us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-10 dark:text-white/90">
            We’re dedicated to delivering high-quality services that empower our
            clients and make their lives easier. Here’s what makes us stand out.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white shadow-lg rounded-2xl p-6 hover:scale-105 transition">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">
                Expert Team
              </h3>
              <p className="text-gray-600">
                Our experienced professionals ensure every project is handled
                with care and precision.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-2xl p-6 hover:scale-105 transition">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">
                Quality Service
              </h3>
              <p className="text-gray-600">
                We focus on delivering top-notch solutions that meet your goals
                and expectations.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-2xl p-6 hover:scale-105 transition">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">
                Customer Support
              </h3>
              <p className="text-gray-600">
                We’re here 24/7 to support you and ensure your satisfaction
                every step of the way.
              </p>
            </div>
          </div>
        </section>
        <section className=" py-16">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
              Buy Products with Easy Payment Options
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Payment Options */}
              <div className="bg-white/20  shadow-lg rounded-xl p-6 flex flex-col items-center text-center hover:scale-105 transition-transform">
                <img
                  src="https://i.ibb.co.com/LX2NLqyS/pexels-photo-2988232.webp"
                  alt="Payment"
                  className="w-full h-50 rounded-xl mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">
                  Multiple Payment Options
                </h3>
                <p className="text-gray-500">
                  Pay with credit/debit cards, mobile wallets, or net banking
                  easily and securely.
                </p>
              </div>

              {/* EMI Services */}
              <div className="bg-white/20 shadow-lg rounded-xl p-6 flex flex-col items-center text-center hover:scale-105 transition-transform">
                <img
                  src="https://i.ibb.co.com/Rksh6XQ3/istockphoto-1276975617-612x612.jpg"
                  alt="EMI"
                  className="w-full h-50 rounded-xl mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">EMI Services</h3>
                <p className="text-gray-500">
                  Choose flexible EMI plans and pay for your products over time
                  with low interest rates.
                </p>
              </div>

              {/* Buy Product */}
              <div className="bg-white/20 shadow-lg rounded-xl p-6 flex flex-col items-center text-center hover:scale-105 transition-transform">
                <img
                  src="https://i.ibb.co.com/svGqxsjX/buy-cart-ecommernce-shopping-icon-29.png"
                  alt="Buy"
                  className="w-full h-50 rounded-xl mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Buy Products</h3>
                <p className="text-gray-500">
                  Browse our catalog and purchase your favorite products
                  instantly with secure checkout.
                </p>
                <Link to={'/services'} className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
