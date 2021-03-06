import styled from '@emotion/styled';

import { Text } from '@/components/Elements';
import { Plane } from '@/components/Icons/Plane';

export const FlightRouteContainer = styled.section`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(8, minmax(0, 1fr));
  align-items: center;
  margin-bottom: 1rem;
`;

export const FlightRouteDuration = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
  grid-column: span 4 / span 4;
`;

export const FlightRouteLine = styled.div`
  position: relative;
  height: 1px;
  background-color: ${(props) => props.theme.palette.common.grey[200]};
  opacity: 0.5;
  width: 100%;
  margin: 0;
`;

export const FlightStop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-column: span 2 / span 2;
`;

export const FlightCity = styled(Text)``;

export const FlightDate = styled(Text)`
  top: 1rem;
  padding: 0.125rem 0.75rem;
  color: ${(props) => props.theme.palette.common.grey[400]};
  background-color: ${(props) => props.theme.palette.common.grey[100]};
  border-radius: ${(props) => props.theme.borderRadius.circle};
  margin-bottom: 0.75rem;
`;

export const FlightPlaneIcon = styled(Plane)`
  width: 1rem;
  height: 1rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
