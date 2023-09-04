import { fetchTrendingMovies } from 'api/api';
import { TrendingMovies } from 'components/TrendingMovies/TrendingMovies';
import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (movies === []) return;

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
  }, [movies]);

  return (
    <div>
      <TrendingMovies movies={movies} />
      <Toaster />
    </div>
  );
};

export default Home;
