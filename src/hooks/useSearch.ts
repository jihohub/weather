import { kakaoService } from "@/services/kakaoService";
import { weatherService } from "@/services/weatherService";
import { LocationWithWeather } from "@/types/weather";
import { errorMessages } from "@/utils/error";
import { useCallback, useState } from "react";

export function useSearch() {
  const [results, setResults] = useState<LocationWithWeather[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const search = useCallback(async (query: string) => {
    if (!query) {
      setResults([]);
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const addresses = await kakaoService.searchAddress(query);
      const resultsWithWeather = await Promise.all(
        addresses.map(async (address) => {
          try {
            const weather = await weatherService.getWeatherData(
              address.latitude,
              address.longitude
            );
            return {
              ...address,
              weather: {
                temp: weather.current.temp_c,
                condition: weather.current.condition,
              },
            };
          } catch {
            return address;
          }
        })
      );

      setResults(resultsWithWeather);
    } catch (err) {
      setError(errorMessages.SEARCH_ERROR);
    } finally {
      setLoading(false);
    }
  }, []);

  return { results, loading, error, search };
}
