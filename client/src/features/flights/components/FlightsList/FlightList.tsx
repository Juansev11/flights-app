import { useMemo } from 'react';

import { Button, Text } from '@/components/Elements';
import useDebounce from '@/hooks/useDebounce';
import useStore, { StoreState } from '@/store/useStore';
import { filterPlainArray } from '@/utils/filter';

import { useGetFlights } from '../../api/getFlights';
import { Flight } from '../../types/Flight';
import { FlightListItem } from '../FlightsListItem/FlightListItem';

import { FlightListCard, FlightListContainer } from './FlightList.style';

type FlightListProps = React.ComponentPropsWithoutRef<'ul'>;

const originSelector = (state: StoreState) => state.origin;
const destinationSelector = (state: StoreState) => state.destination;

export const FlightList: React.FC<FlightListProps> = () => {
  const { data, isLoading } = useGetFlights();
  const origin = useStore(originSelector);
  const destination = useStore(destinationSelector);

  const debouncedOrigin = useDebounce(origin, 300);
  const debouncedDestination = useDebounce(destination, 300);

  /**
   * Filters flight based on selections. The function filterPlainArray filters using array keys, so we need to set
   * our keys origin and destination as single element arrays
   */
  const filteredFlights = useMemo(() => {
    if (data) {
      const filters = {
        origin: debouncedOrigin ? [debouncedOrigin] : [],
        destination: debouncedDestination ? [debouncedDestination] : [],
      };
      const flights = filterPlainArray<Flight>(data, filters);
      return flights;
    }
  }, [data, debouncedOrigin, debouncedDestination]);

  if (isLoading) {
    return (
      <Text data-testid="loading" variant="lg" weight="bold">
        Loading...
      </Text>
    );
  }

  if (!isLoading && !data) {
    return (
      <>
        <Text variant="lg" weight="bold">
          There seems to be an error, please try again.
        </Text>
        <Button onClick={() => window.location.reload()}>Retry</Button>
      </>
    );
  }

  return (
    <>
      {filteredFlights?.length ? (
        <FlightListCard>
          <FlightListContainer>
            {filteredFlights.map((flight, index) => (
              <li key={flight.uuid}>
                <FlightListItem flight={flight} index={index} />
              </li>
            ))}
          </FlightListContainer>
        </FlightListCard>
      ) : (
        <Text variant="lg" weight="bold">
          No flights found for this combination of origin and destination
        </Text>
      )}
    </>
  );
};
