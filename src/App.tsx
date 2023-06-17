import { Routes, Route } from "react-router-dom";
import { Detail, Home } from "./pages";
import { Navbar, Sidebar } from "./layout";
function App() {
  return (
    <header className="relative">
      <Navbar />
      <Sidebar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Detail />} path="/movie/:id" />
      </Routes>
    </header>
  );
}

export default App;
