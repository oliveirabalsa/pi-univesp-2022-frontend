import styled from "styled-components";
import arrowLeft from "../../../assets/images/arrow-carousel-left.png";
import arrowRight from "../../../assets/images/arrow-carousel-right.png";
import buttonPlay from "../../../assets/images/button-play.png";

export const Center = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  margin-top: -20px;
  justify-content: center;
  align-items: center;
`;

export const ArrowLeft = styled.div`
  width: 32px;
  height: 32px;
  background-image: url(${arrowLeft});
`;

export const ArrowRight = styled.div`
  width: 32px;
  height: 32px;
  background-image: url(${arrowRight});
`;

export const Play = styled.div`
  width: 64px;
  height: 64px;
  background-image: url(${buttonPlay});
`;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 0 auto;
`;

export const ImagesContainer = styled.div`
  display: flex;
  gap: 40px;
  margin-inline: auto;
  justify-content: space-around;
  height: 200px;
  width: 100%;
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
  top: -20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RightChevronContainer = styled.div`
  position: fixed;
  height: 100vh;
  right: 0;
  top: -20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImagesCarousel = styled.div`
  margin-top: 25rem;
  display: flex;
  margin-left: 5px;

  flex-direction: column;
  overflow: hidden;
  img {
    height: 100px;
  }
`;
