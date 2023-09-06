import { Routes, Route, Navigate } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const SelectedMovie = lazy(() => import('../pages/SelectedMovie'));
const CastMovie = lazy(() => import('../components/CastMovie/CastMovie'));
const ReviewsMovie = lazy(() =>
  import('../components/ReviewsMovie/ReviewsMovie')
);

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<SelectedMovie />}>
          <Route path="cast" element={<CastMovie />} />
          <Route path="reviews" element={<ReviewsMovie />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
