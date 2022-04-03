import { FlightRoute } from '../FlightRoute/FlightRoute';

import {
  FlightItemContainer,
  FlightItemContentSeparator,
  FlightPrice,
} from './FlightListItem.styles';

type FlightListItemProps = React.ComponentPropsWithoutRef<'article'>;

export const FlightListItem: React.FC<FlightListItemProps> = () => {
  return (
    <FlightItemContainer>
      <FlightRoute origin="BOG" date="Mar 25, 2022" destination="MAD" />
      <FlightItemContentSeparator />
      <FlightRoute origin="MAD" date="Apr 25, 2022" destination="BOG" />
      <FlightPrice variant="md" weight="extraBold">
        from € 29.99
      </FlightPrice>
    </FlightItemContainer>
  );
};
