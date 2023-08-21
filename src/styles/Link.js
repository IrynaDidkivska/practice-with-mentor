import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 700;
  color: #4083d4;
  transition: all 300ms ease-in-out;
  &:hover {
    color: #ff8600;
  }
`;
