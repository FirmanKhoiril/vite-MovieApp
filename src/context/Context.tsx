import { useState, useContext, createContext } from "react";
import { TContext } from "../types/Types";

const StateContext = createContext<TContext>({
  toogleSidebar: false,
  searchTerm: "",
  setToogleSidebar: () => {},
  setPopularGenre: () => {},
  popularGenre: "",

  setSearchTerm: () => {},
});

export const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [toogleSidebar, setToogleSidebar] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [popularGenre, setPopularGenre] = useState("movie/popular?language=en-US");
  return <StateContext.Provider value={{ toogleSidebar, popularGenre, setPopularGenre, searchTerm, setSearchTerm, setToogleSidebar }}>{children}</StateContext.Provider>;
};

export const useGlobalContext = () => useContext(StateContext);
