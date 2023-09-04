import styled from 'styled-components';

export const Container = styled.div`
  width: 1050px;
  margin: 0 auto;
  padding: 0 10px;
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  border: 1px solid #000;
  border-radius: 15px;
  width: 100px;
  margin: 10px 0;
  font-size: 16px;
  font-weight: 500;
  &:hover,
  :focus {
    background-color: orange;
  }
`;
