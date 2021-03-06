import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;

  display: grid;
  grid-template-rows: repeat(12, 1fr);
  grid-template-columns: repeat(12, 1fr);
  height: 100vh;
  max-width: 1600px;
  box-shadow: 0 0 3px 1px ${({ theme }) => theme.dimBackground};
  overflow: hidden;
  margin: 0 auto;

  background-color: ${({ bgColor }) => bgColor};

  transition: 0.8s;
`;
