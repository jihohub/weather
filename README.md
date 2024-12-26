# Weather App 🌤️

실시간 날씨 정보를 제공하는 웹 애플리케이션입니다. 현재 위치 기반의 날씨 정보 제공, 지역 검색, 즐겨찾기 기능을 제공합니다.

## 주요 기능

### 1. 위치 기반 날씨 정보 📍
- Geolocation API를 활용한 사용자의 현재 위치 감지
- Kakao Local API를 통한 좌표-주소 변환
- Weather API를 통한 실시간 날씨 정보 제공
- 시간별/일별 날씨 예보 제공

### 2. 지역 검색 기능 🔍
- Kakao Local API를 활용한 주소 검색
- 검색 결과에 실시간 날씨 정보 통합 제공
- URL 쿼리 파라미터를 통한 히스토리 관리

### 3. 즐겨찾기 기능 ⭐
- Local Storage를 활용한 즐겨찾기 데이터 영구 저장
- 즐겨찾기한 지역의 실시간 날씨 정보 제공

## 기술 스택

### Frontend
- Next.js 15 (Pages Router)
- TypeScript
- Tailwind CSS
- Lucide React (아이콘)

### API
- Weather API (날씨 정보)
- Kakao Local API (주소 검색 및 좌표 변환)
- Geolocation API (현재 위치)

### 상태 관리 및 데이터 핸들링
- React Hooks
- Custom Hooks (useGeolocation, useCurrentLocation, useFavorites)
- LocalStorage

## 기술적 구현 사항

### 1. TypeScript를 활용한 타입 안정성 확보
- API 응답에 대한 명확한 타입 정의
- Props 인터페이스 정의를 통한 컴포넌트 간 데이터 전달 안정성 확보
- 유틸리티 함수의 타입 안정성 보장

### 2. 커스텀 훅을 통한 로직 모듈화
- `useGeolocation`: 위치 정보 관리
- `useCurrentLocation`: 위치-주소 변환 통합 관리
- `useFavorites`: 즐겨찾기 상태 관리

### 3. 사용자 경험(UX) 개선
- 실시간 날씨 정보 업데이트
- 직관적인 날씨 정보 시각화
