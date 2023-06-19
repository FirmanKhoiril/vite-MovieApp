import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context/Context";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = () => {
  const { searchTerm, setSearchTerm } = useGlobalContext();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
  };
  return (
    <form className="flex items-center" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search Movies"
        className="outline-none placeholder:text-white/70 focus:placeholder:text-black/70 peer tracking-wide bg-white/5 text-black shadow-xl rounded-l-md focus:bg-white transition__all py-2 px-4 min-w-[120px] md:min-w-[300px]"
        value={searchTerm}
        required
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="submit" className="p-[11px] bg-white peer-focus:text-white transition__all peer-focus:bg-white/5 text-black rounded-r-full">
        <AiOutlineSearch className="text-lg" />
      </button>
    </form>
  );
};

export default SearchBar;
