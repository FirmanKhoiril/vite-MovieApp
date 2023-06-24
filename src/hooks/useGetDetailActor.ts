import { useQuery } from "react-query";
import { IId } from "../types/Types";
import { getDetailActor } from "../api/fetchMovie";

const useGetDetailActor = ({ id }: IId) => {
  const { data, isLoading, isFetching, isSuccess, isError } = useQuery(["detailActor", id], () => getDetailActor(id), {
    staleTime: 60 * (60 * 1000),
    refetchInterval: 60 * (60 * 1000),
    refetchOnWindowFocus: false,
    enabled: !!id,
  });
  return { data, isLoading, isFetching, isSuccess, isError };
};

export default useGetDetailActor;
