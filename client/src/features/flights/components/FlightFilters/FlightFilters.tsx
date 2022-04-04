import { useCallback } from 'react';

import { InputField } from '@/components/Form';
import useStore, { StoreState } from '@/store/useStore';
import { appendUrlQueryParam } from '@/utils/queryParams';

import { FlightFiltersContainer } from './FlightFilters.styles';

type FlightsFiltersProps = React.ComponentPropsWithoutRef<'div'>;

const setValueByKeySelector = (state: StoreState) => state.setValueByKey;
const originSelector = (state: StoreState) => state.origin;
const destinationSelector = (state: StoreState) => state.destination;

export const FlightsFilters: React.FC<FlightsFiltersProps> = () => {
  const setValueByKey = useStore(setValueByKeySelector);
  const origin = useStore(originSelector);
  const destination = useStore(destinationSelector);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setValueByKey(name, value);
      appendUrlQueryParam({
        [name]: value,
      });
    },
    [setValueByKey]
  );

  return (
    <FlightFiltersContainer>
      <InputField
        label="Origin"
        id="origin"
        name="origin"
        value={origin}
        onChange={handleInputChange}
      />
      <InputField
        label="Destination"
        id="destination"
        name="destination"
        value={destination}
        onChange={handleInputChange}
      />
    </FlightFiltersContainer>
  );
};
