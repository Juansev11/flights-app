import { FlightListItem } from '../FlightsListItem/FlightListItem';

import { FlightListContainer } from './FlightList.style';

type FlightListProps = React.ComponentPropsWithoutRef<'ul'>;

export const FlightList: React.FC<FlightListProps> = () => {
  return (
    <FlightListContainer>
      <li>
        <FlightListItem />
      </li>
      <li>
        <FlightListItem />
      </li>
      <li>
        <FlightListItem />
      </li>
      <li>
        <FlightListItem />
      </li>
      <li>
        <FlightListItem />
      </li>
      <li>
        <FlightListItem />
      </li>
      <li>
        <FlightListItem />
      </li>
    </FlightListContainer>
  );
};
