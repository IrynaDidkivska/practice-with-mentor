import { useEffect, useState } from 'react';
import { ProductList } from './ProductList/ProductList';

import { getApi } from './services/api';
import { Cart } from './Cart/Cart';
import { Modal } from './Modal/Modal';
import { Header } from './Header/Header';
import { EmptyCart } from './EmptyCart/EmptyCart';

export const App = () => {
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(3);
  const [skip, setSkip] = useState(0);
  const [cart, setCart] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

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
      <Header onOpenModal={toggleModal} />

      <ProductList products={products} onAddItem={handleAddItem} />
      <button onClick={onLoadMore}>Load More</button>
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
