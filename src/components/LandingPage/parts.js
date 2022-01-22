import styled from 'styled-components';
import { device } from '../../constants/devices';

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-area: 2/13/12/6;
  gap: 10%;
`;

export const BackgroundPhoto = styled.img`
  height: 140vh;
  position: absolute;
  top: 0;
  left: -25vw;

  @media ${device.mobileS} {
    left: -120vw;
  }
  @media ${device.mobileL} {
    left: -100vw;
  }
  @media ${device.tabletS} {
    left: -40vw;
  }
  @media ${device.tabletM} {
    left: -70vw;
  }
  @media ${device.desktop13} {
    left: -20vw;
  }
  @media ${device.desktop4k} {
    left: -30vw;
  }
`;
