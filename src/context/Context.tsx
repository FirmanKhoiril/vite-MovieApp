import { useState, useContext, createContext } from "react";
import { TContext } from "../types/Types";

const StateContext = createContext<TContext>({
  toogleSidebar: false,
  setToogleSidebar: () => {},
});

export const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [toogleSidebar, setToogleSidebar] = useState(false);
  return <StateContext.Provider value={{ toogleSidebar, setToogleSidebar }}>{children}</StateContext.Provider>;
};

export const useGlobalContext = () => useContext(StateContext);
