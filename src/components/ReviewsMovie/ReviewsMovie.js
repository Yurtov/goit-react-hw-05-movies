import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { fetchReviewsMovie } from 'api/api';

export const ReviewsMovie = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [total, setTotal] = useState(null);

  useEffect(() => {
    async function getReviewsMovies() {
      try {
        const { results, total_results } = await fetchReviewsMovie(movieId);
        setReviews(results);
        setTotal(total_results);
      } catch (error) {
        toast.error(`Oops, ${error}. Please try again.`);
      }
    }
    getReviewsMovies();
  }, [movieId]);
  return (
    <div>
      {reviews &&
        (total !== 0 ? (
          <ul>
            {reviews.map(review => (
              <li key={review.id}>
                <p>Author: {review.author}</p>
                <p>'{review.content}'</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>We don't have any reviews for this movie</p>
        ))}
      <Toaster />
    </div>
  );
};
