import { Outlet } from 'react-router-dom';
import { Header, List, Nav, StyledLink } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <div>
      <Header>
        <Nav>
          <List>
            <li>
              <StyledLink to="/">Home</StyledLink>
            </li>
            <li>
              <StyledLink to="/movies">Movies</StyledLink>
            </li>
          </List>
        </Nav>
      </Header>
      <Outlet />
    </div>
  );
};
