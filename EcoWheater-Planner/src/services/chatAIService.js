import { GoogleGenerativeAI } from "@google/generative-ai";
import { marked } from "marked";

// Setup API dan model AI
const apiKey = import.meta.env.VITE_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash-latest",
});

const generationConfig = {
  maxOutputTokens: 100,
  temperature: 1,
};

// Fungsi untuk mengirim prompt ke AI dan mendapatkan respons
export async function getAIResponse(weather, userInput) {
  const getWeatherInfo = () => {
    if (!weather || !weather.main) return "";
    return `Currently, the weather in ${weather.name} is ${Math.round(weather.main.temp)}°C with ${weather.weather[0].description}.`;
  };

  const basePrompt = "Halo, saya adalah Chat Wheater AI. Berikan saya beberapa rekomendasi aktivitas yang bisa saya lakukan hari ini, dengan mempertimbangkan cuaca";
  const weatherInfo = getWeatherInfo(); // Mendapatkan info cuaca
  const userPrompt = `${basePrompt} Cuaca: ${weatherInfo} Hobi: ${userInput}`;

  try {
    const chatSession = model.startChat({
      generationConfig,
      history: [],
    });

    const result = await chatSession.sendMessage(userPrompt);
    const aiResponse = result.response.text();
    const plainTextResponse = marked(aiResponse);  // Convert markdown ke plain text
    const textOnlyResponse = plainTextResponse.replace(/<[^>]*>/g, ''); // Menghapus tag HTML

    return textOnlyResponse;
  } catch (error) {
    console.error("Error during AI processing:", error);
    throw new Error("Maaf, terjadi kesalahan. Coba lagi nanti.");
  }
}
