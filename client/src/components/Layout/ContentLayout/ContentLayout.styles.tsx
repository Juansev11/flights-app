import styled from '@emotion/styled';

export const ContentLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  gap: 1.5rem;
  height: 100%;
  @media only screen and (min-width: 30rem) {
    max-width: 64rem;
  }
`;
