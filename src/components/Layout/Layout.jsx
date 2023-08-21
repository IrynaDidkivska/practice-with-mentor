import React, { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { StyledOutlet } from './Layout.styled';
import { Loader } from 'components/Loader/Loader';

export const Layout = () => {
  const pages = [
    { title: 'Home', src: '/' },
    { title: 'Form', src: '/form' },
    { title: 'Login', src: '/login' },
    { title: 'Cart', src: '/cart' },
  ];
  return (
    <main>
      <header>
        <nav>
          <ul>
            {pages.map(page => (
              <li key={page.title}>
                <NavLink to={page.src}>{pages.title}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <Suspense fallback={<Loader />}>
        <StyledOutlet>
          <Outlet />
        </StyledOutlet>
      </Suspense>
    </main>
  );
};
