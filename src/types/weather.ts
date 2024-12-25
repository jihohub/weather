export interface WeatherCondition {
  code: number;
  text: string;
}

export interface Location {
  address: string;
  latitude: number;
  longitude: number;
}

export interface LocationWithWeather extends Location {
  weather?: {
    temp: number;
    condition: WeatherCondition;
  };
}

export interface WeatherData {
  location: {
    name: string;
    region: string;
    country: string;
    localtime: string;
  };
  current: {
    temp_c: number;
    condition: WeatherCondition;
    feelslike_c: number;
    humidity: number;
  };
  forecast: {
    forecastday: ForecastDay[];
  };
}

export interface ForecastDay {
  date: string;
  day: {
    maxtemp_c: number;
    mintemp_c: number;
    avgtemp_c: number;
    condition: WeatherCondition;
    daily_chance_of_rain: number;
  };
  hour: ForecastHour[];
}

export interface ForecastHour {
  time: string;
  temp_c: number;
  condition: WeatherCondition;
  chance_of_rain: number;
}
