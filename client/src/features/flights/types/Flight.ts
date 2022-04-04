import { Currency } from '@/utils/format';

export type Flight = {
  origin: string;
  destination: string;
  departureDate: string;
  returnDate: string;
  seatAvailability: number;
  price: {
    amount: number;
    currency: Currency;
  };
  uuid: string;
};

export type FlightsSlice = {
  origin: string;
  destination: string;
  setValueByKey: (key: string, city: string) => void;
};
