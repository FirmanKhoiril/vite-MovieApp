import { useQuery } from "react-query";
import { IId } from "../types/Types";
import { getRelatedMovies } from "../api/fetchMovie";

const useGetRelatedMovie = ({ id }: IId) => {
  const { data, isFetching, isLoading, isError, isSuccess } = useQuery(["relatedMovie", id], () => getRelatedMovies(id), {
    staleTime: 60 * (60 * 1000),
    refetchInterval: 60 * (60 * 1000),
    refetchOnWindowFocus: false,
    enabled: !!id,
  });
  return { data, isFetching, isLoading, isError, isSuccess };
};

export default useGetRelatedMovie;
