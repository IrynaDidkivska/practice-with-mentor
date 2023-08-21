import { SearchForm } from 'components/SearchForm/SearchForm';
import { BiHomeAlt2 } from 'react-icons/bi';
import React from 'react';
import { Button } from 'styles/Button';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const navigate = useNavigate();

  return (
    <div>
      <header>
        <h1>
          Home <BiHomeAlt2 />
        </h1>
        <SearchForm />
        <Button
          onClick={() => {
            navigate('/cart');
          }}
        >
          Cart
        </Button>
      </header>
    </div>
  );
};
