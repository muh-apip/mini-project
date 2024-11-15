import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
      {/* Grid */}
      <div className="text-center">
        {/* Brand */}
        <div>
          <a
            href="#"
            className="flex-none text-xl font-semibold"
            aria-label="EcoWeather Planner"
          >
            EcoWeather Planner
          </a>
        </div>

        {/* Description */}
        <div className="mt-3">
          <p className="text-gray-500 dark:text-neutral-500">
          EcoWeather Planner with Weather AI Bot, Activity Planner, and Energy Tracker for smarter outdoor planning and energy-saving tips
          </p>
          <p className="text-gray-500 dark:text-neutral-500">
            © {new Date().getFullYear()} EcoWeather Planner. All rights
            reserved.
          </p>
        </div>

        {/* Social Brands */}
        <div className="mt-3 space-x-2">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
          >
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
          <a
            href="https://www.instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
          >
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
        </div>
        {/* End Social Brands */}
      </div>
      {/* End Grid */}
    </footer>
  );
};

export default Footer;
