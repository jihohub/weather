import WeatherIcon from "@/features/weather/components/WeatherIcon";
import { LocationWithWeather } from "@/types/weather";
import { Star } from "lucide-react";
import Link from "next/link";

interface SearchResultsProps {
  results: LocationWithWeather[];
  onToggleFavorite: (result: LocationWithWeather) => void;
  favorites: string[];
}

const SearchResults = ({
  results,
  onToggleFavorite,
  favorites,
}: SearchResultsProps) => {
  return (
    <div className="space-y-2 mt-4">
      {results.map((result) => (
        <div key={result.address} className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center justify-between">
            <Link
              href={`/weather?lat=${result.latitude}&lon=${
                result.longitude
              }&address=${encodeURIComponent(result.address)}`}
              className="flex-1"
            >
              <div className="flex items-center justify-between">
                <span className="font-medium">{result.address}</span>
                {result.weather && (
                  <div className="flex items-center space-x-2">
                    <WeatherIcon
                      code={result.weather.condition.code}
                      size={20}
                    />
                    <span>{Math.round(result.weather.temp)}°C</span>
                  </div>
                )}
              </div>
            </Link>
            <button
              onClick={() => onToggleFavorite(result)}
              className="ml-4 p-2 hover:bg-gray-100 rounded-full"
            >
              <Star
                className={`w-5 h-5 ${
                  favorites.includes(result.address)
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-400"
                }`}
              />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
