import { SearchForm } from 'components/SearchForm/SearchForm';
import React from 'react';

export const Header = ({ onOpenModal, onSetQuery }) => {
  return (
    <div>
      <header>
        <h1>Store</h1>
        <SearchForm onSetQuery={onSetQuery} />
        <button onClick={onOpenModal}>Cart</button>
      </header>
    </div>
  );
};
