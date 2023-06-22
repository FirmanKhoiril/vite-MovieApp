import { useParams } from "react-router-dom";
import useGetSearchTerm from "../hooks/useGetSearchTerm";
import { Error, Loading, MovieCard } from "../components";
import { Box } from "@mui/material";
import { TCardDetail } from "../types/Types";
import { RotatingLines } from "react-loader-spinner";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Search = () => {
  const { id } = useParams();

  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "300px",
    delay: 150,
    root: null,
  });
  const { data, isError, isFetching, hasNextPage, isFetchingNextPage, isSuccess, isLoading, fetchNextPage } = useGetSearchTerm({ id });
  const handleNextPage = () => {
    if (inView) fetchNextPage();
  };

  useEffect(() => {
    if (inView) fetchNextPage();
  }, [isFetchingNextPage, isLoading, fetchNextPage, inView]);

  return (
    <>
      {isLoading && isFetching ? (
        <Loading />
      ) : isError ? (
        <Error />
      ) : (
        isSuccess && (
          <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column", py: 10 }}>
            <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: 2, py: 10 }}>{data?.pages.map((page) => page.results.map((item: TCardDetail) => <MovieCard movie={item} />))}</Box>
            {hasNextPage && (
              <button type="button" ref={ref} className="" onClick={handleNextPage}>
                <RotatingLines strokeColor="#dc2626" strokeWidth="5" animationDuration="0.75" width="60" visible={true} />
              </button>
            )}
          </Box>
        )
      )}
    </>
  );
};

export default Search;
