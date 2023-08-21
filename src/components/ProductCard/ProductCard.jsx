import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addCartThunk } from 'redux/operators';
import { selectLoggedIn } from 'redux/selectors';
import { Button } from 'styles/Button';

export const ProductCard = ({ id, title, description, price, thumbnail }) => {
  const dispatch = useDispatch();
  const loggedIn = useSelector(selectLoggedIn);
  const navigate = useNavigate();

  const onAddItem = () => {
    if (!loggedIn) {
      navigate('/register');
    }
    dispatch(addCartThunk({ id, title, description, price, thumbnail }));
  };
  return (
    <li>
      <img src={thumbnail} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <div>
        <p>{price}</p>
        <Button onClick={onAddItem}>Add to cart</Button>
      </div>
    </li>
  );
};
