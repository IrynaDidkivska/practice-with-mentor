import React from 'react';
import {
  SearchFormButton,
  SearchIcon,
  StyledSearchForm,
  StyledSearchFormInput,
} from './SearchForm.styled';
import { useDispatch } from 'react-redux';

export const SearchForm = () => {
  const dispatch = useDispatch();
  const handleSearchForm = e => {
    e.preventDefault();
  };

  return (
    <StyledSearchForm onSubmit={handleSearchForm}>
      <StyledSearchFormInput
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Enter your query"
      />
      <SearchFormButton>
        <SearchIcon />
      </SearchFormButton>
    </StyledSearchForm>
  );
};
