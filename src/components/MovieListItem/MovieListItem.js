import { Link, useLocation } from 'react-router-dom';
import { NameMovie } from './MovieListItem.styled';

export const MovieListItem = ({ movie }) => {
  const location = useLocation();
  const index = movie.release_date.indexOf('-');
  const yearRelese = movie.release_date.slice(0, index);
  return (
    <div key={movie.id}>
      <Link to={`/movies/${movie.id}`} state={{ from: location }}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt="movie poster"
        />
        <NameMovie>
          {movie.title} ({yearRelese})
        </NameMovie>
      </Link>
    </div>
  );
};
