import React from 'react';

export const Header = ({ onOpenModal }) => {
  return (
    <div>
      <header>
        <h1></h1>
        <button onClick={onOpenModal}>Cart</button>
      </header>
    </div>
  );
};
