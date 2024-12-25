import { Home, Search, Star } from "lucide-react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white shadow-sm fixed sm:relative w-full">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold">
          <Home className="block sm:hidden" />
          <p className="hidden sm:block">오늘의날씨</p>
        </Link>
        <div className="flex items-center space-x-2">
          <Link
            href="/favorites"
            className="p-2 hover:bg-gray-100 rounded-full text-xl font-semibold"
          >
            <Star className="w-6 h-6 block sm:hidden" />
            <p className="hidden sm:block">즐겨찾기</p>
          </Link>
          <Link
            href="/search"
            className="p-2 hover:bg-gray-100 rounded-full text-xl font-semibold"
          >
            <Search className="w-6 h-6 block sm:hidden" />
            <p className="hidden sm:block">검색</p>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
