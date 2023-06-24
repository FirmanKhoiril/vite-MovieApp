import { IId, TCardDetail } from "../types/Types";
import useGetRelatedMovie from "../hooks/useGetRelatedMovie";
import { Error, Loading, MovieCard } from ".";
import { Box, Typography } from "@mui/material";

const RelatedMovie = ({ id }: IId) => {
  const { data, isFetching, isError, isSuccess, isLoading } = useGetRelatedMovie({ id });

  return (
    <>
      <Typography variant="h4" sx={{ py: 2 }}>
        Related Movie
      </Typography>
      {isLoading && isFetching ? (
        <Loading />
      ) : isError ? (
        <Error />
      ) : (
        isSuccess && (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, justifyContent: "center", alignItems: "center" }}>
            {data?.results.map((item: TCardDetail) => (
              <MovieCard key={item.id} movie={item} />
            ))}
          </Box>
        )
      )}
    </>
  );
};

export default RelatedMovie;
