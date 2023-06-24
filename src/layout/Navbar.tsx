import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { useGlobalContext } from "../context/Context";
import { Button } from "../components";
import { Box, Typography } from "@mui/material";
import { MdOutlineAccountCircle } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { setToogleSidebar, setToogleSearch } = useGlobalContext();

  const handleSearch = () => setToogleSearch((prev: boolean) => !prev);
  const handleMenu = () => setToogleSidebar((prev: boolean) => !prev);

  return (
    <nav className="p-[10px] text-white sticky inset-0 bg-zinc-800 z-20 flex items-center justify-between shadow-xl">
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Button label="handleMenu" name="handleMenu" type="button" icon={<AiOutlineMenu size={25} />} onClick={handleMenu} />
        <Link to={`/`}>
          <Typography variant="h4" className=" text-darkLogo font-logo tracking-tighter" sx={{ fontWeight: 900 }}>
            FILMREF
          </Typography>
        </Link>
      </Box>
      <Box sx={{ display: "flex", gap: 0.5, alignItems: "center" }}>
        <Button label="handleSearch" name="handleSearchToogle" type="button" icon={<AiOutlineSearch size={25} />} onClick={handleSearch} />
        <Link to={`/login`}>
          <Button label="login" name="login" type="button" icon={<MdOutlineAccountCircle size={25} />} />
        </Link>
      </Box>
    </nav>
  );
};

export default Navbar;
