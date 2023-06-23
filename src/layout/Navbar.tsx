import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { useGlobalContext } from "../context/Context";
import { Button } from "../components";

const Navbar = () => {
  const { setToogleSidebar, setToogleSearch } = useGlobalContext();

  const handleSearch = () => setToogleSearch((prev: boolean) => !prev);
  const handleMenu = () => setToogleSidebar((prev: boolean) => !prev);

  return (
    <nav className="p-[10px] text-white sticky inset-0 bg-zinc-800 z-20 flex items-center justify-between shadow-xl">
      <Button label="handleMenu" name="handleMenu" type="button" icon={<AiOutlineMenu size={25} />} onClick={handleMenu} />
      <Button label="handleSearch" name="handleSearchToogle" type="button" icon={<AiOutlineSearch size={25} />} onClick={handleSearch} />
    </nav>
  );
};

export default Navbar;
