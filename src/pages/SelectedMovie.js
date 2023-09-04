import { Link, useParams, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { fetchMoviesById } from 'api/api';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { GoBackBtn } from 'components/GoBackBtn/GoBackBtn';
import { AdditionalInfo } from 'components/AdditionalInfo/AdditionalInfo';
import { Spiner } from 'components/Spinner/Spiner';

const SelectedMovie = () => {
  const location = useLocation();
  const backLinkHrefRef = useRef(location.state?.from ?? '/movies');
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getTrendingMovies() {
      try {
        setLoading(true);
        const data = await fetchMoviesById(movieId);
        setMovie(data);
      } catch (error) {
        toast.error(`Oops, ${error}. Please try again.`);
      } finally {
        setLoading(false);
      }
    }
    getTrendingMovies();
  }, [movieId]);

  return (
    <div>
      <Link to={backLinkHrefRef.current}>
        <GoBackBtn />
      </Link>
      {loading && <Spiner />}
      {movie && <MovieCard movie={movie} />}
      <AdditionalInfo />
      <Toaster />
    </div>
  );
};

export default SelectedMovie;
