import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  width: 100%;
  background: #efefef;
  font-size: 20px;
  font-weight: 600;
  border-bottom: 1px solid #000;
  box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);
`;

export const Nav = styled.nav`
  margin: 0 auto;
  padding: 15px 0;
  width: 1000px;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const StyledLink = styled(NavLink)`
  color: #000;

  &.active {
    color: orange;
  }
`;
