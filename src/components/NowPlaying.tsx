import { Box, Typography } from "@mui/material";
import useGetNowPlaying from "../hooks/useGetNowPlaying";
import { Error, Loading, MovieCard } from ".";
import { TCardDetail } from "../types/Types";
import { time } from "../types/DummyData";
import { useGlobalContext } from "../context/Context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { RotatingLines } from "react-loader-spinner";

const NowPlaying = () => {
  const { timePopuler, setTimePopuler } = useGlobalContext();
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "300px",
    delay: 150,
    root: null,
  });
  const { data, isSuccess, isError, isLoading, isFetching, isFetchingNextPage, fetchNextPage, hasNextPage } = useGetNowPlaying();

  const handleNextPage = () => {
    if (inView) fetchNextPage();
  };

  useEffect(() => {
    if (inView) fetchNextPage();
  }, [isFetchingNextPage, isLoading, fetchNextPage, inView]);
  return (
    <Box sx={{ py: { md: 10, xs: 5 } }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", px: { md: 4, xs: 2 }, py: 2, alignItems: "center" }}>
        <Typography variant="h6" sx={{ fontWeight: 800, fontSize: { md: 28, xs: 22 } }}>
          Trending {timePopuler === "day" ? "Today" : "This Week"}
        </Typography>
        <Box sx={{ overflow: "hidden", borderRadius: 9999, display: "flex", alignItems: "center" }} className="border border-red-500">
          {time.map((item) => (
            <Box
              component={"button"}
              key={item.name}
              sx={{ py: { md: 1, xs: 1 }, px: { md: 2.5, xs: 1.5 } }}
              className={`${timePopuler === item.name ? "bg-gradient-to-r from-red-600 via-red-400 to-red-500" : "bg-white/10"} text-sm sm:text-lg`}
              onClick={() => setTimePopuler(item.name)}
            >
              {item.value}
            </Box>
          ))}
        </Box>
      </Box>
      {isLoading && isFetching ? (
        <Loading />
      ) : isError ? (
        <Error />
      ) : (
        isSuccess && (
          <>
            <Box sx={{ display: "flex", gap: 2, py: 3, px: 2, flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
              {data?.pages.map((page) => page.results.map((item: TCardDetail) => <MovieCard key={item.id} movie={item} />))}
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              {hasNextPage && (
                <button type="button" ref={ref} onClick={handleNextPage}>
                  {isFetchingNextPage ? <RotatingLines strokeColor="#dc2626" strokeWidth="5" animationDuration="0.75" width="60" visible={true} /> : ""}
                </button>
              )}
            </Box>
          </>
        )
      )}
    </Box>
  );
};

export default NowPlaying;
