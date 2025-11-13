import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { FaHome } from "react-icons/fa";
import { GrServices } from "react-icons/gr";
import { AiOutlineProduct } from "react-icons/ai";
import { MdAssignmentAdd } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const handelSignOut = () => {
    signOutUser()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  const links = (
    <div className="lg:flex  gap-2">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-cyan-400 font-semibold border-b-2 border-cyan-400 "
            : "text-white hover:text-cyan-500 transition font-semibold"
        }
      >
        <p className="flex items-center gap-2">
          <FaHome /> Home
        </p>
      </NavLink>
      <NavLink
        to="/services"
        className={({ isActive }) =>
          isActive
            ? "text-cyan-400 font-semibold border-b-2 border-cyan-400"
            : "text-white hover:text-cyan-500 transition font-semibold"
        }
      >
        <p className="flex items-center gap-2">
          <GrServices />
          Services
        </p>
      </NavLink>
      {/* Privat link  */}
      {user ? (
        <div className="lg:flex gap-2">
          <NavLink
            to="/my-services"
            className={({ isActive }) =>
              isActive
                ? "text-cyan-400 font-semibold border-b-2 border-cyan-400"
                : "text-white hover:text-cyan-500 transition font-semibold"
            }
          >
            <p className="flex items-center gap-2">
              <AiOutlineProduct />
              My Services
            </p>
          </NavLink>
          <NavLink
            to="/add-service"
            className={({ isActive }) =>
              isActive
                ? "text-cyan-400 font-semibold border-b-2 border-cyan-400"
                : "text-white hover:text-cyan-500 transition font-semibold"
            }
          >
            <p className="flex items-center gap-2">
              <MdAssignmentAdd />
              Add Service
            </p>
          </NavLink>
          <NavLink
            to="/my-bookings"
            className={({ isActive }) =>
              isActive
                ? "text-cyan-400 font-semibold border-b-2 border-cyan-400"
                : "text-white hover:text-cyan-500 transition font-semibold"
            }
          >
            <p className="flex items-center gap-2">
              <TbBrandBooking />
              My Bookings
            </p>
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive
                ? "text-cyan-400 font-semibold border-b-2 border-cyan-400"
                : "text-white hover:text-cyan-500 transition font-semibold"
            }
          >
            <p className="flex items-center gap-2">
              <CgProfile />
              Profile
            </p>
          </NavLink>
        </div>
      ) : (
        ""
      )}
    </div>
  );
  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

  return (
    <div className="navbar bg-[linear-gradient(90deg,#4d9ff5,#0052d4)]  dark:bg-[linear-gradient(90deg,#1e3a8a,#0f172a)] bg-gray-600 shadow-sm md:px-10 px-4">
      <div className="navbar-start">
        <div className="dropdown z-50">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-black  rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div>
          <img
            className="max-w-[60px] min-h-[50px] dark:bg-white rounded-xl"
            src="https://i.ibb.co.com/bRXNTCXW/58e17cf9-5137-4467-877b-f5adfbd3b2ec.png"
            alt=""
          />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex gap-3">
            <div className="z-50 dropdown dropdown-end">
              <div tabIndex={0} role="button" className=" m-1">
                <img
                  className="h-10 w-10 rounded-full"
                  src={user?.photoURL}
                  alt=""
                />
              </div>
              <div
                tabIndex="-1"
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
              >
                <button
                  onClick={handelSignOut}
                  className="btn bg-linear-to-r from-cyan-500 to-blue-600 hover:scale-105 transition"
                >
                  LogOut
                </button>
                <label className="flex cursor-pointer items-center my-5 gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="5" />
                    <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                  </svg>
                  <input
                  onChange={(e) => handleTheme(e.target.checked)}
                    type="checkbox"
                    defaultChecked={localStorage.getItem("theme") === "dark"}
                  className="toggle mx-2"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                  </svg>
                </label>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <Link
              to={"/login"}
              className="px-6 py-2 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-300"
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
