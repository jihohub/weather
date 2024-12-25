import WeatherIcon from "@/features/weather/components/WeatherIcon";
import { ForecastHour } from "@/types/weather";

interface HourlyForecastProps {
  hours: ForecastHour[];
}

const HourlyForecast = ({ hours }: HourlyForecastProps) => {
  const currentHour = new Date().getHours();
  const filteredHours = hours
    .filter((hour) => {
      const hourNum = parseInt(hour.time.split(" ")[1].split(":")[0]);
      return hourNum >= currentHour;
    })
    .slice(0, 24);

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg">
      <h3 className="text-lg font-semibold mb-4">시간별 날씨</h3>
      <div className="flex overflow-x-auto space-x-6 pb-4">
        {filteredHours.map((hour) => (
          <div
            key={hour.time}
            className="flex flex-col items-center min-w-[80px]"
          >
            <span className="text-sm text-gray-500">
              {hour.time.split(" ")[1]}
            </span>
            <WeatherIcon
              code={hour.condition.code}
              size={32}
              className="my-2"
            />
            <span className="font-medium">{Math.round(hour.temp_c)}°C</span>
            <span className="text-xs text-gray-500">
              {hour.chance_of_rain}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HourlyForecast;
