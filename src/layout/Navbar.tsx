import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { useGlobalContext } from "../context/Context";
import { Button } from "../components";
import { Box, Typography } from "@mui/material";
import { MdOutlineAccountCircle } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import LogoUser from "../assets/default-blue.png";
import { MdExpandMore, MdExpandLess } from "react-icons/md";
import { useEffect } from "react";

const Navbar = () => {
  const { setToogleSidebar, setToogleSearch, setUser, setToogleUsers, toogleUsers, user } = useGlobalContext();
  const location = useLocation();

  const handleSearch = () => setToogleSearch((prev: boolean) => !prev);
  const handleMenu = () => setToogleSidebar((prev: boolean) => !prev);
  const users: any = localStorage.getItem("users");

  useEffect(() => {
    setUser(JSON.parse(users));
  }, [location]);

  const handleUsers = () => setToogleUsers((prev: boolean) => !prev);

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
      <Box sx={{ display: "flex", gap: 1, alignItems: "center", position: "relative" }}>
        <Button label="handleSearch" name="handleSearchToogle" type="button" icon={<AiOutlineSearch size={25} />} onClick={handleSearch} />
        {users ? (
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <LazyLoadImage width={36} loading="lazy" alt={"users"} height={36} src={LogoUser} />
            <Button onClick={handleUsers} icon={toogleUsers ? <MdExpandLess size={25} /> : <MdExpandMore size={25} />} type="button" name="handleUser" label="handleUser" />

            <Box
              sx={{ position: "absolute", top: 51, left: -15, minWidth: 140, bgcolor: "#27272a", display: "flex", borderRadius: 1, flexDirection: "column", gap: 1, px: 1, py: 2 }}
              className={`${toogleUsers ? "opacity-100" : "opacity-0"} transition__all`}
            >
              <Typography variant="h6" sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                Hi, <span className=" bg-gradient-to-r text-transparent bg-clip-text via-sky-400 to-emerald-500  from-teal-500">{user?.name}</span>
              </Typography>
              <Typography color={"whitesmoke"}>{user?.email}</Typography>
            </Box>
          </Box>
        ) : (
          <Link to={`/login`}>
            <Button label="login" name="login" type="button" icon={<MdOutlineAccountCircle size={25} />} />
          </Link>
        )}
      </Box>
    </nav>
  );
};

export default Navbar;
