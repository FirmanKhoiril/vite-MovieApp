import { LazyLoadImage } from "react-lazy-load-image-component";
import { useParams } from "react-router-dom";
import { Box, Container, Tooltip, Typography } from "@mui/material";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import "react-lazy-load-image-component/src/effects/opacity.css";
import moment from "moment";
import { TGenre, TProductionCompanies, TSpoken } from "../types/Types";
import { Actor, Error, Genre, Loading, RelatedMovie } from "../components";
import { useRef, useEffect } from "react";
import useGetDetail from "../hooks/useGetDetail";
import { BsFillPlayFill } from "react-icons/bs";
import { useGlobalContext } from "../context/Context";
import { MdExpandMore, MdExpandLess } from "react-icons/md";

const Detail = () => {
  const { id } = useParams();
  const divRef = useRef<HTMLDivElement | any>(null);
  const { setMovieId, setMovieModel, setMoreActor, moreActor } = useGlobalContext();
  const { data, isError, isFetching, isLoading, isSuccess } = useGetDetail({ id });

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <Box ref={divRef} sx={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      {isLoading && isFetching ? (
        <Loading />
      ) : isError ? (
        <Error />
      ) : (
        isSuccess && (
          <Container sx={{ minHeight: "100vh", display: "flex", alignItems: "center", flexWrap: "wrap", py: 8, flexDirection: "column" }}>
            <Box sx={{ display: "flex", flexDirection: { md: "row", xs: "column" }, justifyContent: "space-evenly", alignItems: { md: "start", xs: "center" }, minHeight: "40vh", gap: 10, width: "100%" }}>
              <LazyLoadImage
                src={`https://image.tmdb.org/t/p/original/${data?.poster_path || data?.backdrop_path}`}
                alt={data?.title}
                height={280}
                width={350}
                className="object-contain min-h-[280px] rounded-xl min-w-[350px] shadow-[2px_12px_20px_5px] shadow-white/30"
              />
              <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2, flexWrap: "wrap", justifyContent: "space-between", width: "100%" }}>
                  <Typography variant="h4">{data?.title}</Typography>
                  <Box sx={{ display: "flex", gap: 1, alignItems: "center", justifyContent: "start" }}>
                    <Box
                      component={"button"}
                      sx={{ bgcolor: "#dc2626", width: 40, height: 40, borderRadius: 9999, display: "flex", alignItems: "center", justifyContent: "center" }}
                      className="hover:bg-white/80 transition__all"
                      onClick={() => {
                        setMovieId(data?.id);
                        setMovieModel((prev: boolean) => !prev);
                      }}
                    >
                      <BsFillPlayFill size={32} className="hover:text-black" />
                    </Box>
                    Play Trailer
                  </Box>
                </Box>

                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", mt: 2, gap: 2, flexWrap: "wrap" }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1, flexWrap: "wrap" }}>
                    <Tooltip title={data?.vote_average}>
                      <span className="flex text-orange-300">
                        {data?.vote_average >= 2 ? <BsStarFill /> : data?.vote_average >= 1 ? <BsStarHalf /> : <BsStar />}
                        {data?.vote_average >= 4 ? <BsStarFill /> : data?.vote_average >= 3 ? <BsStarHalf /> : <BsStar />}
                        {data?.vote_average >= 6 ? <BsStarFill /> : data?.vote_average >= 5 ? <BsStarHalf /> : <BsStar />}
                        {data?.vote_average >= 8 ? <BsStarFill /> : data?.vote_average >= 7 ? <BsStarHalf /> : <BsStar />}
                        {data?.vote_average >= 10 ? <BsStarFill /> : data?.vote_average >= 9 ? <BsStarHalf /> : <BsStar />}
                      </span>
                    </Tooltip>
                    <span>{data?.vote_average} / 10</span>
                  </Box>
                  <Typography sx={{}} className="space-x-2">
                    {data?.runtime}min / {moment(data?.release_date).format("LL")} /{" "}
                    {data?.spoken_languages?.map((lang: TSpoken) => (
                      <span key={lang.name}>{lang.name}</span>
                    ))}
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", mt: 4, justifyContent: "space-around", width: "100%", flexWrap: "wrap" }}>
                  {data?.genres?.map((genre: TGenre) => (
                    <Genre key={genre.id} genre={genre} />
                  ))}
                </Box>
                <Box sx={{ mt: 2.5, gap: 1, display: "flex", flexDirection: "column" }}>
                  <Typography variant="h5">Description</Typography>
                  <Typography>{data?.overview}</Typography>
                </Box>
                <Box sx={{ mt: 2.5, py: 1 }}>
                  <Typography variant="h5">Production Companies</Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 2 }}>
                    {data?.production_companies.map((company: TProductionCompanies) => (
                      <Box sx={{ display: "flex", bgcolor: "white", px: 1.2, py: 0.8, alignItems: "center", borderRadius: 1, gap: 1, flexDirection: "column" }} className="hover:bg-white/70 transition__all" key={company.id}>
                        <LazyLoadImage src={`https://image.tmdb.org/t/p/original/${company.logo_path}`} className="mix-blend-darken h-10" loading="lazy" effect="opacity" alt={company.name} />
                        <Typography sx={{ color: "black", opacity: 0.6 }} variant="subtitle2">
                          {company.name}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box>
              <Box sx={{ display: "flex", mt: 2, flexDirection: "column", gap: 1 }}>
                <Typography variant="h5" sx={{ display: "flex", justifyContent: "space-between", my: 1 }}>
                  Top Cash
                  <button className="p-2 bg-white/10 rounded-full hover:bg-white/30 transition__all" type="button" onClick={() => setMoreActor((prev: boolean) => !prev)}>
                    {moreActor ? <MdExpandLess size={32} /> : <MdExpandMore size={32} />}
                  </button>
                </Typography>
                <Actor id={data?.id} />
              </Box>
              <RelatedMovie id={data?.id} />
            </Box>
          </Container>
        )
      )}
    </Box>
  );
};

export default Detail;
