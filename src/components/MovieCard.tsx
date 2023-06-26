import { Box, Typography, Tooltip } from "@mui/material";
import { ICardDetail } from "../types/Types";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";
import moment from "moment";

const MovieCard = ({ movie }: ICardDetail) => {
  return (
    <Link to={`/movie/${movie.id}`} className=" rounded-t-2xl group flex flex-col relative md:h-[300px] h-[240px] hover:scale-105 transition__all w-[200px]">
      <LazyLoadImage
        src={`https://image.tmdb.org/t/p/original/${movie.poster_path || movie.backdrop_path}`}
        effect="blur"
        loading="lazy"
        className="md:h-[300px] h-[240px] absolute rounded-md w-[200px] object-fill"
        alt={movie.original_title || movie.title}
        width={200}
      />

      <Box
        sx={{ height: { md: 300, xs: 240 }, width: "100%", position: "absolute", bottom: 0, p: 1, display: "flex", flexDirection: "column", justifyContent: "end" }}
        className="bg-gradient-to-b from-transparent via-zinc-900/30 to-zinc-900/90 opacity-0 group-hover:opacity-100 transition__all "
      >
        <Link to={`/movie/${movie.id}`}>
          <Typography variant="subtitle2">
            <Tooltip title={movie.title}>
              <span className="text-[15px] font-logo tracking-wide">{movie.title}</span>
            </Tooltip>
          </Typography>
        </Link>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Tooltip title={Math.floor(movie.vote_average * 10)}>
            <span className="font-bold text-teal-500 text-lg"> {Math.floor(movie.vote_average * 10)}% Match</span>
          </Tooltip>
          <Tooltip title={moment(movie.release_date).format("LL")}>
            <span className="font-bold text-lg">{moment(movie.release_date).format("YYYY")}</span>
          </Tooltip>
        </Box>
      </Box>
    </Link>
  );
};

export default MovieCard;
