import {
  FlightCity,
  FlightDate,
  FlightRouteContainer,
  FlightStop,
  FlightRouteDuration,
  FlightRouteLine,
  FlightPlaneIcon,
} from './FlightRoute.styles';

type FlightRouteProps = {
  origin: string;
  destination: string;
  date: string;
} & React.ComponentPropsWithoutRef<'article'>;

export const FlightRoute: React.FC<FlightRouteProps> = ({ origin, destination, date }) => {
  return (
    <FlightRouteContainer>
      <FlightStop>
        <FlightCity variant="xl" weight="extraBold">
          {origin}
        </FlightCity>
      </FlightStop>
      <FlightRouteDuration>
        <FlightDate variant="xs" weight="bold">
          {date}
        </FlightDate>
        <FlightRouteLine>
          <FlightPlaneIcon />
        </FlightRouteLine>
      </FlightRouteDuration>
      <FlightStop>
        <FlightCity variant="xl" weight="extraBold">
          {destination}
        </FlightCity>
      </FlightStop>
    </FlightRouteContainer>
  );
};
