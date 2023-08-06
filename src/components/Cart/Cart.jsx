import { CartItem } from 'components/CartItem/CartItem';
import React from 'react';

export const Cart = ({ cart, onDelete }) => {
  return (
    <div>
      <ul>
        {cart.map(item => (
          <CartItem
            key={item.id}
            {...item}
            onDelete={() => onDelete(item.id)}
          />
        ))}
      </ul>
    </div>
  );
};
