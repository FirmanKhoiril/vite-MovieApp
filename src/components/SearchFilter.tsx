import { MdArrowBack } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { useGlobalContext } from "../context/Context";
import { Button } from ".";
import { useNavigate } from "react-router-dom";

const SearchFilter = () => {
  const navigate = useNavigate();
  const { setToogleSearch, filterSearch, setFilterSearch } = useGlobalContext();
  const handleBack = () => setToogleSearch((prev: boolean) => !prev);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/search/${filterSearch}`);
    setFilterSearch("");
  };

  return (
    <form onSubmit={handleSubmit} className="fixed top-0 z-30 p-3 bg-zinc-800 flex items-center justify-between w-full">
      <Button icon={<MdArrowBack size={25} />} type="button" onClick={handleBack} name="buttonBack" label="buttonBack" />
      <input
        type="text"
        placeholder="Search Movies"
        className="py-2 placeholder:text-white/60 px-4 rounded-lg w-full outline-none shadow-lg tracking-wide hover:bg-white/40 transition__all bg-white/20 mx-5 focus:bg-white focus:text-black focus:placeholder:text-black/60"
        onChange={(e) => setFilterSearch(e.target.value)}
        value={filterSearch}
      />
      <Button icon={<AiOutlineSearch size={25} />} type="submit" name="buttonSearchToogle" label="buttonSearchToogle" />
    </form>
  );
};

export default SearchFilter;
