import WeatherIcon from "@/features/weather/components/WeatherIcon";
import { ForecastDay } from "@/types/weather";
import { format } from "date-fns";
import { ko } from "date-fns/locale";

interface DailyForecastProps {
  days: ForecastDay[];
}

const DailyForecast = ({ days }: DailyForecastProps) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg">
      <h3 className="text-lg font-semibold mb-4">주간 날씨</h3>
      <div className="space-y-4">
        {days.map((day) => (
          <div key={day.date} className="flex items-center justify-between">
            <span className="w-20 font-medium">
              {format(new Date(day.date), "M/d (E)", { locale: ko })}
            </span>
            <div className="flex justify-center w-10">
              <WeatherIcon code={day.day.condition.code} size={24} />
            </div>
            <div className="flex justify-end items-center space-x-2 w-16">
              <span className="text-blue-500 font-medium">
                {Math.round(day.day.mintemp_c)}°
              </span>
              <span className="text-gray-400">/</span>
              <span className="text-red-500 font-medium">
                {Math.round(day.day.maxtemp_c)}°
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyForecast;
