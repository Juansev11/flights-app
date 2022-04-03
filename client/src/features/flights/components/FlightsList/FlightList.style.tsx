import styled from '@emotion/styled';

import { Card } from '@/components/Elements';

export const FlightListContainer = styled.ul`
  flex: 1;
  display: grid;
  align-self: stretch;
  grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
  column-gap: 1.5rem;
  row-gap: 1.5rem;
`;

export const FlightListCard = styled(Card)`
  padding: 1rem;
  background-color: ${(props) => props.theme.palette.background.light};
  box-shadow: rgb(0 0 0 / 5%) 0px 0px 6px 5px;
  overflow: auto;
`;
