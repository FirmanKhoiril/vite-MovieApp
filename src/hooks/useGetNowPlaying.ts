import { useQuery } from "react-query";
import { getNowPlaying } from "../api/fetchMovie";
import { useGlobalContext } from "../context/Context";

const useGetNowPlaying = () => {
  const { timePopuler } = useGlobalContext();
  const { data, isLoading, isError, isFetching, isSuccess } = useQuery(["populerMovie", timePopuler], () => getNowPlaying(timePopuler), {
    staleTime: 60 * (60 * 1000),
    refetchInterval: 60 * (60 * 1000),
    refetchOnWindowFocus: false,
  });
  return { data, isSuccess, isError, isFetching, isLoading };
};

export default useGetNowPlaying;
