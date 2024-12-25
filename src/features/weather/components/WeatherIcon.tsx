import {
  Cloud,
  CloudFog,
  CloudLightning,
  CloudRain,
  CloudSnow,
  Cloudy,
  Sun,
} from "lucide-react";

interface WeatherIconProps {
  code: number;
  className?: string;
  size?: number;
}

const WeatherIcon = ({ code, className = "", size = 24 }: WeatherIconProps) => {
  const getIcon = () => {
    if (code === 1000) {
      return <Sun size={size} className={`text-yellow-400 ${className}`} />;
    }

    if (code === 1003) {
      return <Cloudy size={size} className={`text-gray-400 ${className}`} />;
    }

    if (code === 1006 || code === 1009) {
      return <Cloud size={size} className={`text-gray-500 ${className}`} />;
    }

    if ([1063, 1150, 1153, 1180, 1183, 1186, 1189, 1192, 1195].includes(code)) {
      return <CloudRain size={size} className={`text-blue-500 ${className}`} />;
    }

    if ([1066, 1114, 1210, 1213, 1216, 1219, 1222, 1225].includes(code)) {
      return <CloudSnow size={size} className={`text-blue-200 ${className}`} />;
    }

    if ([1087, 1273, 1276, 1279, 1282].includes(code)) {
      return (
        <CloudLightning
          size={size}
          className={`text-yellow-500 ${className}`}
        />
      );
    }

    if ([1030, 1135, 1147].includes(code)) {
      return <CloudFog size={size} className={`text-gray-400 ${className}`} />;
    }

    return <Sun size={size} className={className} />;
  };

  return getIcon();
};

export default WeatherIcon;
