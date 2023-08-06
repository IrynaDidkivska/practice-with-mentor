import { CartItem } from 'components/CartItem/CartItem';
import React from 'react';

export const Cart = ({ cart }) => {
  return (
    <div>
      <ul>
        {cart.map(item => (
          <CartItem key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
};
