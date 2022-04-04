import styled from '@emotion/styled';

import { Card } from '@/components/Elements';

export const FlightListContainer = styled.ul`
  flex: 1;
  display: grid;
  align-self: stretch;
  grid-template-columns: 1;
  column-gap: 1.5rem;
  row-gap: 1.5rem;
  @media only screen and (min-width: 30rem) {
    grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
  }
`;

export const FlightListCard = styled(Card)`
  background: none;
  padding: 0;
  overflow: auto;
  @media only screen and (min-width: 30rem) {
    padding: 1.5rem;
    background-color: ${(props) => props.theme.palette.background.light};
    box-shadow: rgb(0 0 0 / 5%) 0px 0px 6px 5px;
  }
`;
