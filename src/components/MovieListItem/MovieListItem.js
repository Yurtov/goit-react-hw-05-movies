import { Link, useLocation } from 'react-router-dom';
import { NameMovie } from './MovieListItem.styled';

export const MovieListItem = ({ movie }) => {
  const location = useLocation();
  const index = movie.release_date.indexOf('-');
  const yearRelese = movie.release_date.slice(0, index);

  return (
    <div key={movie.id}>
      <Link to={`/movies/${movie.id}`} state={{ from: location }}>
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt="movie poster"
            loading="lazy"
          />
        ) : (
          <img
            src={'https://via.placeholder.com/250x375'}
            alt="movie poster"
            loading="lazy"
          />
        )}

        <NameMovie>
          {movie.title} ({yearRelese})
        </NameMovie>
      </Link>
    </div>
  );
};
