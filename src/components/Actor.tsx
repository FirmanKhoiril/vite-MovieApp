import { Box, Typography } from "@mui/material";
import { IId, TActor } from "../types/Types";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import useGetActor from "../hooks/useGetActor";
import { Link } from "react-router-dom";
import { Error, Loading } from ".";
import { useGlobalContext } from "../context/Context";

const Actor = ({ id }: IId) => {
  const { data, isLoading, isSuccess, isFetching, isError } = useGetActor({ id });
  const { moreActor } = useGlobalContext();

  const actorFilter = () => {
    const dataActor = data?.cast.slice(0, 6);
    if (moreActor) return data?.cast;
    return dataActor;
  };

  const filter = actorFilter();

  return (
    <>
      {isFetching && isLoading ? (
        <Loading />
      ) : isError ? (
        <Error />
      ) : (
        isSuccess && (
          <Box sx={{ minHeight: 220, minWidth: 150, display: "flex", flexWrap: "wrap", gap: 1.5, justifyContent: "center" }}>
            {filter.map((actor: TActor) => (
              <Link to={`/actor/${actor.id}`} className="flex flex-col hover:scale-105 transition__all" key={actor.cast_id}>
                <LazyLoadImage src={`https://image.tmdb.org/t/p/original/${actor.profile_path}`} width={125} loading="lazy" effect="blur" className="w-[125px] rounded-full h-[125px]" alt={actor.name} height={125} />
                <Box sx={{ minHeight: 80, mt: 1, width: 120, p: 0.5 }}>
                  <Typography variant="subtitle1" sx={{ display: "flex", flexDirection: "column" }}>
                    {actor.name}
                    <span className="text-xs text-gray-400">{actor.character}</span>
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
