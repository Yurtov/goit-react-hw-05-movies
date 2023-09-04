import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { fetchCastMovie } from 'api/api';

export const CastMovie = () => {
  const { movieId } = useParams();
  const [casts, setCasts] = useState(null);

  useEffect(() => {
    async function getCastMovies() {
      try {
        const { cast } = await fetchCastMovie(movieId);
        setCasts(cast);
      } catch (error) {
        toast.error(`Oops, ${error}. Please try again.`);
      }
    }
    getCastMovies();
  }, [movieId]);

  return (
    <div>
      {casts && (
        <ul>
          {casts.map(cast => (
            <li key={cast.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`}
                alt="actor foto"
                loading="lazy"
              />
              <p>{cast.name}</p>
              <p>Character: {cast.character}</p>
            </li>
          ))}
        </ul>
      )}
      <Toaster />
    </div>
  );
};
