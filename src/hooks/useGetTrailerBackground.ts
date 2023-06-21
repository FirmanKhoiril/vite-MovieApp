import { useQuery } from "react-query";
import { getTrailerMovieBackground } from "../api/fetchMovie";
import { useGlobalContext } from "../context/Context";

const useGetTrailerBackground = () => {
  const { movieId } = useGlobalContext();
  const { data, isLoading, isError, isFetching, isSuccess } = useQuery(["trailer", movieId], () => getTrailerMovieBackground(movieId), {
    refetchOnWindowFocus: false,
    staleTime: 60 * (60 * 1000),
    refetchInterval: 60 * (60 * 1000),
    enabled: !!movieId,
  });

  return { data, isLoading, isError, isFetching, isSuccess };
};

export default useGetTrailerBackground;
