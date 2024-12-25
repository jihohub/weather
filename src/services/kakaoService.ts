import { KakaoApiResponse } from "@/types/kakao";
import { Location } from "@/types/weather";

const KAKAO_API_KEY = process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY;
const KAKAO_BASE_URL = "https://dapi.kakao.com/v2/local";

class KakaoService {
  private headers = {
    Authorization: `KakaoAK ${KAKAO_API_KEY}`,
  };

  async getAddressFromCoords(lat: number, lng: number) {
    const response = await fetch(
      `${KAKAO_BASE_URL}/geo/coord2address.json?x=${lng}&y=${lat}`,
      { headers: this.headers }
    );

    const data: KakaoApiResponse = await response.json();

    if (data.documents && data.documents.length > 0) {
      const { address } = data.documents[0];
      return {
        region:
          `${address.region_1depth_name} ${address.region_2depth_name} ${address.region_3depth_name}`.trim(),
      };
    }

    return null;
  }

  async searchAddress(keyword: string): Promise<Location[]> {
    const response = await fetch(
      `${KAKAO_BASE_URL}/search/address.json?query=${encodeURIComponent(
        keyword
      )}`,
      { headers: this.headers }
    );

    const data: KakaoApiResponse = await response.json();

    return data.documents.map((doc) => ({
      address: doc.address_name,
      latitude: parseFloat(doc.y),
      longitude: parseFloat(doc.x),
    }));
  }
}

export const kakaoService = new KakaoService();
