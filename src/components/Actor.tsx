import { Box, Typography } from "@mui/material";
import { IId, TActor } from "../types/Types";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
import useGetActor from "../hooks/useGetActor";
import { Link } from "react-router-dom";
import { Error, Loading } from ".";

const Actor = ({ id }: IId) => {
  const { data, isLoading, isSuccess, isFetching, isError } = useGetActor({ id });
  const dataActor = data?.cast?.slice(0, 6);

  return (
    <>
      {isFetching && isLoading ? (
        <Loading />
      ) : isError ? (
        <Error />
      ) : (
        isSuccess && (
          <Box sx={{ minHeight: 190, minWidth: 150, display: "flex", flexWrap: "wrap", gap: 1.5, justifyContent: "center" }}>
            {dataActor?.map((actor: TActor) => (
              <Link to={`/actor/${actor.id}`} className="flex flex-col hover:scale-105 transition__all" key={actor.cast_id}>
                <LazyLoadImage src={`https://image.tmdb.org/t/p/original/${actor.profile_path}`} width={150} loading="lazy" effect="opacity" className="w-[160px] rounded-lg h-[180px]" alt={actor.name} height={160} />
                <Box sx={{ minHeight: 30, mt: 2.7 }}>
                  <Typography variant="subtitle1" sx={{ display: "flex", flexDirection: "column" }}>
                    {actor.name}
                    <span className="text-sm text-gray-400">{actor.character}</span>
                  </Typography>
                </Box>
              </Link>
            ))}
          </Box>
        )
      )}
    </>
  );
};

export default Actor;