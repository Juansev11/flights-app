import create from 'zustand';

import { createFlightsSlice } from '@/features/flights/stores/createFlightsSlice';
import { FlightsSlice } from '@/features/flights/types/Flight';

export type StoreState = FlightsSlice;

const useStore = create<StoreState>((set) => ({
  ...createFlightsSlice(set),
}));

export default useStore;
