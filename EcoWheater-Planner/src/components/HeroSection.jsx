import React, { useState, useEffect, useCallback } from "react";
import { fetchWeather } from "../services/weatherService";
import { FaCloudSun } from "react-icons/fa"; // Icon for weather from react-icons

function HeroSection() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});
  const [currentTime, setCurrentTime] = useState("");
  const [currentDate, setCurrentDate] = useState("");

  // Function to fetch the current time and date without storing in localStorage
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); // Removed seconds
      const date = now.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });

      setCurrentTime(time);
      setCurrentDate(date);
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  // Check if weather data is in localStorage when component mounts
  useEffect(() => {
    const savedWeather = localStorage.getItem("weatherData");
    if (savedWeather) {
      setWeather(JSON.parse(savedWeather)); // Set weather from localStorage if available
    }
  }, []);

  // Function to handle weather search
  const searchPressed = useCallback(async () => {
    if (search) {
      try {
        const result = await fetchWeather(search); // Call fetchWeather from service
        setWeather(result);
        localStorage.setItem("weatherData", JSON.stringify(result)); // Save fetched weather data in localStorage
        setSearch("");
      } catch (error) {
        console.error("Error during search:", error);
        setWeather({});
      }
    }
  }, [search]);

  return (
    <div className="bg-gradient-to-r from-blue-100 to-blue-300 min-h-screen text-black relative overflow-x-hidden">
      {/* Search Bar */}
      <div className="absolute top-6 left-6 z-50 w-full px-4 sm:px-12">
        <div className="form-control w-full max-w-xs mx-auto sm:max-w-md">
          <div className="flex input-group w-full">
            <input
              type="text"
              placeholder="Enter city/town..."
              className="input input-bordered w-full text-black text-lg rounded-l-2xl focus:outline-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              onClick={searchPressed}
              className="btn bg-blue-500 text-white ml-4 w-full sm:w-auto rounded-r-2xl"
            >
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="flex flex-col sm:flex-row items-center justify-center min-h-screen pt-20 text-center text-black px-6 sm:px-12 space-y-8 sm:space-y-0">
        {/* Left Section: Current Time */}
        <div className="w-full sm:w-1/3 text-center text-black sm:border-r-2 py-12">
          <h2 className="text-4xl font-normal mb-8">Current Time</h2>
          <div className="flex items-center justify-center text-5xl font-bold">
            <p>{currentTime}</p>
          </div>
          {/* Display Date and Day */}
          <p className="text-xl mt-2 text-gray-600">{currentDate}</p>
        </div>

        {/* Right Section: Weather Info */}
        <div className="w-full sm:w-2/3 py-12 space-y-8">
          {typeof weather.main !== "undefined" ? (
            <>
              {/* Weather Info Card */}
              <div className="card bg-white text-blue-500 shadow-lg p-6 max-w-lg mx-auto transform hover:scale-105 transition-transform duration-300">
                {/* Location and Weather Icon */}
                <div className="space-y-4 text-center">
                  <h1 className="text-4xl font-bold text-shadow-lg">{weather.name}</h1>
                  <img
                    src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
                    alt={weather.weather[0].description}
                    className="w-32 h-32 mx-auto"
                  />
                  <p className="text-6xl font-light mt-4">{Math.round(weather.main.temp)}°C</p>
                  <p className="text-xl mt-2 capitalize">{weather.weather[0].description}</p>
                </div>

                {/* Combined Weather Information */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
                  {/* High / Low */}
                  <div className="text-center">
                    <p className="text-2xl font-semibold">
                      {Math.round(weather.main.temp_max)}° / {Math.round(weather.main.temp_min)}°
                    </p>
                    <p className="text-sm text-gray-500">High / Low</p>
                  </div>
                  {/* Wind */}
                  <div className="text-center">
                    <p className="text-2xl font-semibold">{weather.wind.speed} m/s</p>
                    <p className="text-sm text-gray-500">Wind</p>
                  </div>
                  {/* Humidity */}
                  <div className="text-center">
                    <p className="text-2xl font-semibold">{weather.main.humidity}%</p>
                    <p className="text-sm text-gray-500">Humidity</p>
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
