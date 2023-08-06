import axios from 'axios';
export const getApi = async params => {
  const { data } = await axios.get('https://dummyjson.com/products', {
    params: { skip: 0, limit: 6, ...params },
  });
  return data;
};
