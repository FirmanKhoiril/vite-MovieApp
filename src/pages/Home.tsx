import { useInfiniteQuery } from "react-query";
import { getMovies } from "../api/fetchMovie";
import { Error, HeroBackground, Loading, MovieCard } from "../components";
import { TCardDetail } from "../types/Types";
import { Box, Typography } from "@mui/material";
import { RotatingLines } from "react-loader-spinner";
import { useGlobalContext } from "../context/Context";

const Home = () => {
  const { popularGenre } = useGlobalContext();
  const { data, hasNextPage, fetchNextPage, isFetchingNextPage, isFetching, isLoading, isError, isSuccess } = useInfiniteQuery(["popular", popularGenre], ({ pageParam = 1 }) => getMovies(pageParam, popularGenre), {
    staleTime: 60 * (60 * 1000),
    refetchInterval: 60 * (60 * 1000),
    refetchOnWindowFocus: false,
    getNextPageParam: (pages) => {
      return pages.page + 1;
    },
  });

  const background = data?.pages.map((hero) => {
    return hero;
  });

  return (
    <main className="min-h-screen">
      {isLoading && isFetching ? (
        <Loading />
      ) : isError ? (
        <Error />
      ) : (
        isSuccess && (
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <HeroBackground background={background} />
            <Typography variant="h4" sx={{ px: 4, py: 2 }}>
              Top {popularGenre === "movie/top_rated?language=en-US" ? "Rated" : popularGenre === "movie/popular?language=en-US" ? "Trending" : popularGenre === "movie/upcoming?language=en-US" ? "Upcoming" : "Genres"} Movie in 2023
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: 3, justifyContent: "center", mt: 1 }}>
              {data?.pages?.map((page) => page.results.slice(1, 20).map((item: TCardDetail) => <MovieCard key={item.id} movie={item} />))}
            </Box>
            {hasNextPage && (
              <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <button type="button" onClick={() => fetchNextPage()} className="py-2 px-4 min-h-[100px]">
                  {isFetchingNextPage ? <RotatingLines strokeColor="#dc2626" strokeWidth="5" animationDuration="0.75" width="60" visible={true} /> : "Load More"}
                </button>
              </Box>
            )}
          </Box>
        )
      )}
    </main>
  );
};

export default Home;
