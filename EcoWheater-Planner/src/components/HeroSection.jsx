import React from "react";
import { FaCloudSun } from "react-icons/fa"; 
import useTimeAndDate from "../hooks/useTimeAndDate";
import useWeather from "../hooks/useWeather";

function HeroSection() {
  const { currentTime, currentDate } = useTimeAndDate();
  const { search, setSearch, weather, searchWeather } = useWeather();

  return (
    <div className="bg-gradient-to-r from-blue-100 to-blue-300 min-h-screen text-black relative overflow-x-hidden">
      {/* Search Bar */}
      <div className="absolute top-6 left-6 z-50 w-full px-4 sm:px-12">
        <div className="form-control w-full max-w-xs mx-auto sm:max-w-md">
          <div className="flex items-center space-x-2 w-full">
            <input
              type="text"
              placeholder="Enter city/town..."
              className="flex-grow input input-bordered text-black text-lg rounded-l-2xl focus:outline-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              onClick={searchWeather}
              className="btn bg-blue-500 text-white px-4 py-2 rounded-r-2xl"
            >
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="flex flex-col sm:flex-row items-center justify-center min-h-screen pt-16 sm:pt-20 text-center text-black px-4 sm:px-12 space-y-6 sm:space-y-0">
        {/* Left Section: Current Time */}
        <div className="w-full sm:w-1/3 text-center text-black sm:border-r-2 py-6 sm:py-12">
          <h2 className="text-3xl sm:text-4xl font-normal mb-4 sm:mb-8">
            Current Time
          </h2>
          <div className="flex items-center justify-center text-4xl sm:text-5xl font-bold">
            <p>{currentTime}</p>
          </div>
          <p className="text-base sm:text-xl mt-2 text-gray-600">
            {currentDate}
          </p>
        </div>

        {/* Right Section: Weather Info */}
        <div className="w-full sm:w-2/3 py-12 space-y-8">
          {typeof weather.main !== "undefined" ? (
            <>
              {/* Weather Info Card */}
              <div className="card bg-white text-blue-500 shadow-lg p-4 sm:p-6 w-full sm:max-w-md lg:max-w-lg mx-auto transform hover:scale-105 transition-transform duration-300">
                {/* Location and Weather Icon */}
                <div className="space-y-4 text-center">
                  <h1 className="text-4xl font-bold text-shadow-lg">
                    {weather.name}
                  </h1>
                  <img
                    src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
                    alt={weather.weather[0].description}
                    className="w-32 h-32 mx-auto"
                  />
                  <p className="text-6xl font-light mt-4">
                    {Math.round(weather.main.temp)}°C
                  </p>
                  <p className="text-xl mt-2 capitalize">
                    {weather.weather[0].description}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
                  {/* High / Low */}
                  <div className="text-center">
                    <p className="text-xl sm:text-2xl font-semibold">
                      {Math.round(weather.main.temp_max)}° /{" "}
                      {Math.round(weather.main.temp_min)}°
                    </p>
                    <p className="text-sm sm:text-base text-gray-500">
                      High / Low
                    </p>
                  </div>
                  {/* Wind */}
                  <div className="text-center">
                    <p className="text-xl sm:text-2xl font-semibold">
                      {weather.wind.speed} m/s
                    </p>
                    <p className="text-sm sm:text-base text-gray-500">Wind</p>
                  </div>
                  {/* Humidity */}
                  <div className="text-center">
                    <p className="text-xl sm:text-2xl font-semibold">
                      {weather.main.humidity}%
                    </p>
                    <p className="text-sm sm:text-base text-gray-500">
                      Humidity
                    </p>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="text-lg font-medium text-gray-200">
              <p>Enter a city or town to get the weather information.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
