import { Search } from "lucide-react";
import { useEffect, useState } from "react";

interface SearchBarProps {
  initialQuery: string;
  onSearch: (query: string) => void;
}

const SearchBar = ({ initialQuery, onSearch }: SearchBarProps) => {
  const [query, setQuery] = useState(initialQuery);

  useEffect(() => {
    setQuery(initialQuery);
  }, [initialQuery]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query.trim());
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="지역을 검색하세요 (예: 익선동)"
        className="w-full p-4 pr-12 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-chefchaouenBlue"
      />
      <button
        type="submit"
        className="absolute right-4 top-1/2 -translate-y-1/2"
      >
        <Search className="w-5 h-5 text-gray-400" />
      </button>
    </form>
  );
};

export default SearchBar;
