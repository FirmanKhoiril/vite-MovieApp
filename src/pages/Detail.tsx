import { LazyLoadImage } from "react-lazy-load-image-component";
import { useParams } from "react-router-dom";
import { Box, Container, Tooltip, Typography } from "@mui/material";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import "react-lazy-load-image-component/src/effects/opacity.css";
import moment from "moment";
import { TGenre, TSpoken } from "../types/Types";
import { Actor, Error, Genre, Loading } from "../components";
import useGetDetail from "../hooks/useGetDetail";
import { BsFillPlayFill } from "react-icons/bs";
import { useGlobalContext } from "../context/Context";

const Detail = () => {
  const { id } = useParams();
  const { setMovieId, setMovieModel } = useGlobalContext();
  const { data, isError, isFetching, isLoading, isSuccess } = useGetDetail({ id });

  return (
    <>
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
                <Box sx={{ display: "flex", alignItems: "center", gap: 2, flexWrap: "wrap" }}>
                  <Typography variant="h4">{data?.title}</Typography>
                </Box>
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
                <Box sx={{ display: "flex", mt: 2, flexDirection: "column", gap: 1 }}>
                  <Typography variant="h5" my={1} textAlign={"center"}>
                    Top Cash
                  </Typography>
                  <Actor id={data?.id} />
                </Box>
                {/* <Box>
                  <button type="button"></button>
                </Box> */}
              </Box>
            </Box>
          </Container>
        )
      )}
    </>
  );
};

export default Detail;
