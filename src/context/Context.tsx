import { useState, useContext, createContext } from "react";
import { TContext } from "../types/Types";

const StateContext = createContext<TContext>({
  toogleSidebar: false,
  searchTerm: "",
  setToogleSidebar: () => {},
  setPopularGenre: () => {},
  popularGenre: "",
  setMovieId: () => {},
  movieId: 0,
  setSearchTerm: () => {},
  setMoreActor: () => {},
  moreActor: false,
  setMovieModel: () => {},
  movieModel: false,
  setGenreName: () => {},
  genreName: "",
  setTimePopuler: () => {},
  timePopuler: "",
});

export const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [toogleSidebar, setToogleSidebar] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [movieModel, setMovieModel] = useState(false);
  const [movieId, setMovieId] = useState(0);
  const [timePopuler, setTimePopuler] = useState("day");
  const [genreName, setGenreName] = useState("Populer");
  const [moreActor, setMoreActor] = useState(false);
  const [popularGenre, setPopularGenre] = useState("movie/popular?language=en-US");
  return (
    <StateContext.Provider
      value={{ toogleSidebar, timePopuler, setTimePopuler, genreName, moreActor, setMoreActor, setGenreName, movieModel, setMovieModel, popularGenre, movieId, setMovieId, setPopularGenre, searchTerm, setSearchTerm, setToogleSidebar }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useGlobalContext = () => useContext(StateContext);
