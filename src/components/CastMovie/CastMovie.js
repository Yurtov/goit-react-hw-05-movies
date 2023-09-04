import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { ThreeDots } from 'react-loader-spinner';
import { fetchCastMovie } from 'api/api';
import { Actor, List, NameActor } from './CastMovie.styled';

export const CastMovie = () => {
  const { movieId } = useParams();
  const [casts, setCasts] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getCastMovies() {
      try {
        setLoading(true);
        const { cast } = await fetchCastMovie(movieId);
        setCasts(cast);
      } catch (error) {
        toast.error(`Oops, ${error}. Please try again.`);
      } finally {
        setLoading(false);
      }
    }
    getCastMovies();
  }, [movieId]);

  return (
    <div>
      {loading && (
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="orange"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      )}
      {casts && (
        <List>
          {casts.map(cast => (
            <Actor key={cast.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`}
                alt="actor foto"
                loading="lazy"
              />
              <NameActor>{cast.name}</NameActor>
              <p>Character: {cast.character}</p>
            </Actor>
          ))}
        </List>
      )}
      <Toaster />
    </div>
  );
};
