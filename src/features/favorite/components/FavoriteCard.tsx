import WeatherIcon from "@/features/weather/components/WeatherIcon";
import { Star } from "lucide-react";
import Link from "next/link";

interface FavoriteCardProps {
  address: string;
  latitude: number;
  longitude: number;
  weather: {
    temp: number;
    condition: {
      code: number;
      text: string;
    };
  };
  onRemove: () => void;
}

const FavoriteCard = ({
  address,
  latitude,
  longitude,
  weather,
  onRemove,
}: FavoriteCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex items-center justify-between">
        <Link
          href={`/weather?lat=${latitude}&lon=${longitude}&address=${encodeURIComponent(
            address
          )}`}
          className="flex-1"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">{address}</h3>
              <p className="text-sm text-gray-500">{weather.condition.text}</p>
            </div>
            <div className="flex items-center space-x-3">
              <WeatherIcon code={weather.condition.code} size={28} />
              <span className="text-xl font-medium">
                {Math.round(weather.temp)}°C
              </span>
            </div>
          </div>
        </Link>
        <button
          onClick={onRemove}
          className="ml-4 p-2 hover:bg-gray-100 rounded-full"
        >
          <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
        </button>
      </div>
    </div>
  );
};

export default FavoriteCard;
