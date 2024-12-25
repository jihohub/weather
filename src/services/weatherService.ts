import { WeatherData } from "@/types/weather";

const WEATHER_API_KEY = process.env.NEXT_PUBLIC_WEATHERAPI_KEY;
const WEATHER_BASE_URL = "https://api.weatherapi.com/v1";

class WeatherService {
  async getWeatherData(lat: number, lon: number): Promise<WeatherData> {
    const response = await fetch(
      `${WEATHER_BASE_URL}/forecast.json?key=${WEATHER_API_KEY}&q=${lat},${lon}&days=7&aqi=no&lang=ko`
    );

    if (!response.ok) {
      throw new Error("Weather data fetch failed");
    }

    return await response.json();
  }
}

export const weatherService = new WeatherService();
