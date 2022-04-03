import { Button, Text } from '@/components/Elements';

import { useGetFlights } from '../../api/getFlights';
import { FlightListItem } from '../FlightsListItem/FlightListItem';

import { FlightListCard, FlightListContainer } from './FlightList.style';

type FlightListProps = React.ComponentPropsWithoutRef<'ul'>;

export const FlightList: React.FC<FlightListProps> = () => {
  const { data, isLoading } = useGetFlights();

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
    <FlightListCard>
      <FlightListContainer>
        {data?.map((flight) => (
          <li key={flight.uuid}>
            <FlightListItem flight={flight} />
          </li>
        ))}
      </FlightListContainer>
    </FlightListCard>
  );
};
