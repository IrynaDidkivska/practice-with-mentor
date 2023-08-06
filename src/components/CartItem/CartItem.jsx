import React from 'react';

export const CartItem = ({ id, title, price, thumbnail }) => {
  return (
    <div>
      <li>
        <img src={thumbnail} alt={title} />
        <h2>{title}</h2>
        <p>{price}</p>
        <button>Delete</button>
      </li>
    </div>
  );
};
