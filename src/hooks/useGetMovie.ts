import { useQuery } from "react-query";
import { getMovies } from "../api/fetchMovie";
import { useGlobalContext } from "../context/Context";

const useGetMovie = () => {
  const { popularGenre } = useGlobalContext();
  const { data, isFetching, isLoading, error, isError, isSuccess } = useQuery(["popular", popularGenre], () => getMovies(popularGenre), {
    staleTime: 60 * (60 * 1000),
    refetchInterval: 60 * (60 * 1000),
    refetchOnWindowFocus: false,
  });

  return { data, isFetching, isLoading, error, isError, isSuccess };
};

export default useGetMovie;
