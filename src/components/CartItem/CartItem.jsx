import React from 'react';
import { Button } from 'styles/Button';

export const CartItem = ({ id, title, price, thumbnail, onDelete }) => {
  return (
    <div>
      <li>
        <img src={thumbnail} alt={title} />
        <h2>{title}</h2>
        <p>{price}</p>
        <Button onClick={onDelete}>Delete</Button>
      </li>
    </div>
  );
};
