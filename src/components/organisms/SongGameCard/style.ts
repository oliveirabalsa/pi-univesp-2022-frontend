import styled from "styled-components";

export const Center = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Element = styled.div`
  width: 150px;
  height: 150px;
  background: red;
`;

export const LeftChevronContainer = styled.div`
  position: fixed;
  height: 100vh;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RightChevronContainer = styled.div`
  position: fixed;
  height: 100vh;
  right: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;


export const ImagesCarousel = styled.div`
  margin-top: 15rem;
  img {
    border: 1px solid black;
  }
`