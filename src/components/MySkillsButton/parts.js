import styled from "styled-components";

export const Button = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 15vh;
  width: 25vw;
  position: relative;
  top: -20vh;
  left: 31vw;
  font-size: 3rem;
  color: white;
  transform-origin: left center;

  &::before {
    transition: 0.8s;
    content: "";
    background-color: orange;
    width: 20px;
    height: 100px;
    margin-right: 15px;
    /* transform-origin: bottom bottom; */
  }

  &:hover {
    cursor: pointer;
    color: orange;
    /* text-shadow: 20px 0 white; */
    box-shadow: 0 0 20px 0 white;
    &::before {
      transform: translateX(25vw);
      height: 5px;
    }
  }
`;
