import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.headers.common['Authorization'] =
  'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNzkyZGRjZDY0Y2Q1YzFlOTQ4NDhiODE3OGFjZjNmNyIsInN1YiI6IjY0ZjI0ODU3NWYyYjhkMDBhYmM5YzYzMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RjHZG0nm_SvGYBgxulpG0lDE4BQDW-1ee24-kukqTQo';

export const fetchTrendingMovies = async () => {
  const response = await axios.get('/trending/movie/day');
  return response.data;
};

export const fetchMoviesById = async id => {
  const response = await axios.get(`/movie/${id}`);
  return response.data;
};

export const fetchSearchMovies = async (page, query) => {
  const response = await axios.get(`/search/movie`, {
    params: {
      include_adult: false,
      query: query,
      page: page,
    },
  });
  return response.data;
};

export const fetchCastMovie = async id => {
  const response = await axios.get(`/movie/${id}/credits`);
  return response.data;
};

export const fetchReviewsMovie = async id => {
  const response = await axios.get(`/movie/${id}/reviews`);
  return response.data;
};
