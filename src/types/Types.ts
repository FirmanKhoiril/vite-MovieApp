import { SetStateAction } from "react";

export type TContext = {
  toogleSidebar: boolean;
  searchTerm: string;
  popularGenre: string;
  setToogleSidebar: React.Dispatch<SetStateAction<boolean>>;
  setSearchTerm: React.Dispatch<SetStateAction<string>>;
  setPopularGenre: React.Dispatch<SetStateAction<string>>;
};

export type TGenre = {
  id: number;
  name: string;
};

export type TProductionCountry = {
  name: string;
  iso3166_1: string;
};
export type TProductionCompanies = {
  name: string;
  id: number;
  logo_path: string;
  iso3166_1: string;
};

export type TDetail = {
  adult: boolean;
  backdrop_path: string | null;
  belongs_to_collection: {
    id: number;
    name: string;
    poster_path: string;
  };
  genres: [TGenre];
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: [TProductionCompanies];
  production_countries: [TProductionCountry];
  release_date: string | any;
  spoken_languages: [TSpoken];
  status: string;
  tagline: string;
  title: string;
  video: false;
  vote_count: number;
  vote_average: number;
};

export type TSpoken = {
  english_name: string;
  name: string;
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
