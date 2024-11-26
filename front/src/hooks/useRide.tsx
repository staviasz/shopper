import { RidesContext } from '@/context/ridesContext';
import { useContext } from 'react';

export const useRide = () => {
  return useContext(RidesContext);
};
