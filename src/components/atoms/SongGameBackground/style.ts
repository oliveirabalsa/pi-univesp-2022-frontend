import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${(props: { background: string }) => props.background};
  transition: background 0.6s ease-in-out;
  z-index: -2;
`;

export const Blur = styled.div`
  box-sizing: border-box;
  background-color: ${(props: { blurColor: string }) => props.blurColor};
  transition: background 0.6s ease-in-out;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 50vh;
  border: 1px dotted ${(props: { blurColor: string }) => props.blurColor};;
  border-radius: 0 0 60% 60%;
`;
