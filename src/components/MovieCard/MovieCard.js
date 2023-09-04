export const MovieCard = ({ movie }) => {
  const index = movie.release_date.indexOf('-');
  const yearRelese = movie.release_date.slice(0, index);
  const genres = movie.genres;
  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt="movie poster"
        loading="lazy"
      />
      <h1>
        {movie.original_title} ({yearRelese})
      </h1>
      <h2>Overview</h2>
      <p>{movie.overview}</p>
      <h3>Genres</h3>
      <ul>
        {genres.map(genre => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </div>
  );
};
