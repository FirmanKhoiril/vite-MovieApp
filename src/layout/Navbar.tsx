import { SearchBar } from "../components";

const Navbar = () => {
  return (
    <nav className="p-6 bg-primary sticky top-0 z-20 flex items-center justify-around shadow-xl">
      {/* Dark light mode */}test
      <div>
        <SearchBar />
      </div>
    </nav>
  );
};

export default Navbar;
