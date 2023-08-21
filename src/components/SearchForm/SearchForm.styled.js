import { styled } from 'styled-components';
import { ImSearch } from 'react-icons/im';
import { Button } from 'styles/Button';

export const StyledSearchForm = styled.form`
  display: flex;
  align-items: center;
  margin: 0 auto;
  margin-top: 10px;
  padding: 3px 5px;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  outline: 1px solid #baaaaa;
  border-radius: 3px;
  overflow: hidden;
`;

export const SearchFormButton = styled(Button)`
  background-color: transparent;
`;

export const StyledSearchFormInput = styled.input`
  display: inline-block;
  width: 100%;
  font-family: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  &::placeholder {
    font-family: inherit;
    font-size: 18px;
  }
`;
export const SearchIcon = styled(ImSearch)`
  width: 1.1em;
  height: 1.1em;
`;
