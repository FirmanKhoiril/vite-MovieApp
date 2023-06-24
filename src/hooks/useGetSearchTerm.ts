import { useInfiniteQuery } from "react-query";
import { getSearchMovies } from "../api/fetchMovie";

interface searchProps {
  id: string | any;
}
const useGetSearchTerm = ({ id }: searchProps) => {
  const { data, hasNextPage, isLoading, isError, isSuccess, isFetching, isFetchingNextPage, fetchNextPage } = useInfiniteQuery(["searchTerm", id], ({ pageParam = 1 }) => getSearchMovies(pageParam, id), {
    staleTime: 60 * (60 * 1000),
    refetchInterval: 60 * (60 * 1000),
    refetchOnWindowFocus: false,
    getNextPageParam: (pages) => {
      if (pages.page > pages.total_pages) return;
      return pages.page + 1;
    },
  });

  return { data, isError, hasNextPage, fetchNextPage, isSuccess, isLoading, isFetching, isFetchingNextPage };
};

export default useGetSearchTerm;
