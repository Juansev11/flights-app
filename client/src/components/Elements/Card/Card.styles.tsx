import styled from '@emotion/styled';

export const CardContainer = styled.div`
  position: relative;
  display: flex;
  align-self: stretch;
  background-color: ${(props) => props.theme.palette.common.white};
  overflow: hidden;
  border-radius: 0;
  @media only screen and (min-width: 30rem) {
    border-radius: ${(props) => props.theme.borderRadius.round};
  }
`;
