import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { ThreeDots } from 'react-loader-spinner';
import { fetchReviewsMovie } from 'api/api';
import { SubTitle, List, Text, AltText } from './ReviewsMovie.styled';

const ReviewsMovie = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [total, setTotal] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getReviewsMovies() {
      try {
        setLoading(true);
        const { results, total_results } = await fetchReviewsMovie(movieId);
        setReviews(results);
        setTotal(total_results);
      } catch (error) {
        toast.error(`Oops, ${error}. Please try again.`);
      } finally {
        setLoading(false);
      }
    }
    getReviewsMovies();
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
      {reviews &&
        (total !== 0 ? (
          <List>
            {reviews.map(review => (
              <li key={review.id}>
                <SubTitle>Author: {review.author}</SubTitle>
                <Text>'{review.content}'</Text>
              </li>
            ))}
          </List>
        ) : (
          <AltText>We don't have any reviews for this movie</AltText>
        ))}
      <Toaster />
    </div>
  );
};

export default ReviewsMovie;