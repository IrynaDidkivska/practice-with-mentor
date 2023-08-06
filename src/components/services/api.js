import axios from 'axios';
axios.defaults.baseURL = 'https://dummyjson.com/';
export const fetchAllProducts = async params => {
  const { data } = await axios.get('products', {
    params: { skip: 0, limit: 6, ...params },
  });
  return data;
};

export const fetchProductsByQuery = async params => {
  const { data } = await axios.get('products/search', {
    params: { skip: 0, limit: 6, ...params },
  });
  return data;
};
