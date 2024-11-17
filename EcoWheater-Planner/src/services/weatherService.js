const api = {
  key: "8d136b79e496cfafd1abd90a998a996b", 
  base: "https://api.openweathermap.org/data/2.5/",
};

// Fungsi untuk mengambil data cuaca
export const fetchWeather = async (city) => {
  try {
    const response = await fetch(`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`);
    if (!response.ok) {
      throw new Error("Failed to fetch weather data");
    }
    const result = await response.json();
    return result; // Mengembalikan hasil cuaca
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};
