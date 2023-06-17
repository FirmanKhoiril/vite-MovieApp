import { Box, Typography, Tooltip } from "@mui/material";
import { ICardDetail } from "../types/Types";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
import { Link } from "react-router-dom";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const MovieCard = ({ movie }: ICardDetail) => {
  return (
    <Link to={`/movie/${movie.id}`} className="flex flex-col min-h-[320px] rounded-t-xl overflow-hidden min-w-[220px]">
      <LazyLoadImage
        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
        effect="opacity"
        loading="lazy"
        className=" min-h-[300px] hover:scale-[1.05] rounded-xl transition__all peer ease-linear min-w-[220px]"
        alt={movie.original_title}
        height={320}
        width={200}
      />
      <Box sx={{ height: 50, width: 220, mt: 2 }} className="truncate">
        <Typography variant="body1">
          <span className=" text-[20px] tracking-wide">{movie.original_title}</span>
        </Typography>
        <Tooltip title={movie.vote_average}>
          <span className="flex text-orange-300">
            {movie.vote_average >= 2 ? <BsStarFill /> : movie.vote_average >= 1 ? <BsStarHalf /> : <BsStar />}
            {movie.vote_average >= 4 ? <BsStarFill /> : movie.vote_average >= 3 ? <BsStarHalf /> : <BsStar />}
            {movie.vote_average >= 6 ? <BsStarFill /> : movie.vote_average >= 5 ? <BsStarHalf /> : <BsStar />}
            {movie.vote_average >= 8 ? <BsStarFill /> : movie.vote_average >= 7 ? <BsStarHalf /> : <BsStar />}
            {movie.vote_average >= 10 ? <BsStarFill /> : movie.vote_average >= 9 ? <BsStarHalf /> : <BsStar />}
          </span>
        </Tooltip>
      </Box>
    </Link>
  );
};

export default MovieCard;
