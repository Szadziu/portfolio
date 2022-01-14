import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  max-width: 2500px;
  background-color: ${({ bgColor }) => bgColor};
  box-shadow: 0 0 12px 0 black;
  overflow: hidden;
  transition: 0.8s;
`;
