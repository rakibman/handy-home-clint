import React from "react";
import { Link } from "react-router";

const PamServ = () => {
  return (
    <div className="max-w-6xl mx-auto px-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-10">
          Our Services & Payment Options
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* card 1 */}
          <div
            className="bg-[linear-gradient(135deg,#e0eafc,#cfdef3)] 
                      dark:bg-[linear-gradient(135deg,#1e293b,#0f172a)]
                      p-6 rounded-xl shadow-lg flex flex-col items-center text-center hover:scale-105 transition-transform"
          >
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
              Multiple Payment Options
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Pay with credit/debit cards, Bkash,Nogod, or net banking securely.
            </p>
          </div>

          {/* card 2*/}
          <div
            className="bg-linear-to-r from-pink-100 via-pink-200 to-purple-200
                      dark:from-purple-700 dark:via-purple-800 dark:to-indigo-900
                      p-6 rounded-xl shadow-lg flex flex-col items-center text-center hover:scale-105 transition-transform"
          >
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
              EMI Services
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Flexible EMI plans to pay over time with low interest.
            </p>
          </div>

          {/* card 3 */}
          <div
            className="bg-[linear-gradient(120deg,#feecdc,#fde2e4)] 
                      dark:bg-[linear-gradient(120deg,#2c2c2c,#1a1a1a)]
                      p-6 rounded-xl shadow-lg flex flex-col items-center text-center hover:scale-105 transition-transform"
          >
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
              Buy Services
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Browse our Services and purchase instantly with secure checkout.
            </p>
            <Link
              to={"/services"}
              className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
  );
};

export default PamServ;
