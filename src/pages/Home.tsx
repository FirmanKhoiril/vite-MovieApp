import { useInfiniteQuery } from "react-query";
import { getMovies } from "../api/fetchMovie";
import { Error, HeroBackground, Loading, MovieCard } from "../components";
import { TCardDetail } from "../types/Types";
import { Box } from "@mui/material";
import { RotatingLines } from "react-loader-spinner";

const Home = () => {
  const { data, hasNextPage, fetchNextPage, isFetchingNextPage, isFetching, isLoading, isError, isSuccess } = useInfiniteQuery(["Test"], ({ pageParam = 1 }) => getMovies(pageParam), {
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
  background;
  return (
    <main className="min-h-screen bg-white">
      {isLoading && isFetching ? (
        <Loading />
      ) : isError ? (
        <Error />
      ) : (
        isSuccess && (
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <HeroBackground background={background} />
            <Box sx={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: 2, justifyContent: "center", mt: 1 }}>
              {data?.pages?.map((page) => page.results.slice(1, 20).map((item: TCardDetail) => <MovieCard key={item.id} movie={item} />))}
            </Box>
            {hasNextPage && (
              <button type="button" onClick={() => fetchNextPage()} className="py-2 px-4">
                {isFetchingNextPage ? <RotatingLines strokeColor="#0ea5e9" strokeWidth="5" animationDuration="0.75" width="60" visible={true} /> : "Load More"}
              </button>
            )}
          </Box>
        )
      )}
    </main>
  );
};

export default Home;
