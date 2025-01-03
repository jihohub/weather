import LoadingBar from "@/components/LoadingBar";
import CurrentWeather from "@/features/weather/components/CurrentWeather";
import DailyForecast from "@/features/weather/components/DailyForecast";
import HourlyForecast from "@/features/weather/components/HourlyForecast";
import { useCurrentLocationWeather } from "@/hooks/useWeather";

export default function Home() {
  const { weatherData, region, loading, error } = useCurrentLocationWeather();

  if (loading) return <LoadingBar />;
  if (error) return <div>{error}</div>;
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
          region={region}
        />
        <HourlyForecast hours={today.hour} />
        <DailyForecast days={weatherData.forecast.forecastday} />
      </div>
    </main>
  );
}
