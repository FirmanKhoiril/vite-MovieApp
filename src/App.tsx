import { Routes, Route } from "react-router-dom";
import { Actor, Contact, Detail, Home, Search } from "./pages";
import { Navbar, Sidebar } from "./layout";
import { MovieModel, SearchFilter } from "./components";

const App = () => {
  return (
    <header className="relative  bg-zinc-900  text-white">
      <SearchFilter />
      <Navbar />
      <Sidebar />
      <MovieModel />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Detail />} path="/movie/:id" />
        <Route element={<Actor />} path="/actor/:id" />
        <Route element={<Search />} path="/search/:id" />
        <Route element={<Contact />} path="/login" />
      </Routes>
    </header>
  );
};

export default App;
