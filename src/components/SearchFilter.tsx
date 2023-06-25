import { MdArrowBack } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { useGlobalContext } from "../context/Context";
import { BlackScreen, Button } from ".";
import { useNavigate } from "react-router-dom";

const SearchFilter = () => {
  const navigate = useNavigate();
  const { setToogleSearch, filterSearch, setFilterSearch, toogleSearch } = useGlobalContext();
  const handleBack = () => setToogleSearch((prev: boolean) => !prev);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/search/${filterSearch}`);
    setFilterSearch("");
    setToogleSearch((prev: boolean) => !prev);
  };
  const handleSearch = () => setToogleSearch((prev: boolean) => !prev);

  return (
    <>
      <form onSubmit={handleSubmit} className={`fixed top-0 z-30 p-3 bg-zinc-800 flex items-center transition__all justify-between w-full ${toogleSearch ? "translate-y-[0%]" : " translate-y-[-100%]"}`}>
        <Button icon={<MdArrowBack size={25} />} type="button" onClick={handleBack} name="buttonBack" label="buttonBack" />
        <input
          type="text"
          placeholder="Search Movies"
          className="py-2 placeholder:text-white/60 px-4 rounded-full w-full outline-none shadow-lg tracking-wide hover:bg-white/40 transition__all bg-white/20 mx-2 focus:bg-white focus:text-black focus:placeholder:text-black/60"
          onChange={(e) => setFilterSearch(e.target.value)}
          value={filterSearch}
          required
        />
        <Button icon={<AiOutlineSearch size={25} />} type="submit" name="buttonSearchToogle" label="buttonSearchToogle" />
      </form>
      {toogleSearch && <BlackScreen onClick={handleSearch} />}
    </>
  );
};

export default SearchFilter;
