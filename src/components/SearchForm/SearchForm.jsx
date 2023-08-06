import React, { useState } from 'react';

export const SearchForm = ({ onSetQuery }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = event => {
    setQuery(event.target.value);
  };
  const handleSubmitForm = e => {
    e.preventDefault();
    onSetQuery(query);
  };
  return (
    <form onSubmit={handleSubmitForm}>
      <input type="text" value={query} onChange={handleInputChange} />
      <button>Search</button>
    </form>
  );
};
