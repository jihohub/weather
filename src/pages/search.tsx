import LoadingBar from "@/components/LoadingBar";
import SearchBar from "@/features/search/components/SearchBar";
import SearchResults from "@/features/search/components/SearchResults";
import useFavorites from "@/hooks/useFavorites";
import { useSearch } from "@/hooks/useSearch";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function SearchPage() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";

  const { results, loading, error, search } = useSearch();
  const { favorites, toggleFavorite } = useFavorites();

  const handleSearch = (newQuery: string) => {
    if (newQuery) {
      const params = new URLSearchParams();
      params.set("q", newQuery);
      router.push(`${pathname}?${params.toString()}`);
    } else {
      router.push(pathname);
    }
  };

  useEffect(() => {
    search(query);
  }, [query, search]);

  if (error) return <div>{error}</div>;

  return (
    <div className="container mx-auto px-4 py-6 max-w-2xl">
      <SearchBar initialQuery={query} onSearch={handleSearch} />
      {loading ? (
        <LoadingBar />
      ) : (
        query && (
          <SearchResults
            results={results}
            onToggleFavorite={toggleFavorite}
            favorites={favorites.map((f) => f.address)}
          />
        )
      )}
    </div>
  );
}
