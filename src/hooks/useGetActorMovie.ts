import { useQuery } from "react-query";
import { IId } from "../types/Types";
import { getRelatedActorPlay } from "../api/fetchMovie";

const useGetActorMovie = ({ id }: IId) => {
  const { data, isLoading, isError, isSuccess, isFetching } = useQuery(["actorMovie", id], () => getRelatedActorPlay(id), {
    staleTime: 60 * (60 * 1000),
    refetchInterval: 60 * (60 * 1000),
    refetchOnWindowFocus: false,
    enabled: !!id,
  });
  return { data, isLoading, isError, isSuccess, isFetching };
};

export default useGetActorMovie;
