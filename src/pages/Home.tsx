import { Error, HeroBackground, Loading, MovieCard, NowPlaying } from "../components";
import { TCardDetail } from "../types/Types";
import { Box, Typography } from "@mui/material";
import useGetMovie from "../hooks/useGetMovie";
import { useGlobalContext } from "../context/Context";

const Home = () => {
  const { genreName } = useGlobalContext();
  const { data, isLoading, isError, error, isFetching, isSuccess } = useGetMovie();

  return (
    <main className="min-h-screen ">
      {isLoading && isFetching ? (
        <Loading />
      ) : isError ? (
        <Error error={error} />
      ) : (
        isSuccess && (
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <HeroBackground background={data} />
            <Typography variant="h4" sx={{ px: 4, py: 2 }}>
              Top <span className="capitalize">{genreName}</span> Movie in 2023
            </Typography>

            <Box sx={{ display: "flex", gap: 2, px: 2, mt: 1, py: 5, overflowX: "scroll" }} className="scrollbar scrollbar-w-4 scrollbar-thumb-red-500 scrollbar-track-black/10 scroll-p-7">
              {data.results.map((item: TCardDetail) => (
                <MovieCard key={item.id} movie={item} />
              ))}
            </Box>
            <NowPlaying />
          </Box>
        )
      )}
    </main>
  );
};

export default Home;
