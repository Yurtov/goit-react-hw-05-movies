import { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { nanoid } from 'nanoid';
import toast, { Toaster } from 'react-hot-toast';
import { fetchSearchMovies } from 'api/api';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const movieQuery = searchParams.get('query');
  const location = useLocation();
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (searchParams.size === 0) return;

    async function getMovies() {
      if (movieQuery === '') {
        setSearchParams({});
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
  }, [query, page, total]);

  const heandleSubmit = e => {
    e.preventDefault();
    const newQuery = e.target.elements.query.value.trim();
    const reqId = nanoid();
    setQuery(`${reqId}/${newQuery}`);
    setSearchParams({ query: `${newQuery}` });
    setMovies([]);
    setPage(1);
    e.target.reset();
  };

  return (
    <div>
      <form onSubmit={heandleSubmit}>
        <input
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <button type="submit">Search</button>
      </form>

      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>

      <Toaster />
    </div>
  );
};

export default Movies;
