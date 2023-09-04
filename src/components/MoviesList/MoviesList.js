import { MovieListItem } from 'components/MovieListItem/MovieListItem';
import { Container, List, Item } from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  return (
    <Container>
      <List>
        {movies.map(movie => (
          <Item key={movie.id}>
            <MovieListItem movie={movie} />
          </Item>
        ))}
      </List>
    </Container>
  );
};
