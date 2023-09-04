import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  width: 1050px;
  margin: 0 auto;
  padding: 0 10px;
`;

export const SubTitle = styled.h3`
  margin-top: 20px;
`;

export const List = styled.ul`
  margin-top: 10px;
  display: flex;
  gap: 15px;
`;


export const StyledLink = styled(NavLink)`
  border: 1px solid #000;
  border-radius: 15px;
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  padding: 5px 10px;
  &:hover,
  :focus {
    background-color: orange;
  }
  &.active {
    background-color: orange;
  }
`;
