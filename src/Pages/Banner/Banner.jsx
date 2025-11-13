import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router";
const Banner = () => {
  return (
    <div className="w-full mx-auto">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="px-4 py-4 md:flex gap-5 bg-[linear-gradient(135deg,#bfdbfe,#93c5fd)]
            dark:bg-[linear-gradient(135deg,#1e40af,#1e3a8a)]  ">
            <img
              className="w-3/5 max-h-[350px] rounded-xl"
              src="https://i.ibb.co.com/LzpNbtYd/cleaning-companies.jpg"
              alt=""
            />
            <div className="w-2/5 my-auto">
              <h1 className="text-4xl  font-semibold">
                Professional Home Cleaning, Anytime You Need
              </h1>
              <p>
                Book trusted cleaners to make your home spotless. Fast,
                affordable, and hassle-free cleaning services at your doorstep.
              </p>
              <Link to={"/services"} className="btn my-4 w-[250px]">
                Explore More
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="px-4 py-4 md:flex gap-5 bg-linear-to-r from-gray-800 via-gray-700 to-orange-500
            dark:from-gray-900 dark:via-gray-800 dark:to-orange-600 dark:bg-black">
            <img
              className="w-3/5 max-h-[350px] rounded-xl"
              src="https://i.ibb.co.com/NdMzWCr3/male-professional-automotive-supervisor-advises-and-inspects-black-female-mechanic-worker-about-liqu.jpg"
              alt=""
            />
            <div className="w-2/5 my-auto">
              <h1 className="text-4xl  font-semibold">
                Expert Repair & Maintenance Services
              </h1>
              <p>
                From plumbing to electrical work, our certified professionals
                ensure reliable repairs and quick fixes for your home
              </p>
              <Link to={"/services"} className="btn my-4 w-[250px]">
                Explore More
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="px-4 py-4 md:flex gap-5 bg-linear-to-r from-pink-100 via-pink-200 to-purple-200
            dark:from-purple-700 dark:via-purple-800 dark:to-indigo-900">
            <img
              className="w-3/5 max-h-[350px] rounded-xl"
              src="https://i.ibb.co.com/N6TdjDwR/istockphoto-1181702511-612x612.jpg"
              alt=""
            />
            <div className="w-2/5 my-auto">
              <h1 className="text-4xl  font-semibold">
                Pamper Yourself with Premium Beauty Care
              </h1>
              <p>
                Get salon-quality beauty and grooming services right at home.
                Convenient, hygienic, and handled by skilled beauticians
              </p>
              <Link to={"/services"} className="btn my-4 w-[250px]">
                Explore More
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
