import { Text } from '@/components/Elements';
import { ContentLayout } from '@/components/Layout';

import { FlightList } from '../components/FlightsList/FlightList';

type FlightsProps = React.ComponentPropsWithoutRef<typeof ContentLayout>;

export const Flights: React.FC<FlightsProps> = () => {
  return (
    <ContentLayout>
      <Text as="h1" variant="xl" weight="extraBold">
        FlightLogger
      </Text>
      <FlightList />
    </ContentLayout>
  );
};
