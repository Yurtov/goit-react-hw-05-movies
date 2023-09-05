import { Routes, Route, Navigate } from 'react-router-dom';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import SelectedMovie from 'pages/SelectedMovie';
import { CastMovie } from './CastMovie/CastMovie';
import { ReviewsMovie } from './ReviewsMovie/ReviewsMovie';
import { SharedLayout } from './SharedLayout/SharedLayout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<SelectedMovie />}>
          <Route path="cast" element={<CastMovie />} />
          <Route path="reviews" element={<ReviewsMovie />} />
          <Route path="*" element={<Navigate to="/movies" replace />} />
        </Route>
        <Route path="*" element={<Navigate to="/movies" replace />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
