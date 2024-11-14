import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaCloudSun } from "react-icons/fa"; // Ikon cuaca dari Font Awesome

function Header({ isLoggedIn, onLogout }) {
  const location = useLocation();

  return (
    <>
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
                } ${
                  !isLoggedIn
                    ? "text-gray-400 cursor-not-allowed"
                    : "hover:bg-blue-400 hover:text-white"
                } px-6 py-4 rounded`}
                aria-disabled={!isLoggedIn} // Disable the link if not logged in
              >
                Activity Planner
              </Link>
            </li>
            <li>
              <Link
                to="/energytracker"
                className={`${
                  location.pathname === "/energytracker"
                    ? "font-medium bg-blue-500 text-white"
                    : ""
                } ${
                  !isLoggedIn
                    ? "text-gray-400 cursor-not-allowed"
                    : "hover:bg-blue-400 hover:text-white"
                } px-6 py-4 rounded`}
                aria-disabled={!isLoggedIn} // Disable the link if not logged in
              >
                Energy Tracker
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {!isLoggedIn ? (
            <Link
              to="/login"
              className="btn text-white bg-blue-500 hover:bg-blue-400 px-6 py-2 rounded "
            >
              Login
            </Link>
          ) : (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="User Avatar"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a onClick={onLogout}>Logout</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      {/* Pembatas menggunakan garis horizontal */}
      <hr className="border-t-2 border-neutral-300 mt-2" />
    </>
  );
}

export default Header;
