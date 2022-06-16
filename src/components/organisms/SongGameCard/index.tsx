import "swiper/css";
import "swiper/css/navigation";
import "./swiper.css";
import Letter from "../../atoms/Letter";
import SongGameBackground from "../../atoms/SongGameBackground";
import leftChevronImage from "../../../assets/slide-chevron-left.svg";
import rightChevronImage from "../../../assets/slide-chevron-right.svg";
import {
  Center,
  LeftChevronContainer,
  RightChevronContainer,
  ImagesCarousel,
  ImagesContainer,
  ButtonContainer,
  ArrowLeft,
  ArrowRight,
  Play
} from "./style";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { getCurrentLetter } from "../../../helpers/getCurrentLetter";
import { useEffect, useState } from "react";
import { getCurrentColor, IColorProps } from "../../../helpers/getCurrentColor";
import { CONSTANTS } from "../../../constants";
import { http } from "../../../services/axios/http";

const images = require.context("../../../assets/images", true);
const audios = require.context("../../../assets/audios", true);

interface ILetterResponse{
  letter: string;
  firstObjectName: string;
  secondObjectName: string;
  thirdObjectName: string;
}
// eslint-disable-next-line react-hooks/rules-of-hooks
const SongGameCard = () => {
  const [currentColors, setCurrentColors] = useState<IColorProps>(
    getCurrentColor("A")
  );
  const [currentLetter, setCurrentLetter] = useState<string>("A");
  const [currentImages, setCurrentImages] = useState<string[]>([]);
  const [currentImageName, setCurrentImageName] = useState<string>("");
  const [apiResponse, setApiResponse] = useState<any>();
  useEffect(() => {
    (async function () {
      if(!apiResponse) {
        const response = await http.get("song-game");
        const letterResponse = response.data;
        setApiResponse(letterResponse);
      }
      const letterPayload = apiResponse.find(
        (payload: ILetterResponse) => payload.letter === currentLetter
        );
      const images = [
        letterPayload.firstObjectName,
        letterPayload.secondObjectName,
        letterPayload.thirdObjectName,
      ].filter((image) => image);
      setCurrentImages(images);
      setCurrentImageName(images[1]);    
    })();
  }, [apiResponse, currentLetter]);

  const handleColors = (index: number) => {
    const letter = getCurrentLetter(index);
    const colors = getCurrentColor(letter);
    setCurrentLetter(letter);
    setCurrentColors(colors);
  };

  const handleImagePositionRight = () => {
    const newImages = [...currentImages]
    const lastImage = newImages.pop();
    newImages.unshift(lastImage || '')
    setCurrentImages(newImages)
    setCurrentImageName(newImages[1]);  
      
  };

  const handleImagePositionLeft = () => {
    const newImages = [...currentImages]
    const lastImage = newImages.shift();
    newImages.push(lastImage || '')
    setCurrentImages(newImages)
    setCurrentImageName(newImages[1]);  
  };

  const handlePlaySong = () => {
    const currentAudio: any = document.querySelector(`#${currentImageName}`)
    currentAudio?.play();
  }

  return (
    <SongGameBackground
      background={currentColors?.background + ""}
      blurColor={currentColors?.blurColor + ""}
    >
      <LeftChevronContainer>
        <img src={leftChevronImage} alt="left-chvron" />
      </LeftChevronContainer>
      <RightChevronContainer>
        <img src={rightChevronImage} alt="right-chvron" />
      </RightChevronContainer>
      <Swiper
        style={{ zIndex: 3 }}
        modules={[Navigation]}
        navigation={true}
        slidesPerView={1}
        onSlideChange={(e) => handleColors(e.realIndex)}
      >
        {CONSTANTS.values.alphabet.map((letter, index) => (
          <SwiperSlide key={index}>
            <Center>
              <Letter
                color={currentColors?.letterColor || CONSTANTS.colors.gray}
              >
                {letter}
              </Letter>

              <ImagesCarousel>
                <ImagesContainer>
                  {currentImages.map((image, index) => (
                    <>
                    <img
                      key={index}
                      src={images(`./${image.charAt(0)}/${image}.png`)}
                      alt={image}
                      style={{
                        transform: index === 1 ? "scale(1.3)" : "scale(1)",
                        marginTop: index === 1 ? "50px" : 0,
                      }}
                    />
                    <audio style={{visibility: "hidden"}} src={audios(`./${image}.mp3`)} id={image} >
                    <source src={audios(`./${image}.mp3`)} type="audio/mpeg" />
                    </audio>
                    </>
                  ))}
                </ImagesContainer>
                <ButtonContainer

                >
                  <ArrowLeft onClick={() => handleImagePositionLeft()}></ArrowLeft>
                  <Play onClick={() => handlePlaySong()}></Play>
                  <ArrowRight onClick={() => handleImagePositionRight()}></ArrowRight>
                </ButtonContainer>
              </ImagesCarousel>
            </Center>
          </SwiperSlide>
        ))}
      </Swiper>
    </SongGameBackground>
  );
};
export default SongGameCard;
