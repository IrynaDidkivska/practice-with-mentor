import React from 'react';

export const ProductCard = ({ id, title, price, description, thumbnail }) => {
  return (
    <li>
      <img src={thumbnail} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <div>
        <p>{price}</p>
        <button>Add to cart</button>
      </div>
    </li>
  );
};
