import { formatCurrency, formatDateFromString } from '@/utils/format';

import { Flight } from '../../types/Flight';
import { FlightRoute } from '../FlightRoute/FlightRoute';

import {
  FlightItemContainer,
  FlightItemContentSeparator,
  FlightPrice,
} from './FlightListItem.styles';

type FlightListItemProps = {
  flight: Flight;
} & React.ComponentPropsWithoutRef<'article'>;

export const FlightListItem: React.FC<FlightListItemProps> = ({ flight }) => {
  const departureDate = formatDateFromString(flight.departureDate);
  const returnDate = formatDateFromString(flight.returnDate);
  const price = formatCurrency(flight.price.amount);

  return (
    <FlightItemContainer>
      <FlightRoute origin={flight.origin} date={departureDate} destination={flight.destination} />
      <FlightItemContentSeparator />
      <FlightRoute origin={flight.destination} date={returnDate} destination={flight.origin} />
      <FlightPrice variant="md" weight="extraBold">
        from {price}
      </FlightPrice>
    </FlightItemContainer>
  );
};
