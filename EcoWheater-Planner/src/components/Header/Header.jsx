import React from "react";

function Header() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
      <a className="btn btn-ghost text-xl">Eco Wheater planner</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Activity Planner</a>
          </li>
          <li>
            <a>WeatherBot</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Login</a>
      </div>
    </div>
  );
}

export default Header;
