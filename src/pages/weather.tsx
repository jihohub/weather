import LoadingBar from "@/components/LoadingBar";
import CurrentWeather from "@/features/weather/components/CurrentWeather";
import DailyForecast from "@/features/weather/components/DailyForecast";
import HourlyForecast from "@/features/weather/components/HourlyForecast";
import useFavorites from "@/hooks/useFavorites";
import { useWeather } from "@/hooks/useWeather";
import { useSearchParams } from "next/navigation";

export default function WeatherPage() {
  const searchParams = useSearchParams();
  const lat = parseFloat(searchParams.get("lat") || "");
  const lon = parseFloat(searchParams.get("lon") || "");
  const address = searchParams.get("address") || "";

  const { data: weatherData, loading, error } = useWeather(lat, lon);
  const { isFavorite, toggleFavorite } = useFavorites();

  if (!lat || !lon || !address) {
    return (
      <div className="flex justify-center items-center w-full h-screen">
        잘못된 접근입니다.
      </div>
    );
  }

  if (error) return <div>{error}</div>;
  if (loading) return <LoadingBar />;
  if (!weatherData) return null;

  const today = weatherData.forecast.forecastday[0];

  return (
    <main className="container mx-auto px-4 py-8 max-w-2xl">
      <div className="space-y-6">
        <CurrentWeather
          currentTemp={weatherData.current.temp_c}
          feelsLike={weatherData.current.feelslike_c}
          humidity={weatherData.current.humidity}
          condition={weatherData.current.condition}
          todayMin={today.day.mintemp_c}
          todayMax={today.day.maxtemp_c}
          region={address}
          isFavorite={isFavorite(address)}
          onToggleFavorite={() =>
            toggleFavorite({ address, latitude: lat, longitude: lon })
          }
        />
        <HourlyForecast hours={today.hour} />
        <DailyForecast days={weatherData.forecast.forecastday} />
      </div>
    </main>
  );
}
