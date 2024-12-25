import LoadingBar from "@/components/LoadingBar";
import EmptyFavorites from "@/features/favorite/components/EmptyFavorites";
import FavoriteCard from "@/features/favorite/components/FavoriteCard";
import useFavorites from "@/hooks/useFavorites";
import { weatherService } from "@/services/weatherService";
import { useEffect, useState } from "react";

interface FavoriteWithWeather {
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
}

export default function FavoritesPage() {
  const { favorites, toggleFavorite } = useFavorites();
  const [favoritesWithWeather, setFavoritesWithWeather] = useState<
    FavoriteWithWeather[]
  >([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeatherForFavorites = async () => {
      setLoading(true);
      try {
        const weatherData = await Promise.all(
          favorites.map(async (favorite) => {
            const weather = await weatherService.getWeatherData(
              favorite.latitude,
              favorite.longitude
            );
            return {
              ...favorite,
              weather: {
                temp: weather.current.temp_c,
                condition: weather.current.condition,
              },
            };
          })
        );
        setFavoritesWithWeather(weatherData);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherForFavorites();
  }, [favorites]);

  if (loading) {
    return <LoadingBar />;
  }

  if (favoritesWithWeather.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <EmptyFavorites />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <h1 className="text-2xl font-semibold mb-6">즐겨찾기</h1>
      <div className="space-y-4">
        {favoritesWithWeather.map((favorite) => (
          <FavoriteCard
            key={favorite.address}
            {...favorite}
            onRemove={() => toggleFavorite(favorite)}
          />
        ))}
      </div>
    </div>
  );
}
