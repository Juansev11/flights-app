import useFetch from '@/hooks/useFetch';

import { Flight } from '../types/Flight';

export const useGetFlights = () => {
  return useFetch<Flight>('/flights');
};
