import { useEffect, useState } from 'react';
import { ProductList } from './ProductList/ProductList';

import { fetchAllProducts, fetchProductsByQuery } from './services/api';
import { Cart } from './Cart/Cart';
import { Modal } from './Modal/Modal';
import { Header } from './Header/Header';
import { EmptyCart } from './EmptyCart/EmptyCart';

export const App = () => {
  const [products, setProducts] = useState([]);
  const [limit] = useState(3);
  const [skip, setSkip] = useState(0);
  const [cart, setCart] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        setLoading(true);
        const { products } = await fetchAllProducts({ limit, skip });
        setProducts(prev => [...prev, ...products]);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    if (!query) {
      fetchItems();
    }
  }, [limit, query, skip]);

  useEffect(() => {
    const fetchItemsByQuery = async () => {
      try {
        setLoading(true);
        setProducts([]);
        const { products } = await fetchProductsByQuery({ q: query });
        setProducts(prev => [...prev, ...products]);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    if (query) {
      fetchItemsByQuery();
    }
  }, [query, skip]);

  const onLoadMore = () => {
    setSkip(prev => prev + limit);
  };

  const handleAddItem = product => {
    setCart(prev => [...prev, product]);
  };

  const deleteItem = id => {
    setCart(prev => prev.filter(item => item.id !== id));
  };
  const toggleModal = () => {
    setIsOpen(prev => !prev);
  };
  return (
    <div>
      <Header onOpenModal={toggleModal} onSetQuery={setQuery} />
      {error && <h1>{error}</h1>}
      {!loading ? (
        <ProductList products={products} onAddItem={handleAddItem} />
      ) : (
        <h1>Loading...</h1>
      )}
      {!loading && !error && <button onClick={onLoadMore}>Load More</button>}

      {isOpen && (
        <Modal onClose={toggleModal}>
          {cart.length ? (
            <Cart cart={cart} onDelete={deleteItem} />
          ) : (
            <EmptyCart />
          )}
        </Modal>
      )}
    </div>
  );
};
