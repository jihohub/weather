import { useEffect, useState } from "react";

interface LocationState {
  latitude: number | null;
  longitude: number | null;
  error: string | null;
  loading: boolean;
}

const useGeolocation = () => {
  const [location, setLocation] = useState<LocationState>({
    latitude: null,
    longitude: null,
    error: null,
    loading: true,
  });

  useEffect(() => {
    // 브라우저가 geolocation을 지원하는지 확인
    if (!navigator.geolocation) {
      setLocation((prev) => ({
        ...prev,
        error: "브라우저가 위치 정보를 지원하지 않습니다.",
        loading: false,
      }));
      return;
    }

    const success = (position: GeolocationPosition) => {
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        error: null,
        loading: false,
      });
    };

    const error = (error: GeolocationPositionError) => {
      setLocation((prev) => ({
        ...prev,
        error: getLocationErrorMessage(error.code),
        loading: false,
      }));
    };

    // 위치 정보 요청
    navigator.geolocation.getCurrentPosition(success, error, {
      enableHighAccuracy: true, // 높은 정확도 요청
      timeout: 5000, // 5초 타임아웃
      maximumAge: 0, // 캐시된 위치 정보를 사용하지 않음
    });
  }, []);

  return location;
};

// 에러 메시지 헬퍼 함수
function getLocationErrorMessage(code: number): string {
  switch (code) {
    case 1:
      return "위치 정보 액세스를 허용해주세요.";
    case 2:
      return "위치를 찾을 수 없습니다.";
    case 3:
      return "요청 시간이 초과되었습니다.";
    default:
      return "알 수 없는 오류가 발생했습니다.";
  }
}

export default useGeolocation;
