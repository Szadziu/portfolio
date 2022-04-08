import styled from 'styled-components';
import { device } from '../../constants/devices';

export const ProjectsWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-wrap: wrap;

  background-color: rgba(0, 0, 0, 0.2);

  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);

  @media ${device.mobileM} {
    width: 45vh;
    height: 45vh;
  }

  @media ${device.desktop} {
    width: 75vh;
    height: 75vh;
  }
  @media ${device.desktopFHD} {
    width: 80vh;
    height: 80vh;
    margin-top: 70px;
  }
  @media ${device.desktop4k} {
    width: 60vh;
    height: 60vh;
  }
`;

export const Wrapper = styled.div`
  background-color: pink;
`;
