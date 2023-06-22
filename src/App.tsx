import { Routes, Route } from "react-router-dom";
import { Actor, Detail, Home, Search } from "./pages";
import { Navbar, Sidebar } from "./layout";
import { useGlobalContext } from "./context/Context";
import { BlackScreen, MovieModel } from "./components";
const App = () => {
  const { toogleSidebar, movieModel, setMovieModel, setToogleSidebar } = useGlobalContext();

  const handleSidebar = () => setToogleSidebar((prev: boolean) => !prev);
  const handleModel = () => setMovieModel((prev: boolean) => !prev);
  return (
    <header className="relative  bg-zinc-900  text-white">
      <Navbar />
      {toogleSidebar && (
        <>
          <BlackScreen onClick={handleSidebar} />
          <Sidebar />
        </>
      )}
      {movieModel && (
        <>
          <MovieModel />
          <BlackScreen onClick={handleModel} />
        </>
      )}

      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Detail />} path="/movie/:id" />
        <Route element={<Actor />} path="/actor/:id" />
        <Route element={<Search />} path="/search/:id" />
      </Routes>
    </header>
  );
};

export default App;
