import { AiOutlineMenu } from "react-icons/ai";
import { useGlobalContext } from "../context/Context";

const Navbar = () => {
  const { setToogleSidebar } = useGlobalContext();
  return (
    <nav className="p-[10px] text-white sticky inset-0 bg-zinc-800 z-20 flex items-center justify-between shadow-xl">
      <button type="button" className="p-3 transition__all hover:shadow-white/10 rounded-full hover:text-white/80 hover:shadow-[0px_3px_3px_3px]" onClick={() => setToogleSidebar((prev: boolean) => !prev)}>
        <AiOutlineMenu className="text-2xl" />
      </button>
    </nav>
  );
};

export default Navbar;
