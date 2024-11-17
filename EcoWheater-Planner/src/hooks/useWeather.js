import { useState, useEffect, useCallback } from "react";
import { fetchWeather } from "../services/weatherService";

const useWeather = () => {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  useEffect(() => {
    const savedWeather = localStorage.getItem("weatherData");
    if (savedWeather) {
      setWeather(JSON.parse(savedWeather));
    }
  }, []);

  const searchWeather = useCallback(async () => {
    if (search) {
      try {
        const result = await fetchWeather(search);
        setWeather(result);
        localStorage.setItem("weatherData", JSON.stringify(result));
        setSearch("");
      } catch (error) {
        console.error("Error during search:", error);
        setWeather({});
      }
    }
  }, [search]);

  return { search, setSearch, weather, searchWeather };
};

export default useWeather;
