import axios from "axios";

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

export const getMovies = async (pageParam: string): Promise<any> => {
  const res = await fetchMovie(`/discover/movie?includes_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=${import.meta.env.VITE_APP_TMDB_API_KEY}&page=${pageParam}`);
  return res;
};
