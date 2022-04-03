import styled from '@emotion/styled';

export const FlightListContainer = styled.ul`
  display: grid;
  align-self: stretch;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  column-gap: 1.5rem;
  row-gap: 1.5rem;
`;
