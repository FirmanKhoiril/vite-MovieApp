import ReactPlayer from "react-player/youtube";
import { TTrailer } from "../types/Types";
import useGetTrailerBackground from "../hooks/useGetTrailerBackground";
import { BlackScreen, Error, Loading } from ".";
import { Box } from "@mui/material";
import { useGlobalContext } from "../context/Context";

const MovieModel = () => {
  const { data, isLoading, isFetching, isError, isSuccess } = useGetTrailerBackground();
  const { movieModel, setMovieModel } = useGlobalContext();

  const handleModel = () => setMovieModel((prev: boolean) => !prev);

  return (
    <>
      {movieModel && <BlackScreen onClick={handleModel} />}
      <Box sx={{ position: "fixed", zIndex: 9999, minHeight: "40vh", minWidth: "100%" }} className={` transition duration-500 ${!movieModel ? "scale-0" : "scale-100"}`}>
        {isLoading && isFetching ? (
          <Loading />
        ) : isError ? (
          <Error />
        ) : (
          isSuccess && (
            <>
              {data?.results?.slice(0, 1).map((movie: TTrailer) => (
                <ReactPlayer playing={movieModel ? true : false} key={movie.id} url={`https://www.youtube.com/watch?v=${movie.key}`} controls className="react-player" />
              ))}
            </>
          )
        )}
      </Box>
    </>
  );
};

export default MovieModel;
