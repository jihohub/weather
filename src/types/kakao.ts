export interface KakaoAddress {
  address_name: string;
  y: string; // 위도
  x: string; // 경도
  address: {
    region_1depth_name: string; // 시도 단위
    region_2depth_name: string; // 구 단위
    region_3depth_name: string; // 동 단위
  };
}

export interface KakaoApiResponse {
  documents: KakaoAddress[];
  meta: {
    total_count: number;
    pageable_count: number;
    is_end: boolean;
  };
}
