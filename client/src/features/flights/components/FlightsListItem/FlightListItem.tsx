import { formatCurrency, formatDateFromString } from '@/utils/format';

import { Flight } from '../../types/Flight';
import { FlightRoute } from '../FlightRoute/FlightRoute';

import {
  FlightItemContainer,
  FlightItemContentSeparator,
  FlightPrice,
  SrOnly,
} from './FlightListItem.styles';

type FlightListItemProps = {
  flight: Flight;
  index: number;
} & React.ComponentPropsWithoutRef<'article'>;

export const FlightListItem: React.FC<FlightListItemProps> = ({ flight, index }) => {
  const departureDate = formatDateFromString(flight.departureDate);
  const returnDate = formatDateFromString(flight.returnDate);
  const price = formatCurrency(flight.price.amount);

  return (
    <>
      <SrOnly>
        <h2>
          Flight option {index}: Cost {price}
        </h2>
        <ol>
          <li>
            Departure from {flight.origin} on {departureDate}
          </li>
          <li>
            Return from {flight.destination} on {returnDate}
          </li>
        </ol>
      </SrOnly>
      <FlightItemContainer>
        <FlightRoute origin={flight.origin} date={departureDate} destination={flight.destination} />
        <FlightItemContentSeparator />
        <FlightRoute origin={flight.destination} date={returnDate} destination={flight.origin} />
        <FlightPrice variant="md" weight="extraBold">
          from {price}
        </FlightPrice>
      </FlightItemContainer>
    </>
  );
};
