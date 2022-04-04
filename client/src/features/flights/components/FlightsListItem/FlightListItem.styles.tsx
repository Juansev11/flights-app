import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { Text } from '@/components/Elements';

const stampCircle = (props: any) => css`
  content: none;
  width: 1.25rem;
  height: 1.25rem;
  background-color: ${props.theme.palette.background.light};
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border-radius: ${props.theme.borderRadius.circle};
  @media only screen and (min-width: 30rem) {
    content: '';
  }
`;

export const FlightItemContainer = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  align-self: stretch;
  min-height: 12rem;
  background-color: ${(props) => props.theme.palette.common.white};
  border-radius: ${(props) => props.theme.borderRadius.round};
  &::before {
    ${stampCircle}
    left: -0.625rem;
  }
  &::after {
    ${stampCircle}
    right: -0.625rem;
  }
  border: ${(props) => props.theme.border.basic};
  box-shadow: ${(props) => props.theme.boxShadow.basic};
`;

export const FlightItemContentSeparator = styled.div`
  width: 100%;
  padding: 0 1rem;
  height: 1px;
  background-color: ${(props) => props.theme.palette.common.grey[200]};
  opacity: 0.5;
  margin-bottom: 1rem;
`;

export const FlightPrice = styled(Text)`
  color: ${(props) => props.theme.palette.primary.main};
`;

export const SrOnly = styled.div`
  position: absolute;
  width: 0.0625rem;
  height: 0.0625rem;
  white-space: nowrap;
  overflow: hidden;
  clip: rect(0 0 0 0);
  -webkit-clip-path: inset(50%);
  clip-path: inset(50%);
`;
