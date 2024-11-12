import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaCloudSun } from "react-icons/fa"; // Ikon cuaca dari Font Awesome

function Header() {
  const location = useLocation();

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        {/* Tambahkan ikon cuaca di samping teks logo */}
        <a className="btn btn-ghost text-xl flex items-center space-x-2">
          <FaCloudSun className="text-blue-500" /> {/* Ikon cuaca */}
          <span>Eco Weather Planner</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link
              to="/"
              className={`${
                location.pathname === "/"
                  ? "font-medium bg-blue-500 text-white"
                  : ""
              } hover:bg-blue-400 hover:text-white px-6 py-4 rounded`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/activityplanner"
              className={`${
                location.pathname === "/activityplanner"
                  ? "font-medium bg-blue-500 text-white"
                  : ""
              } hover:bg-blue-400 hover:text-white px-6 py-4 rounded`}
            >
              Activity Planner
            </Link>
          </li>
          <li>
            <Link
              to="/energy-tracker"
              className="font-medium hover:bg-blue-400 hover:text-white px-6 py-4 rounded"
            >
              Energy Tracker
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link
          to="/login"
          className="btn text-white bg-blue-500 hover:bg-blue-400 px-6 py-2 rounded "
        >
          Login
        </Link>
      </div>
    </div>
  );
}

export default Header;
