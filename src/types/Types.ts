import { SetStateAction } from "react";

export type TContext = {
  toogleSidebar: boolean;
  setToogleSidebar: React.Dispatch<SetStateAction<boolean>>;
};

export interface ICardDetail {
  movie: {
    adult: boolean;
    backdrop_path: string;
    id: number;
    original_language: string;
    original_title: string;
    release_date: string;
    vote_average: number;
    poster_path: string;
    popularity: number;
  };
}
export interface IHeroBanner {
  hero: {
    adult: boolean;
    backdrop_path: string;
    id: number;
    original_language: string;
    original_title: string;
    release_date: string;
    vote_average: number;
    poster_path: string;
    popularity: number;
  };
}

export type TCardDetail = {
  adult: boolean;
  backdrop_path: string;
  id: number;
  overview: string;
  title: string;
  original_language: string;
  original_title: string;
  release_date: string;
  vote_average: number;
  poster_path: string;
  popularity: number;
};
