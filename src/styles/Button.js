import { styled } from 'styled-components';

export const Button = styled.button`
  height: auto;
  margin: 0px auto;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  font-weight: 600;
  transition: all 300ms linear 0s;

  &:hover {
    scale: 1.1;
    background-color: rgb(100, 158, 255);
  }
`;
