import styled from "styled-components";

export const StyledLetter = styled.p`
  position: absolute;
  font-family: "Seymour One";
  font-style: normal;
  font-weight: 400;
  font-size: 200px;
  color: ${(props) => props.color};
  transition: color 0.6s ease-in-out;
  -webkit-text-stroke: 5px #ffffff;
  margin: 0;
`;
