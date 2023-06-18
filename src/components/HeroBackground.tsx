import { TCardDetail } from "../types/Types";
import { Box, Container, Tooltip, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
import { Link } from "react-router-dom";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const HeroBackground = ({ background }: any) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: "linear",
    pauseOnHover: true,
  };

  return (
    <Container sx={{ px: 1, my: 2 }}>
      <Slider {...settings}>
        {background.map((hero: any) =>
          hero.results.slice(0, 1).map((item: TCardDetail) => (
            <Link to={`/movie/${item.id}`} className="rounded-lg relative h-[50vh] w-[1150px]" key={item.id}>
              <LazyLoadImage src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} loading="lazy" effect="opacity" height={300} width={1150} className="h-[50vh] rounded-lg w-[100vw]" />
              <Box sx={{ position: "absolute", top: 0, height: "50vh", width: "100%" }} className=" rounded-lg bg-black/70">
                <Box sx={{ minWidth: 300, maxWidth: 400, p: { xs: 2, md: 8 }, flexDirection: "column", display: "flex", flexWrap: "wrap", gap: 1, position: "absolute", bottom: 10 }}>
                  <Typography variant="h5">
                    <span className="text-white ">{item.title}</span>
                  </Typography>
                  <Typography variant="body2">
                    <span className="text-white/70 ">{item.overview}</span>
                  </Typography>
                  <Tooltip title={item.vote_average}>
                    <p className="flex text-orange-300">
                      {item.vote_average >= 2 ? <BsStarFill /> : item.vote_average >= 1 ? <BsStarHalf /> : <BsStar />}
                      {item.vote_average >= 4 ? <BsStarFill /> : item.vote_average >= 3 ? <BsStarHalf /> : <BsStar />}
                      {item.vote_average >= 6 ? <BsStarFill /> : item.vote_average >= 5 ? <BsStarHalf /> : <BsStar />}
                      {item.vote_average >= 8 ? <BsStarFill /> : item.vote_average >= 7 ? <BsStarHalf /> : <BsStar />}
                      {item.vote_average >= 10 ? <BsStarFill /> : item.vote_average >= 9 ? <BsStarHalf /> : <BsStar />}
                    </p>
                  </Tooltip>
                </Box>
              </Box>
            </Link>
          ))
        )}
      </Slider>
    </Container>
  );
};

export default HeroBackground;
