import { TCardDetail } from "../types/Types";
import { Box, Typography } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
import { SearchBar } from ".";

const HeroBackground = ({ background }: any) => {
  const limit = 20;

  var randomIndex = Math.floor(Math.random() * background.results.length);

  if (randomIndex > limit) randomIndex = limit;

  const randomElement = background.results.slice(randomIndex, randomIndex + 1);

  return (
    <Box sx={{ px: 1, my: 2 }}>
      {randomElement.map((item: TCardDetail) => (
        <Box sx={{ width: "100%", height: "60vh", position: "relative" }} key={item.id}>
          <LazyLoadImage src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} loading="lazy" effect="opacity" height={300} className="h-[60vh] w-[100vw]" />
          <Box
            sx={{ position: "absolute", height: "60vh", width: "100%", zIndex: 10, top: 0, display: "flex", m: "auto", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 2, px: 1 }}
            className=" bg-gradient-to-b from-transparent to-zinc-900/60"
          >
            <Typography variant="h3" fontWeight={800}>
              Welcome. <br />
              <span className="text-3xl">Millions of movies, TV shows and people to discover. Explore now.</span>
            </Typography>
            <SearchBar />
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default HeroBackground;
