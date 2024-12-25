import { SearchIcon } from "lucide-react";
import Link from "next/link";

const EmptyFavorites = () => {
  return (
    <div className="text-center py-12">
      <SearchIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
      <h3 className="text-lg font-medium text-gray-900 mb-2">
        즐겨찾기한 지역이 없습니다.
      </h3>
      <p className="text-gray-500 mb-6">
        지역을 검색하고 즐겨찾기에 추가해보세요.
      </p>
      <Link
        href="/search"
        className="inline-flex items-center px-4 py-2 bg-navyBlue text-white rounded-lg hover:bg-black transition-colors"
      >
        지역 검색하기
      </Link>
    </div>
  );
};

export default EmptyFavorites;
