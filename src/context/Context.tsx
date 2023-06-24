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
  toogleSearch: false,
  setToogleSearch: () => {},
  movieModel: false,
  setGenreName: () => {},
  genreName: "",
  setTimePopuler: () => {},
  filterSearch: "",
  setFilterSearch: () => {},
  timePopuler: "",
  setFormLogin: () => {},
  formLogin: {},
});

const initialForm = {
  name: "",
  email: "",
  password: "",
};

export const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [toogleSidebar, setToogleSidebar] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [movieModel, setMovieModel] = useState(false);
  const [movieId, setMovieId] = useState(0);
  const [formLogin, setFormLogin] = useState(initialForm);
  const [timePopuler, setTimePopuler] = useState("day");
  const [filterSearch, setFilterSearch] = useState("");
  const [toogleSearch, setToogleSearch] = useState(false);
  const [genreName, setGenreName] = useState("Populer");
  const [moreActor, setMoreActor] = useState(false);
  const [popularGenre, setPopularGenre] = useState("movie/popular?language=en-US");
  return (
    <StateContext.Provider
      value={{
        filterSearch,
        formLogin,
        setFormLogin,
        setFilterSearch,
        toogleSidebar,
        toogleSearch,
        setToogleSearch,
        timePopuler,
        setTimePopuler,
        genreName,
        moreActor,
        setMoreActor,
        setGenreName,
        movieModel,
        setMovieModel,
        popularGenre,
        movieId,
        setMovieId,
        setPopularGenre,
        searchTerm,
        setSearchTerm,
        setToogleSidebar,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useGlobalContext = () => useContext(StateContext);
