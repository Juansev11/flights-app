import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { Text } from '@/components/Elements';

const stampCircle = (props: any) => css`
  content: '';
  width: 1.25rem;
  height: 1.25rem;
  background-color: #8ec5fc;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border-radius: ${props.theme.borderRadius.circle};
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
