import { Routes, Route } from "react-router-dom";
import { Detail, Home, Search } from "./pages";
import { Navbar, Sidebar } from "./layout";
import { useGlobalContext } from "./context/Context";
import { BlackScreen } from "./components";
const App = () => {
  const { toogleSidebar } = useGlobalContext();
  return (
    <header className="relative bg-zinc-900 text-white">
      <Navbar />
      {toogleSidebar && (
        <>
          <BlackScreen />
          <Sidebar />
        </>
      )}

      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Detail />} path="/movie/:id" />
        <Route element={<Search />} path="/search/:id" />
      </Routes>
    </header>
  );
};

export default App;
