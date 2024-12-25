import useGeolocation from "@/hooks/useGeolocation";
import { kakaoService } from "@/services/kakaoService";
import { useEffect, useState } from "react";

interface Location {
  latitude: number | null;
  longitude: number | null;
  region: string | null;
  error: string | null;
  loading: boolean;
}

const useCurrentLocation = () => {
  const {
    latitude,
    longitude,
    error: geoError,
    loading: geoLoading,
  } = useGeolocation();
  const [location, setLocation] = useState<Location>({
    latitude: null,
    longitude: null,
    region: null,
    error: null,
    loading: true,
  });

  useEffect(() => {
    const getAddress = async () => {
      if (latitude && longitude) {
        try {
          const addressData = await kakaoService.getAddressFromCoords(
            latitude,
            longitude
          );
          setLocation({
            latitude,
            longitude,
            region: addressData?.region || null,
            error: null,
            loading: false,
          });
        } catch (error) {
          setLocation({
            latitude,
            longitude,
            region: null,
            error: "주소를 가져오는데 실패했습니다.",
            loading: false,
          });
        }
      } else if (geoError) {
        setLocation({
          latitude: null,
          longitude: null,
          region: null,
          error: geoError,
          loading: false,
        });
      }
    };

    if (!geoLoading) {
      getAddress();
    }
  }, [latitude, longitude, geoError, geoLoading]);

  return location;
};

export default useCurrentLocation;
