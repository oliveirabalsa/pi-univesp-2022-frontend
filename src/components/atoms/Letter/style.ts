import { CONSTANTS } from "./../../../constants/index";
import styled from "styled-components";

export const StyledLetter = styled.p`
  position: absolute;
  font-family: "Seymour One";
  font-style: normal;
  font-weight: 400;
  font-size: 200px;
  color: ${CONSTANTS.colors.purple};
  -webkit-text-stroke: 5px #ffffff;
  margin: 0;
`;
