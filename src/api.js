import axios from 'axios'

const api_url = 'https://api.themoviedb.org/3'
const api_key = '912eb08b9205eeff45dbaffd282e9c4e'
const language = 'it-IT'

export function getAPI(url = '', parameters = {}) {
  return axios.get(url, {
    params: {
      ...parameters,
      api_key,
      language,
    }
  })
}

export function getSearchMovie(query, genre) {
  return getAPI(`${api_url}/search/movie`, { query, with_genres: genre })
}

export function getSearchTvSeries(query, genre) {
  return getAPI(`${api_url}/search/tv`, { query, with_genres: genre })
}

export function getMoviePopular(genre) {
  return getAPI(`${api_url}/movie/popular`, { with_genres: genre })
}

export function getTvSeriesPopular(genre) {
  return getAPI(`${api_url}/tv/popular`, { with_genres: genre })
}

export function getGenreMovieList() {
  return getAPI(`${api_url}/genre/movie/list`)
}

export function getGenreTvSeriesList() {
  return getAPI(`${api_url}/genre/tv/list`)
}

export function getMovie(movie_id){
  return getAPI(`${api_url}/movie/${movie_id}`)
}

export function getMovieCredits(movie_id){
  return getAPI(`${api_url}/movie/${movie_id}/credits`)
}