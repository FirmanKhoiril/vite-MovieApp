import ReactPlayer from "react-player/youtube";
import { TTrailer } from "../types/Types";
import useGetTrailerBackground from "../hooks/useGetTrailerBackground";
import { Error, Loading } from ".";
import { Box } from "@mui/material";

const MovieModel = () => {
  const { data, isLoading, isFetching, isError, isSuccess } = useGetTrailerBackground();

  return (
    <Box sx={{ position: "fixed", zIndex: 9999, minHeight: "40vh", minWidth: "100%" }}>
      {isLoading && isFetching ? (
        <Loading />
      ) : isError ? (
        <Error />
      ) : (
        isSuccess && (
          <>
            {data?.results?.slice(0, 1).map((movie: TTrailer) => (
              <ReactPlayer playing key={movie.id} url={`https://www.youtube.com/watch?v=${movie.key}`} controls className="react-player" />
            ))}
          </>
        )
      )}
    </Box>
  );
};

export default MovieModel;
