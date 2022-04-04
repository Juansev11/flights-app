import { ContentLayout } from '@/components/Layout';

import { FlightsFilters } from '../components/FlightFilters/FlightFilters';
import { FlightList } from '../components/FlightsList/FlightList';

import { FlightsContainer } from './Flights.styles';

type FlightsProps = React.ComponentPropsWithoutRef<typeof ContentLayout>;

export const Flights: React.FC<FlightsProps> = () => {
  return (
    <FlightsContainer>
      <FlightsFilters />
      <FlightList />
    </FlightsContainer>
  );
};
