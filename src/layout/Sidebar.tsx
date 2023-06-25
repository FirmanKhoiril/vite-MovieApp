import { Link } from "react-router-dom";
import { Categorygenres } from "../types/DummyData";
import { Typography, Box, Stack } from "@mui/material";
import { CiDark, CiSun } from "react-icons/ci";
import { useGlobalContext } from "../context/Context";
import { BlackScreen, Button } from "../components";
import { AiOutlineClose } from "react-icons/ai";

const Sidebar = () => {
  const { setPopularGenre, toogleSidebar, setGenreName, setToogleSidebar } = useGlobalContext();

  const handleClose = () => setToogleSidebar((prev: boolean) => !prev);
  const handleSidebar = () => setToogleSidebar((prev: boolean) => !prev);

  return (
    <>
      <Stack
        className={`${toogleSidebar ? "translate-x-[0%]" : "translate-x-[-100%]"} transition duration-[600ms]  scrollbar-h-2 scrollbar-thumb-red-500 scrollbar-thin scrollbar-track-black/10 scroll-p-2`}
        sx={{ overflowY: "auto", height: "100%", flexDirection: "column", position: "fixed", top: 0, zIndex: 30, bgcolor: "#18181b", px: 2, py: 1 }}
      >
        <Box>
          <Button icon={<AiOutlineClose size={25} />} onClick={handleClose} name="handleClose" label="handleClose" type="button" />
        </Box>
        <Link to={`/`}>
          <Typography variant="h3" className=" text-darkLogo font-logo tracking-tighter" sx={{ fontWeight: "bold", p: 2 }}>
            FILMREF
          </Typography>
        </Link>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", fontSize: 30, color: "whitesmoke" }}>
          <Button type="button" icon={<CiDark />} label="Dark Button" name="darkButton" />
          <span className="text-lg">/</span>
          <Button type="button" label="Light Button" name="lightButton" icon={<CiSun />} />
        </Box>
        {Categorygenres.map((genre) => (
          <Box key={genre.title} sx={{ display: "flex", flexWrap: "wrap", flexDirection: "column", borderBottom: 1, borderColor: "#71717a", p: 2, gap: 1 }}>
            <Typography variant="h6" color={"#71717a"}>
              {genre.title}
            </Typography>
            {genre.genre.map((item) => (
              <Link
                to="/"
                onClick={() => {
                  setPopularGenre(item?.url);
                  setGenreName(item.name);
                  setToogleSidebar((prev: boolean) => !prev);
                }}
                key={item.name}
                className="hover:bg-red-500/80 bg-zinc-800 capitalize hover:text-black text-white py-3 gap-2 flex items-center rounded-lg min-w-[180px] px-2"
              >
                <span className="text-3xl">{item.icon}</span>
                <span className="text-lg">{item.name}</span>
              </Link>
            ))}
          </Box>
        ))}
        <Typography variant="subtitle2" sx={{ py: 2 }}>
          &copy;Copyright By{" "}
          <a rel="noreferrer" target="_blank" href="https://www.instagram.com/firman.khoiril/">
            @firman.khoiril
          </a>
        </Typography>
      </Stack>
      {toogleSidebar && <BlackScreen onClick={handleSidebar} />}
    </>
  );
};

export default Sidebar;
