import { LoginForm } from 'pages/LoginForm/LoginForm';
import { Home } from 'pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';
import { NotFound } from 'pages/NotFound/NotFound';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchAllProducts } from 'redux/operators';
import { Cart } from 'pages/Cart/Cart';
import { selectLoggedIn } from 'redux/selectors';
import { RegisterForm } from 'pages/RegisterForm/RegisterForm';
import { PrivateRoute } from 'HOC/PrivateRoute';

export const App = () => {
  const dispatch = useDispatch();
  const loggedIn = useSelector(selectLoggedIn);

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />
        <Route path="register" element={<RegisterForm />} />
        <Route path="login" element={<LoginForm />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
