import { Link } from "react-router-dom";
import { Categorygenres } from "../types/DummyData";
import { Typography, Box, Stack } from "@mui/material";
import { CiDark, CiSun } from "react-icons/ci";
import { useGlobalContext } from "../context/Context";

const Sidebar = () => {
  const { setPopularGenre } = useGlobalContext();
  return (
    <Stack sx={{ overflowY: "auto", height: "100%", flexDirection: "column", position: "fixed", top: 0, zIndex: 20, bgcolor: "#18181b", px: 2, py: 1 }}>
      <Link to={`/`}>
        <Typography variant="h3" className=" text-darkLogo font-logo tracking-tighter" sx={{ fontWeight: "bold", p: 2 }}>
          FILMREF
        </Typography>
      </Link>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", fontSize: 30, color: "whitesmoke" }}>
        <button type="button" data-tooltip="Dark" aria-label="Dark Button" name="darkButton">
          <CiDark />
        </button>
        &nbsp; <span className="text-lg">/</span> &nbsp;
        <button type="button" data-tooltip="Light" aria-label="Light Button" name="lightButton">
          <CiSun />
        </button>
      </Box>
      {Categorygenres.map((genre) => (
        <Box key={genre.title} sx={{ display: "flex", flexWrap: "wrap", flexDirection: "column", borderBottom: 1, borderColor: "#71717a", p: 2, gap: 1 }}>
          <Typography variant="h6" color={"#71717a"}>
            {genre.title}
          </Typography>
          {genre.genre.map((item) => (
            <Typography
              component="button"
              onClick={() => setPopularGenre(item?.url)}
              key={item.name}
              variant="body2"
              className="hover:bg-red-500/80 bg-zinc-800 capitalize hover:text-black text-white"
              sx={{ py: "12px", px: 2, display: "flex", alignItems: "center", gap: 1, minWidth: 180, borderRadius: 2 }}
            >
              <span className="text-3xl">{item.icon}</span>
              <span className="text-lg">{item.name}</span>
            </Typography>
          ))}
        </Box>
      ))}
    </Stack>
  );
};

export default Sidebar;
