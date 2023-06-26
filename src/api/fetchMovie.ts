import axios from "axios";
import { TDetail, TDetailActor } from "../types/Types";

const options = {
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_APP_TMDB_API_ACCEST_TOKEN}`,
  },
};

const BASE_URL = "https://api.themoviedb.org/3";

const fetchMovie = async (url: string) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};

export const getMovies = async (genre: string): Promise<any> => {
  const res = await fetchMovie(`${genre}&api_key=${import.meta.env.VITE_APP_TMDB_API_KEY}`);
  return res;
};

export const getSearchMovies = async (pageParams?: string, search?: string) => {
  const res = await fetchMovie(`search/movie?include_adult=false&language=en-US&page=${pageParams}&query=${search}&api_key=${import.meta.env.VITE_APP_TMDB_API_KEY}`);
  return res;
};

export const detailMovies = async (id?: string): Promise<TDetail> => {
  const res = await fetchMovie(`movie/${id}?language=en-US&api_key=${import.meta.env.VITE_APP_TMDB_API_KEY}`);

  return res;
};

export const getNowPlaying = async (timePopuler?: string, pageParam?: number): Promise<any> => {
  const res = await fetchMovie(`trending/movie/${timePopuler}?language=en-US&api_key=${import.meta.env.VITE_APP_TMDB_API_KEY}&page=${pageParam}`);
  return res;
};
export const getActorMovie = async (id?: string): Promise<any> => {
  const res = await fetchMovie(`movie/${id}/credits?api_key=${import.meta.env.VITE_APP_TMDB_API_KEY}&language=en-US`);
  return res;
};
export const getRelatedMovies = async (id?: string): Promise<any> => {
  const res = await fetchMovie(`movie/${id}/similar?language=en-US&page=1&api_key=${import.meta.env.VITE_APP_TMDB_API_KEY}`);
  return res;
};

export const getDetailActor = async (id?: string): Promise<TDetailActor> => {
  const res = await fetchMovie(`person/${id}?language=en-US&api_key=${import.meta.env.VITE_APP_TMDB_API_KEY}`);
  return res;
};

export const getRelatedActorPlay = async (id?: string): Promise<any> => {
  const res = await fetchMovie(`/person/${id}/movie_credits?language=en-US&api_key=${import.meta.env.VITE_APP_TMDB_API_KEY}`);
  return res;
};

export const getTrailerMovieBackground = async (id?: number): Promise<any> => {
  const res = await fetchMovie(`movie/${id}/videos?api_key=${import.meta.env.VITE_APP_TMDB_API_KEY}&language=en-US`);
  return res;
};
