import { useParams } from "react-router-dom";
import useGetSearchTerm from "../hooks/useGetSearchTerm";
import { Error, Loading, MovieCard } from "../components";
import { Box, Typography } from "@mui/material";
import { TCardDetail } from "../types/Types";
import { RotatingLines } from "react-loader-spinner";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef } from "react";

const Search = () => {
  const { id } = useParams();
  const divRef = useRef<HTMLDivElement | any>(null);
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
  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <Box ref={divRef} sx={{ minHeight: "100vh" }}>
      {isLoading && isFetching ? (
        <Loading />
      ) : isError ? (
        <Error />
      ) : (
        isSuccess && (
          <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column", py: 5, justifyContent: "center" }}>
            <Typography variant="h4">
              Searching for <span className="text-red-600">{id}</span>{" "}
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: 3, py: 5 }}>{data?.pages.map((page) => page.results.map((item: TCardDetail) => <MovieCard key={item.id} movie={item} />))}</Box>
            {hasNextPage && (
              <button type="button" ref={ref} onClick={handleNextPage}>
                {isFetchingNextPage ? <RotatingLines strokeColor="#dc2626" strokeWidth="5" animationDuration="0.75" width="60" visible={true} /> : ""}
              </button>
            )}
          </Box>
        )
      )}
    </Box>
  );
};

export default Search;
