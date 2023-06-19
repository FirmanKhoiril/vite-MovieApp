import { IId } from "../types/Types";
import { useQuery } from "react-query";
import { detailMovies } from "../api/fetchMovie";

const useGetDetail = ({ id }: IId) => {
  const { data, isLoading, isFetching, isError, isSuccess } = useQuery(["detailMovie", id], () => detailMovies(id), {
    staleTime: 60 * (60 * 1000),
    refetchInterval: 60 * (60 * 1000),
    refetchOnWindowFocus: false,
    enabled: !!id,
  });

  return { data, isLoading, isFetching, isError, isSuccess };
};

export default useGetDetail;
