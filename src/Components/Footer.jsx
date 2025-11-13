import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className=" w-fit bg-gray-900 text-gray-300 py-12 px-6 md:px-16">
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">Handy Home</h2>
          <p className="text-sm leading-relaxed">
            Your one-stop destination for the best deals on fashion,
            electronics, and home essentials. Shop smart, live better.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="https://www.facebook.com/" className="hover:text-orange-400">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/" className="hover:text-orange-400">
              <FaInstagram />
            </a>
            <a href="https://x.com/" className="hover:text-orange-400">
              <FaXTwitter />
            </a>
            <a href="https://www.linkedin.com/jobs?mcid=7389968267391488000&src=go-pa&trk=sem-ga_campid.23205437885_asid._crid._kw._d.c_tid._n.x_mt._geo.9069452&cid=&gclsrc=aw.ds&gad_source=1&gad_campaignid=23200214304&gbraid=0AAAAAogN_LxoL7sDvZvIJLyk9U9Xd9qdK&gclid=CjwKCAiAoNbIBhB5EiwAZFbYGAg-xzwSLPzkR2r0RX8N1DhmuJf42iq-WFKs3tTLdsLFmQaYcW5f5xoCPGgQAvD_BwE" className="hover:text-orange-400">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-orange-400">
                Home
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-orange-400">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-400">
                Categories
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-400">
                Offers
              </a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-orange-400">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-400">
                Shipping Info
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-400">
                Return Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-400">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Stay Updated
          </h3>
          <p className="text-sm mb-3">
            Subscribe to get the latest deals and updates.
          </p>
          <form className="flex flex-col sm:flex-row items-center gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-auto flex-1 px-3 py-2 rounded-md bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <button className="bg-linear-to-r from-orange-500 to-yellow-500 text-white px-4 py-2 rounded-md hover:from-yellow-500 hover:to-orange-600 transition-all duration-300">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} ShopEase. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
