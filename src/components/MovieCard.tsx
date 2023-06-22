import { Box, Typography, Tooltip } from "@mui/material";
import { ICardDetail } from "../types/Types";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
import { Link } from "react-router-dom";
import { BsStarFill, BsStarHalf, BsStar, BsFillPlayFill } from "react-icons/bs";
import moment from "moment";
import { useGlobalContext } from "../context/Context";

const MovieCard = ({ movie }: ICardDetail) => {
  const { setMovieId, setMovieModel } = useGlobalContext();
  return (
    <Box sx={{ display: "flex", minHeight: 330, minWidth: 220, flexDirection: "column", position: "relative" }} className=" group rounded-t-2xl">
      <LazyLoadImage
        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
        effect="opacity"
        loading="lazy"
        className="min-h-[300px] absolute rounded-2xl transition__all peer ease-linear min-w-[220px]  group-hover:translate-y-[-5vw]"
        alt={movie.original_title}
        height={320}
        width={200}
      />

      <Box sx={{ minHeight: 50, width: 220, mt: 2, position: "absolute", bottom: 0, p: 1 }} className="sm:group-hover:translate-y-[-4vw] rounded-b-xl transition__all group-hover:opacity-100 opacity-0 bg-zinc-900/90">
        <Typography variant="subtitle2">
          <span className="text-xs">{moment(movie.release_date).format("LL")}</span>
        </Typography>
        <Box
          component={"button"}
          sx={{ position: "absolute", bottom: 2, right: 2, bgcolor: "#dc2626", width: 40, height: 40, borderRadius: 9999, display: "flex", alignItems: "center", justifyContent: "center" }}
          className="hover:bg-white/80 transition__all"
          onClick={() => {
            setMovieId(movie.id);
            setMovieModel((prev: boolean) => !prev);
          }}
        >
          <BsFillPlayFill size={32} className="hover:text-black" />
        </Box>
        <Link to={`/movie/${movie.id}`}>
          <Typography variant="body2">
            <Tooltip title={movie.title}>
              <span className="text-[16px] bg-gradient-to-r text-transparent bg-clip-text from-red-500 via-red-400 to-red-500 hover:text-red-500 transition__all tracking-wide">{movie.title}</span>
            </Tooltip>
          </Typography>
        </Link>

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
    </Box>
  );
};

export default MovieCard;
