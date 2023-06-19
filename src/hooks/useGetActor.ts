import { useQuery } from "react-query";
import { getActorMovie } from "../api/fetchMovie";
import { IId } from "../types/Types";

const useGetActor = ({ id }: IId) => {
  const { data, isLoading, isFetching, isSuccess, isError } = useQuery(["actor", id], () => getActorMovie(id), {
    staleTime: 60 * (60 * 1000),
    refetchInterval: 60 * (60 * 1000),
    refetchOnWindowFocus: false,
    enabled: !!id,
  });
  return { data, isLoading, isFetching, isSuccess, isError };
};

export default useGetActor;
