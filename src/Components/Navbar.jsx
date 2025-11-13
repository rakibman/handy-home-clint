import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../context/AuthContext";

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
  const links = (
    <div className="flex gap-2">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-cyan-400 font-semibold border-b-2 border-cyan-400"
            : "text-white hover:text-cyan-500 transition font-semibold"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/services"
        className={({ isActive }) =>
          isActive
            ? "text-cyan-400 font-semibold border-b-2 border-cyan-400"
            : "text-white hover:text-cyan-500 transition font-semibold"
        }
      >
        Services
      </NavLink>
      {/* Privat link  */}
      {user ? (
        <div className="flex gap-2">
          <NavLink
            to="/my-services"
            className={({ isActive }) =>
              isActive
                ? "text-cyan-400 font-semibold border-b-2 border-cyan-400"
                : "text-white hover:text-cyan-500 transition font-semibold"
            }
          >
            My Services
          </NavLink>
          <NavLink
            to="/add-service"
            className={({ isActive }) =>
              isActive
                ? "text-cyan-400 font-semibold border-b-2 border-cyan-400"
                : "text-white hover:text-cyan-500 transition font-semibold"
            }
          >
            Add Service
          </NavLink>
          <NavLink
            to="/my-bookings"
            className={({ isActive }) =>
              isActive
                ? "text-cyan-400 font-semibold border-b-2 border-cyan-400"
                : "text-white hover:text-cyan-500 transition font-semibold"
            }
          >
            My Bookings
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive
                ? "text-cyan-400 font-semibold border-b-2 border-cyan-400"
                : "text-white hover:text-cyan-500 transition font-semibold"
            }
          >
            Profile
          </NavLink>
        </div>
      ) : (
        ""
      )}
    </div>
  );
  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

  return (
    <div className="navbar bg-[linear-gradient(90deg,#4d9ff5,#0052d4)]  dark:bg-[linear-gradient(90deg,#1e3a8a,#0f172a)] bg-gray-600 shadow-sm px-10">
      <div className="navbar-start">
        <div className="dropdown">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div>
          <img
            className="max-w-[60px] min-h-[50px]"
            src="https://i.ibb.co.com/N6BjRvHK/pngtree-house-cleaning-logo-icon-design-vector-template-isolated-image-309859.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <input
          onChange={(e) => handleTheme(e.target.checked)}
          type="checkbox"
          defaultChecked={localStorage.getItem("theme") === "dark"}
          className="toggle"
        />
        {user ? (
          <div className="flex gap-3">
            <div className="dropdown dropdown-end">
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
                <button onClick={handelSignOut} className="btn">
                  LogOut
                </button>
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
