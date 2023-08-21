import { ProductCard } from 'components/ProductCard/ProductCard';
import React, { useEffect } from 'react';
import { selectItems } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProducts } from 'redux/operators';

export const ProductList = () => {
  const products = useSelector(selectItems);

  return (
    <div>
      <ul>
        {products.map(product => (
          <ProductCard {...product} key={product.id} />
        ))}
      </ul>
    </div>
  );
};
