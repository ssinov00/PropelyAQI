import { useQuery } from 'react-query';
import { BASE_URL } from './helpers';

export const useGetData = (path: string) => {
  return useQuery(path, async () => {
    const response = await fetch(`${BASE_URL}${path}`);
    const data = await response.json();
    return data;
  });
};