import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { fetchMoviesById } from 'api/api';
import { MovieCard } from 'components/MovieCard/MovieCard';

const SelectedMovie = () => {
  const location = useLocation();
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const backLinkHref = location?.state?.from ?? '/movies';

  useEffect(() => {
    async function getTrendingMovies() {
      try {
        const data = await fetchMoviesById(movieId);
        setMovie(data);
      } catch (error) {
        toast.error(`Oops, ${error}. Please try again.`);
      }
    }
    getTrendingMovies();
  }, [movieId]);

  return (
    <div>
      <Link to={backLinkHref}>Go back</Link>
      {movie && <MovieCard movie={movie} />}
      <div>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to={`cast`}>Cast</Link>
          </li>
          <li>
            <Link to={`reviews`}>Reviews</Link>
          </li>
        </ul>
        <Outlet />
      </div>
      <Toaster />
    </div>
  );
};

export default SelectedMovie;
