import { Text } from '@/components/Elements';
import { ContentLayout } from '@/components/Layout';

type FlightsProps = React.ComponentPropsWithoutRef<typeof ContentLayout>;

export const Flights: React.FC<FlightsProps> = () => {
  return (
    <ContentLayout>
      <Text as="h1" variant="xl">
        Flightlogger
      </Text>
    </ContentLayout>
  );
};
