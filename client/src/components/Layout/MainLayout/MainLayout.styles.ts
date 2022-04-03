import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 1rem;
  height: 100%;
  background-image: ${(props) => props.theme.palette.background.main};
`;
