import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
body{
    padding: 0;
  margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

p,
h1,
h2,
h3,
h4 {
  padding: 0;
  margin: 0;
}

img {
  display: block;
  max-width: 100%;
  width:100%;
  height: auto;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
a {
  text-decoration: none;
}`;
