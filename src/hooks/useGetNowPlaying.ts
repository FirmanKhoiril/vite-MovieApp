import { useInfiniteQuery } from "react-query";
import { getNowPlaying } from "../api/fetchMovie";
import { useGlobalContext } from "../context/Context";

const useGetNowPlaying = () => {
  const { timePopuler } = useGlobalContext();
  const { data, isLoading, isError, fetchNextPage, isFetchingNextPage, hasNextPage, isFetching, isSuccess } = useInfiniteQuery(["populerMovie", timePopuler], ({ pageParam = 1 }) => getNowPlaying(timePopuler, pageParam), {
    staleTime: 60 * (60 * 1000),
    refetchInterval: 60 * (60 * 1000),
    refetchOnWindowFocus: false,
    getNextPageParam: (pages) => {
      if (pages.page > pages.total_pages) return;
      return pages.page + 1;
    },
  });
  return { data, isSuccess, isError, isFetching, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage };
};

export default useGetNowPlaying;
