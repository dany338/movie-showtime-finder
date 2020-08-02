export const API_HOST_MOVIES = 'https://api.themoviedb.org/3';
export const API_KEY = 'ae7344573bc3f90c91531474d477611e';
export const LANG = 'es-ES';
export const BASE_PATH_IMG = 'https://image.tmdb.org/t/p';
export const GENRE_DEFAULT_SELECTED = 28; // Action genre
export const URL_YOUTUBE_VIDEO = 'https://www.youtube.com/embed/';
export const API_HOST_BACKEND = 'https://www.historiaclinicaduo.com/movieshowtime/api/web/v1'; // /preinscripcions/create?access-token=
export const BASE_FONT_SIZE = 12;
export const isValidEmail = email => {
  const re = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  return re.exec(email);
};
