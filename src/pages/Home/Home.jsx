import React from 'react';

import { StyledWrapper } from './Home.styled';
import { ProductList } from 'components/ProductList/ProductList';
import { Header } from 'components/Header/Header';

export const Home = () => {
  return (
    <>
      <Header />
      <StyledWrapper>
        <ProductList />
      </StyledWrapper>
    </>
  );
};
