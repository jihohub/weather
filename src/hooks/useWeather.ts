import useCurrentLocation from "@/hooks/useCurrentLocation";
import { weatherService } from "@/services/weatherService";
import { WeatherData } from "@/types/weather";
import { errorMessages } from "@/utils/error";
import { useEffect, useState } from "react";

// 일반적인 위도/경도로 날씨 데이터를 가져오는 훅
export function useWeather(latitude: number | null, longitude: number | null) {
  const [data, setData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchWeather() {
      if (!latitude || !longitude) return;

      try {
        setLoading(true);
        setError(null);
        const weatherData = await weatherService.getWeatherData(
          latitude,
          longitude
        );
        setData(weatherData);
      } catch (err) {
        setError(errorMessages.WEATHER_FETCH_ERROR);
      } finally {
        setLoading(false);
      }
    }

    fetchWeather();
  }, [latitude, longitude]);

  return { data, loading, error };
}

// 현재 위치의 날씨 데이터를 가져오는 훅
export function useCurrentLocationWeather() {
  const {
    latitude,
    longitude,
    region,
    error: locationError,
    loading: locationLoading,
  } = useCurrentLocation();

  const {
    data: weatherData,
    loading: weatherLoading,
    error: weatherError,
  } = useWeather(latitude, longitude);

  return {
    weatherData,
    region,
    loading: locationLoading || weatherLoading,
    error: locationError || weatherError,
  };
}
