import React, { useState, useEffect, useCallback } from "react";
import { fetchWeather } from "../../services/weatherService"; 

function HeroSection() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  // Fungsi pencarian cuaca berdasarkan nama kota
  const searchPressed = useCallback(async () => {
    if (search) {
      try {
        const result = await fetchWeather(search); // Panggil fetchWeather dari service
        setWeather(result);
        setSearch("");
      } catch (error) {
        console.error("Error during search:", error);
        setWeather({});
      }
    }
  }, [search]);

  return (
    <div className="bg-gradient-to-b from-blue-700 to-blue-500 min-h-screen text-white relative">
      {/* Search Bar */}
      <div className="absolute top-6 left-6 z-50 w-full px-6">
        <div className="flex items-center bg-white rounded-full shadow-lg p-2 max-w-md mx-auto">
          <input
            type="text"
            placeholder="Enter city/town..."
            className="px-6 py-3 w-full text-black text-lg rounded-l-full focus:outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            onClick={searchPressed}
            className="px-6 py-3 bg-blue-800 text-white rounded-r-full hover:bg-blue-600 transition duration-300"
          >
            Search
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen pt-20 text-center text-white">
        <div className="container mx-auto px-6 py-12 space-y-8">
          {typeof weather.main !== "undefined" ? (
            <>
              {/* Location and Weather Icon */}
              <div className="space-y-4">
                <h1 className="text-5xl font-semibold text-shadow-md">{weather.name}</h1>
                <img
                  src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
                  alt={weather.weather[0].description}
                  className="w-40 h-40 mx-auto"
                />
                <p className="text-7xl font-light mt-4">
                  {Math.round(weather.main.temp)}°C
                </p>
                <p className="text-xl mt-2 capitalize">{weather.weather[0].description}</p>
              </div>

              {/* Additional Weather Information */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8 max-w-4xl mx-auto">
                <div className="bg-white text-blue-800 rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-300">
                  <p className="text-2xl font-semibold">
                    {Math.round(weather.main.temp_max)}° / {Math.round(weather.main.temp_min)}°
                  </p>
                  <p className="text-sm text-gray-500">High / Low</p>
                </div>
                <div className="bg-white text-blue-800 rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-300">
                  <p className="text-2xl font-semibold">{weather.wind.speed} m/s</p>
                  <p className="text-sm text-gray-500">Wind</p>
                </div>
                <div className="bg-white text-blue-800 rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-300">
                  <p className="text-2xl font-semibold">{weather.main.humidity}%</p>
                  <p className="text-sm text-gray-500">Humidity</p>
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
