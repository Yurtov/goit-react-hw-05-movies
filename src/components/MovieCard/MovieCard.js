import {
  CardContainer,
  Container,
  Genres,
  GenresList,
  MovieInfo,
  NameMovie,
  Subtitle,
} from './MovieCard.style';

export const MovieCard = ({ movie }) => {
  const index = movie.release_date.indexOf('-');
  const yearRelese = movie.release_date.slice(0, index);
  const genres = movie.genres;
  return (
    <Container>
      <NameMovie>
        {movie.original_title} ({yearRelese})
      </NameMovie>
      <CardContainer>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt="movie poster"
          loading="lazy"
          width={250}
        />
        <MovieInfo>
          <li>
            <p><Subtitle>Release date:</Subtitle> {movie.release_date}</p>
          </li>
          <li>
            <Genres>
              <Subtitle>Genres:</Subtitle>
              <GenresList>
                {genres.map(genre => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
              </GenresList>
            </Genres>
          </li>
          <li>
            <p><Subtitle>Runtime:</Subtitle> {movie.runtime} min.</p>
          </li>
          <li>
            <p><Subtitle>Tagline:</Subtitle> {movie.tagline}</p>
          </li>
          <li>
            <p><Subtitle>Overview:</Subtitle> {movie.overview}</p>
          </li>
        </MovieInfo>
      </CardContainer>
    </Container>
  );
};
