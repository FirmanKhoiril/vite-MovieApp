import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context/Context";

const SearchBar = () => {
  const { searchTerm, setSearchTerm } = useGlobalContext();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
    setSearchTerm("");
  };
  return (
    <form className=" relative" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search Movies"
        className="outline-none placeholder:text-black/40 rounded-full focus:placeholder:text-black/70 peer tracking-wide bg-white text-black shadow-xl focus:bg-white transition__all py-2 px-4 min-w-[280px] md:min-w-[400px] lg:min-w-[600px]"
        value={searchTerm}
        required
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        type="submit"
        name="search"
        aria-label="search"
        className="py-[8px] px-4 absolute right-0 top-0 bg-white text-white transition__all bg-gradient-to-r from-red-500 via-red-400 to-pink-400 peer-focus:bg-white/5 rounded-full tracking-wide"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
