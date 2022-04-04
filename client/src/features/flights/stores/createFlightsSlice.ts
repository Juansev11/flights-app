import { SetState } from 'zustand';

import { StoreState } from '@/store/useStore';
import { getUrlQueryParams } from '@/utils/queryParams';

export const createFlightsSlice = (set: SetState<StoreState>) => {
  const { origin = '', destination = '' } = getUrlQueryParams();
  return {
    origin,
    destination,
    setValueByKey: (key: string, city: string) => {
      set((state) => ({ ...state, [key]: city }));
    },
  };
};
