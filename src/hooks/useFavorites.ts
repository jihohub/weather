import { useEffect, useState } from "react";

interface FavoriteLocation {
  address: string;
  latitude: number;
  longitude: number;
}

const useFavorites = () => {
  const [favorites, setFavorites] = useState<FavoriteLocation[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("weather-favorites");
    if (stored) {
      setFavorites(JSON.parse(stored));
    }
  }, []);

  const addFavorite = (location: FavoriteLocation) => {
    const newFavorites = [...favorites, location];
    setFavorites(newFavorites);
    localStorage.setItem("weather-favorites", JSON.stringify(newFavorites));
  };

  const removeFavorite = (address: string) => {
    const newFavorites = favorites.filter((f) => f.address !== address);
    setFavorites(newFavorites);
    localStorage.setItem("weather-favorites", JSON.stringify(newFavorites));
  };

  const isFavorite = (address: string) => {
    return favorites.some((f) => f.address === address);
  };

  const toggleFavorite = (location: FavoriteLocation) => {
    if (isFavorite(location.address)) {
      removeFavorite(location.address);
    } else {
      addFavorite(location);
    }
  };

  return {
    favorites,
    toggleFavorite,
    isFavorite,
  };
};

export default useFavorites;
