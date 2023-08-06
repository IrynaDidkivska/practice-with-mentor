import { ProductCard } from 'components/ProductCard/ProductCard';
import React from 'react';

export const ProductList = ({ products }) => {
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
