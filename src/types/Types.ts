import { ReactElement, SetStateAction } from "react";
export type TContext = {
  toogleSidebar: boolean;
  searchTerm: string;
  popularGenre: string;
  movieModel: boolean;
  genreName: string;
  movieId: number;
  timePopuler: string;
  toogleSearch: boolean;
  filterSearch: string;
  formLogin: any;
  moreActor: boolean;
  setToogleSidebar: React.Dispatch<SetStateAction<boolean>>;
  setSearchTerm: React.Dispatch<SetStateAction<string>>;
  setTimePopuler: React.Dispatch<SetStateAction<string>>;
  setFilterSearch: React.Dispatch<SetStateAction<string>>;
  setMovieModel: React.Dispatch<SetStateAction<boolean>>;
  setFormLogin: React.Dispatch<SetStateAction<any>>;
  setMovieId: React.Dispatch<SetStateAction<number>>;
  setGenreName: React.Dispatch<SetStateAction<string>>;
  setMoreActor: React.Dispatch<SetStateAction<boolean>>;
  setToogleSearch: React.Dispatch<SetStateAction<boolean>>;
  setPopularGenre: React.Dispatch<SetStateAction<string>>;
};

export interface IButton {
  type: string | any;
  onClick?: () => void;
  icon: ReactElement;
  name: string;
  label: string;
}

export type TActor = {
  cast_id: number;
  profile_path: string;
  credit_id: string;
  id: number;
  character: string;
  name: string;
};
export type TTrailer = {
  id: string;
  key: string;
  name: string;
};
export interface IId {
  id: string | number | any;
}

export type TGenre = {
  id: number;
  name: string;
};
export interface IGenre {
  genre: {
    id: number;
    name: string;
  };
}

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
  id: number | any;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  runtime: number;
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
  vote_average: number | any;
};

export type TDetailActor = {
  also_known_as: [string];
  biography?: string;
  birthday: string;
  deathday?: string;
  gender: number;
  homepage: string;
  imdb_id: string;
  known_for_department: string;
  id: number | any;
  place_of_birth: string;
  profile_path: string;
  name: string;
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
    title: string;
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
