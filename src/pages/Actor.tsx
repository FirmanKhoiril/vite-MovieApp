import { useNavigate, useParams } from "react-router-dom";
import useGetDetailActor from "../hooks/useGetDetailActor";
import { Box, Container, Typography } from "@mui/material";
import { Button, Error, Loading, RelatedActorMovie } from "../components";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
import moment from "moment";
import { MdArrowBack } from "react-icons/md";
import { useRef, useEffect } from "react";

const Actor = () => {
  const divRef = useRef<HTMLDivElement | any>(null);
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isFetching, isLoading, isError, isSuccess } = useGetDetailActor({ id });

  const handleBack = () => navigate(-1);

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <Container ref={divRef} sx={{ minHeight: "100vh" }}>
      {isLoading && isFetching ? (
        <Loading />
      ) : isError ? (
        <Error />
      ) : (
        isSuccess && (
          <>
            <Box sx={{ display: "flex", flexDirection: { md: "row", xs: "column" }, py: 4, justifyContent: "space-between", alignItems: "center", gap: 4 }}>
              <LazyLoadImage
                src={`https://image.tmdb.org/t/p/original/${data?.profile_path}`}
                alt={data?.name}
                loading="lazy"
                effect="opacity"
                className=" w-[340px] h-[400px] md:w-[440px] md:h-[540px] rounded-lg shadow-[2px_12px_20px_5px] shadow-white/50"
              />
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <Typography variant="h3">{data?.name}</Typography>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography variant="h6" color={"whitesmoke"}>
                    Born: {data?.birthday === null ? "Don't have data" : moment(data?.birthday).format("ll")}
                  </Typography>
                  <Box onClick={handleBack} sx={{ display: "flex", borderRadius: 1, alignItems: "center", gap: 0.5, width: 100, cursor: "pointer" }} className="text-red-400 hover:bg-white/30 bg-white/10 transition__all hover:text-white">
                    <Button name="goBack" type="button" label="backButton" icon={<MdArrowBack size={25} />} onClick={handleBack} />
                    Back
                  </Box>
                </Box>

                <Typography variant="subtitle1" sx={{ minWidth: 300, maxWidth: 650 }} color={"whitesmoke"}>
                  {data?.biography}
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="h4" textAlign="center" mt={2}>
                Movie that {data?.gender === 2 ? "he" : "she"} play too
              </Typography>
              <RelatedActorMovie id={data?.id} />
            </Box>
          </>
        )
      )}
    </Container>
  );
};

export default Actor;
