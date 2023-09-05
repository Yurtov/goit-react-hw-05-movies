import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { fetchTrendingMovies } from 'api/api';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Spiner } from 'components/Spinner/Spiner';
import { TitleHome } from 'components/TitleHome/TitleHome';

const Home = () => {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getTrendingMovies() {
      try {
        setLoading(true);
        const { results } = await fetchTrendingMovies();
        setMovies(results);
      } catch (error) {
        toast.error(`Oops, ${error}. Please try again.`);
      } finally {
        setLoading(false);
      }
    }
    getTrendingMovies();
  }, []);

  return (
    <div>
      <TitleHome />
      {loading && <Spiner />}
      {movies && <MoviesList movies={movies} />}
      <Toaster />
    </div>
  );
};

export default Home;
