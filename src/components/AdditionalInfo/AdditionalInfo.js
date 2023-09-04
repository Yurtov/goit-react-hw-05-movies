import { Outlet } from 'react-router-dom';
import { Container, List, StyledLink, SubTitle } from './AdditionalInfo.styled';

export const AdditionalInfo = () => {
  return (
    <Container>
      <SubTitle>Additional information</SubTitle>
      <List>
        <li>
          <StyledLink to={`cast`}>Cast</StyledLink>
        </li>
        <li>
          <StyledLink to={`reviews`}>Reviews</StyledLink>
        </li>
      </List>
      <Outlet />
    </Container>
  );
};
