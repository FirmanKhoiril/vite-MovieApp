import { Box, Typography } from "@mui/material";
import Bg from "../assets/hero.jpg";
import "react-lazy-load-image-component/src/effects/opacity.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Login } from "../components";

const Contact = () => {
  return (
    <Box sx={{ display: "flex", width: "100%", position: "relative", height: "60%", justifyContent: "center", alignItems: "center" }}>
      <LazyLoadImage src={Bg} alt="background" loading="lazy" effect="opacity" className="h-screen md:h-[60%] w-full " />
      <Box
        sx={{
          position: "absolute",
          minHeight: "50vh",
          minWidth: { md: 420, xs: 350 },
          zIndex: 10,
          top: "1",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          color: "white",
          gap: 2,
          py: 2,
          borderRadius: 2,
        }}
        className="bg-zinc-900/80"
      >
        <Typography variant="h4" className=" text-darkLogo font-logo tracking-tighter" sx={{ fontWeight: 900 }}>
          FILMREF
        </Typography>
        <Login />
      </Box>
    </Box>
  );
};

export default Contact;
