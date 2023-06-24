import { useQuery } from "react-query";
import { IId } from "../types/Types";
import { getRelatedActorPlay } from "../api/fetchMovie";

const useGetActorMovie = ({ id }: IId) => {
  const { data, isLoading, isError, isSuccess, isFetching } = useQuery(["actorMovie", id], () => getRelatedActorPlay(id), {});
  return { data, isLoading, isError, isSuccess, isFetching };
};

export default useGetActorMovie;
