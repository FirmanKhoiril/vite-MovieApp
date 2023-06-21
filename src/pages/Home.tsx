import { Error, HeroBackground, Loading, MovieCard } from "../components";
import { TCardDetail } from "../types/Types";
import { Box, Typography } from "@mui/material";
import useGetMovie from "../hooks/useGetMovie";
import { useGlobalContext } from "../context/Context";

const Home = () => {
  const { genreName } = useGlobalContext();
  const { data, isLoading, isError, isFetching, isSuccess } = useGetMovie();

  return (
    <main className="min-h-screen">
      {isLoading && isFetching ? (
        <Loading />
      ) : isError ? (
        <Error />
      ) : (
        isSuccess && (
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <HeroBackground background={data} />
            <Typography variant="h4" sx={{ px: 4, py: 2 }}>
              Top <span className="capitalize">{genreName}</span> Movie in 2023
            </Typography>

            <Box sx={{ display: "flex", gap: 2, px: 2, mt: 1, py: 5, overflowX: "scroll" }}>
              {data.results.map((item: TCardDetail) => (
                <MovieCard key={item.id} movie={item} />
              ))}
            </Box>
          </Box>
        )
      )}
    </main>
  );
};

export default Home;
