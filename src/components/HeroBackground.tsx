import { TCardDetail } from "../types/Types";
import { Box, Typography } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
import { SearchBar } from ".";
import { useMemo } from "react";

const HeroBackground = ({ background }: any) => {
  const randomBackground = useMemo(() => {
    const limit = 20;

    var randomIndex = Math.floor(Math.random() * background.results.length);

    if (randomIndex > limit) randomIndex = limit;

    const randomElement = background.results.slice(randomIndex, randomIndex + 1);
    return randomElement;
  }, []);

  return (
    <Box sx={{ px: 1, my: 1 }}>
      {randomBackground.map((item: TCardDetail) => (
        <Box sx={{ width: "100%", height: "70vh", position: "relative" }} key={item.id}>
          <LazyLoadImage src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} loading="lazy" effect="opacity" height={300} className="h-[70vh] w-[100vw] opacity-80" />
          <Box
            sx={{ position: "absolute", height: "70vh", width: "100%", zIndex: 10, top: 0, display: "flex", m: "auto", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 2, px: 1 }}
            className=" bg-gradient-to-b from-transparent to-zinc-900/60"
          >
            <Typography variant="h3" className="drop-shadow-xl" fontWeight={800}>
              Welcome. <br />
              <span className="text-xl md:text-3xl">
                Millions of movies, TV shows and people to discover. <br className="md:block hidden" /> Explore now.
              </span>
            </Typography>
            <SearchBar />
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default HeroBackground;
