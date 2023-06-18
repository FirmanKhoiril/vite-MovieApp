// import { useQuery } from "react-query";
// import { detailMovies } from "../api/fetchMovie";
// import { LazyLoadImage } from "react-lazy-load-image-component";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import "react-lazy-load-image-component/src/effects/opacity.css";

const Detail = () => {
  const { id } = useParams();
  // const { data } = useQuery(["detailMovie", id], () => detailMovies(id), {
  //   staleTime: 60 * (60 * 1000),
  //   refetchInterval: 60 * (60 * 1000),
  //   refetchOnWindowFocus: false,
  // });

  return (
    <Box>
      {/* <LazyLoadImage src={data.} /> */} Detail {id}
    </Box>
  );
};

export default Detail;
