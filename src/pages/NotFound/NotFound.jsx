import React from 'react';
import { BiHomeAlt2 } from 'react-icons/bi';
import { GoBack } from './NotFound.styled';

export const NotFound = () => {
  return (
    <div>
      <GoBack to="/">
        Home
        <BiHomeAlt2 />
      </GoBack>
      <img
        src="https://internetdevels.com/sites/default/files/public/blog_preview/404_page_cover.jpg"
        alt="Error 404 page"
      />
    </div>
  );
};
