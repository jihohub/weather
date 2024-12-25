import WeatherIcon from "@/features/weather/components/WeatherIcon";
import { WeatherCondition } from "@/types/weather";
import { Star } from "lucide-react";

interface CurrentWeatherProps {
  currentTemp: number;
  feelsLike: number;
  humidity: number;
  condition: WeatherCondition;
  todayMin: number;
  todayMax: number;
  region: string | null;
  isFavorite?: boolean;
  onToggleFavorite?: () => void;
}

const CurrentWeather = ({
  currentTemp,
  feelsLike,
  humidity,
  condition,
  todayMin,
  todayMax,
  region,
  isFavorite,
  onToggleFavorite,
}: CurrentWeatherProps) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg">
      {region && (
        <div className="flex items-center justify-between h-10 mb-4">
          <h1 className="text-xl font-semibold">{region}</h1>
          {onToggleFavorite && (
            <button
              onClick={onToggleFavorite}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <Star
                className={`w-6 h-6 ${
                  isFavorite
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-400"
                }`}
              />
            </button>
          )}
        </div>
      )}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-4xl font-bold">{Math.round(currentTemp)}°C</h2>
          <p className="text-gray-500 mt-1">
            체감 온도: {Math.round(feelsLike)}°C
          </p>
          <p className="text-gray-500">
            최저/최고: {Math.round(todayMin)}°C / {Math.round(todayMax)}°C
          </p>
          <p className="text-gray-500">습도: {humidity}%</p>
          <p className="mt-2 text-lg">{condition.text}</p>
        </div>
        <WeatherIcon code={condition.code} size={64} className="text-primary" />
      </div>
    </div>
  );
};

export default CurrentWeather;
