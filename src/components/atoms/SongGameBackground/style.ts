import { CONSTANTS } from "./../../../constants/index";
import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${CONSTANTS.colors.purple_light};
  z-index: -2;
`;

export const Blur = styled.div`
  box-sizing: border-box;
  background-color: ${CONSTANTS.colors.purple_primary};
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 50vh;
  border: 1px dotted ${CONSTANTS.colors.purple_primary};
  border-radius: 0 0 60% 60%;
`;
