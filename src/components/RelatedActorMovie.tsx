import { Box } from "@mui/material";
import { Error, Loading, MovieCard } from ".";
import useGetActorMovie from "../hooks/useGetActorMovie";
import { IId, TCardDetail } from "../types/Types";

const RelatedActorMovie = ({ id }: IId) => {
  const { data, isLoading, isFetching, isError, isSuccess } = useGetActorMovie({ id });

  return (
    <>
      {isLoading && isFetching ? (
        <Loading />
      ) : isError ? (
        <Error />
      ) : (
        isSuccess && (
          <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: 1.5, py: 10 }}>
            {data?.cast.map((item: TCardDetail) => (
              <MovieCard key={item.id} movie={item} />
            ))}
          </Box>
        )
      )}
    </>
  );
};

export default RelatedActorMovie;
