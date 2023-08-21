import { CartItem } from 'components/CartItem/CartItem';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCartThunk, removeCartThunk } from 'redux/operators';
import { selectCart } from 'redux/selectors';

export const Cart = () => {
  const dispatch = useDispatch();

  const cart = useSelector(selectCart);
  useEffect(() => {
    dispatch(fetchCartThunk());
  }, [dispatch]);

  return (
    <div>
      <Link to="/">Back</Link>
      <ul>
        {cart.map(item => (
          <CartItem
            key={item.id}
            {...item}
            onDelete={() => {
              dispatch(removeCartThunk(item.id));
            }}
          />
        ))}
      </ul>
    </div>
  );
};
