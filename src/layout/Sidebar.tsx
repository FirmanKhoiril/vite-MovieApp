import { Link } from "react-router-dom";
import { Categorygenres } from "../types/DummyData";
import { Typography, Box, Stack } from "@mui/material";

const Sidebar = () => {
  return (
    <Stack sx={{ overflowY: "auto", height: { xs: "auto", md: "100%" }, flexDirection: "column", position: "fixed", top: 0, zIndex: 20, bgcolor: "white" }}>
      <Link to={`/`}>
        <Typography variant="h3" className=" text-logo font-logo tracking-tighter" sx={{ fontWeight: "bold", py: 2, px: 3 }}>
          FILMREF
        </Typography>
      </Link>
      {Categorygenres.map((genre) => (
        <Box key={genre.title} sx={{ display: "flex", flexWrap: "wrap", flexDirection: "column", borderBottom: 1, borderColor: "#78716c", p: 2, gap: 1 }}>
          <Typography variant="h6" color={"#475569"}>
            {genre.title}
          </Typography>
          {genre.genre.map((item) => (
            <Typography variant="body2" className="hover:bg-blue-500/80 bg-white capitalize hover:text-white" sx={{ py: 2, px: 2, display: "flex", alignItems: "center", gap: 1, minWidth: 180, borderRadius: 2 }}>
              <span className="text-2xl">{item.icon}</span>
              <span className="text-lg">{item.name}</span>
            </Typography>
          ))}
        </Box>
      ))}
    </Stack>
  );
};

export default Sidebar;
