import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaCloudSun } from "react-icons/fa";

function Header({ isLoggedIn, onLogout }) {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-3">
      <nav className="max-w-[85rem] w-full mx-auto px-4 flex flex-wrap basis-full items-center justify-between">
        {/* Logo Section */}
        <a
          className="sm:order-1 flex items-center text-xl font-semibold focus:outline-none focus:opacity-80"
          href="#"
        >
          <FaCloudSun className="mr-2 text-blue-500" /> {/* Ikon Cuaca */}
          Eco Weather Planner
        </a>

        {/* Right Section */}
        <div className="sm:order-3 flex items-center gap-x-2">
          {/* Toggle Button for Mobile */}
          <button
            type="button"
            onClick={toggleMenu}
            className="sm:hidden relative size-7 flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
            aria-expanded={isMenuOpen}
            aria-controls="hs-navbar-alignment"
            aria-label="Toggle navigation"
          >
            {/* Hamburger Icon */}
            <svg
              className={`${isMenuOpen ? "hidden" : "block"} shrink-0 size-4`}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" x2="21" y1="6" y2="6" />
              <line x1="3" x2="21" y1="12" y2="12" />
              <line x1="3" x2="21" y1="18" y2="18" />
            </svg>
            {/* Close Icon */}
            <svg
              className={`${isMenuOpen ? "block" : "hidden"} shrink-0 size-4`}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
          {/* Login/Logout Button */}
          {!isLoggedIn ? (
            <Link
              to="/login"
              className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
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

        {/* Navbar Links */}
        <div
          id="hs-navbar-alignment"
          className={`hs-collapse ${
            isMenuOpen ? "block" : "hidden"
          } overflow-hidden transition-all duration-300 basis-full grow sm:grow-0 sm:basis-auto sm:block sm:order-2`}
          aria-labelledby="hs-navbar-alignment-collapse"
        >
          <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:mt-0 sm:ps-5">
            <Link
              to="/"
              className={`font-medium ${
                location.pathname === "/"
                  ? "text-blue-500"
                  : "text-gray-600 hover:text-gray-400"
              }`}
              aria-current={location.pathname === "/" ? "page" : undefined}
            >
              Home
            </Link>
            <Link
              to="/chatwheaterbot"
              className={`font-medium ${
                location.pathname === "/chatwheaterbot"
                  ? "text-blue-500"
                  : isLoggedIn
                  ? "text-gray-600 hover:text-gray-400"
                  : "text-gray-400 cursor-not-allowed"
              }`}
              aria-disabled={!isLoggedIn}
            >
              Chat Wheater Bot
            </Link>
            <Link
              to="/activityplanner"
              className={`font-medium ${
                location.pathname === "/activityplanner"
                  ? "text-blue-500"
                  : isLoggedIn
                  ? "text-gray-600 hover:text-gray-400"
                  : "text-gray-400 cursor-not-allowed"
              }`}
              aria-disabled={!isLoggedIn}
            >
              Activity Planner
            </Link>
            <Link
              to="/energytracker"
              className={`font-medium ${
                location.pathname === "/energytracker"
                  ? "text-blue-500"
                  : isLoggedIn
                  ? "text-gray-600 hover:text-gray-400"
                  : "text-gray-400 cursor-not-allowed"
              }`}
              aria-disabled={!isLoggedIn}
            >
              Energy Tracker
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
