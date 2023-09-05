import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { nanoid } from 'nanoid';
import toast, { Toaster } from 'react-hot-toast';
import { fetchSearchMovies } from 'api/api';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { SeacrhForm } from 'components/SearchForm/SearchForm';
import { Spiner } from 'components/Spinner/Spiner';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const movieQuery = searchParams.get('query');
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (searchParams.size === 0) return;

    async function getMovies() {
      if (movieQuery === '') {
        // setSearchParams({});
        return toast.error(
          'You cannot send an empty request, please write something'
        );
      }

      try {
        setLoading(true);
        const { results, total_results } = await fetchSearchMovies(
          page,
          movieQuery
        );

        if (total_results === 0 || results === []) {
          return toast.error('Didnt find it, try again');
        }

        setMovies(
          page === 1 ? results : prevState => [...prevState, ...results]
        );
        setTotal(total_results);
      } catch (error) {
        toast.error(`Oops, ${error}. Please try again.`);
      } finally {
        setLoading(false);
      }
    }
    getMovies();
  }, [query, page, total, searchParams.size, movieQuery]);

  const heandleSubmit = e => {
    e.preventDefault();
    const newQuery = e.target.elements.query.value.trim();
    const reqId = nanoid();
    setQuery(`${reqId}/${newQuery}`);
    setSearchParams({ query: `${newQuery}` });
    setMovies([]);
    setPage(1);
  };

  return (
    <div>
      <SeacrhForm onSubmit={heandleSubmit} movieQuery={movieQuery} />
      {loading && <Spiner />}
      {movies && <MoviesList movies={movies} />}
      <Toaster />
    </div>
  );
};

export default Movies;
