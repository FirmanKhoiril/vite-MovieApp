import { Error, HeroBackground, Loading, MovieCard, NowPlaying } from "../components";
import { TCardDetail } from "../types/Types";
import { Box, Typography } from "@mui/material";
import useGetMovie from "../hooks/useGetMovie";
import { useGlobalContext } from "../context/Context";
import { useEffect, useRef } from "react";

const Home = () => {
  const divRef = useRef<HTMLDivElement | any>(null);
  const { genreName } = useGlobalContext();
  const { data, isLoading, isError, error, isFetching, isSuccess } = useGetMovie();
  useEffect(() => {
    divRef?.current?.scrollIntoView({ behavior: "smooth" });
  }, [isLoading, isFetching]);

  return (
    <main className="min-h-screen ">
      {isLoading && isFetching ? (
        <Loading />
      ) : isError ? (
        <Error error={error} />
      ) : (
        isSuccess && (
          <Box ref={divRef} sx={{ display: "flex", flexDirection: "column" }}>
            <HeroBackground background={data} />
            <Typography variant="h4" sx={{ px: 4, py: 2, fontSize: { md: 32, xs: 22 }, fontWeight: 800 }}>
              Top <span className="capitalize">{genreName}</span> Movie in 2023
            </Typography>

            <Box sx={{ display: "flex", gap: 2, justifyContent: "space-around", alignItems: "center", px: 2, mt: 1, py: 5, flexWrap: "wrap" }}>
              {data.results.map((item: TCardDetail) => (
                <MovieCard key={item.id} movie={item} />
              ))}
            </Box>
          </Box>
        )
      )}
      <NowPlaying />
    </main>
  );
};

export default Home;
