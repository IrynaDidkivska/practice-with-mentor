import { useEffect, useState } from 'react';
import { ProductList } from './ProductList/ProductList';

import { getApi } from './services/api';
import { Cart } from './Cart/Cart';

export const App = () => {
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(3);
  const [skip, setSkip] = useState(0);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const { products } = await getApi({ limit, skip });
        setProducts(prev => [...prev, ...products]);
        console.log(products);
      } catch (error) {}
    };
    fetchItems();
  }, [limit, skip]);

  const onLoadMore = () => {
    setSkip(prev => prev + limit);
  };

  return (
    <div>
      <Cart cart={cart} />
      <ProductList products={products} />
      <button onClick={onLoadMore}>Load More</button>
    </div>
  );
};
