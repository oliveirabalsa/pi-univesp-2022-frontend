import "swiper/css";
import "swiper/css/navigation";
import "./swiper.css";
import Letter from "../../atoms/Letter";
import SongGameBackground from "../../atoms/SongGameBackground";
import leftChevronImage from '../../../assets/slide-chevron-left.svg'
import rightChevronImage from '../../../assets/slide-chevron-right.svg'
import { Center, LeftChevronContainer, RightChevronContainer, ImagesCarousel } from "./style";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { getCurrentLetter } from "../../../helpers/getCurrentLetter";
import { useEffect, useState } from "react";
import { getCurrentColor, IColorProps } from "../../../helpers/getCurrentColor";
import { CONSTANTS } from "../../../constants";
import { http } from "../../../services/axios/http";

const SongGameCard = () => {
    const ALPHABET = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    const [currentColors, setCurrentColors] = useState<IColorProps>(getCurrentColor("A"));
    const [currentLetter, setCurrentLetter] = useState<string>("A");
    const [currentImages, setCurrentImages] = useState<string[]>([]);
    const [letterResponse, setLetterResponse] = useState<any[]>([]);

    useEffect(() => {
        (async function () {
            const response = await http.get('song-game')
            setLetterResponse(response.data);
            const letterPayload = letterResponse.find(payload => payload.letter === currentLetter);
            const images = [letterPayload.firstObjectName, letterPayload.secondObjectName, letterPayload.thirdObjectName].filter(image => image);
            setCurrentImages(images);
        })()
    },[currentLetter, letterResponse])

    const handleColors = (index: number) => {
        const letter = getCurrentLetter(index);
        const colors = getCurrentColor(letter);
        setCurrentLetter(letter);
        setCurrentColors(colors);
    }

    return <SongGameBackground background={currentColors?.background + ""} blurColor={currentColors?.blurColor + ""}>
        <LeftChevronContainer><img src={leftChevronImage} alt="left-chvron" /></LeftChevronContainer>
        <RightChevronContainer><img src={rightChevronImage} alt="right-chvron" /></RightChevronContainer>
        <Swiper
            style={{ zIndex: 3 }}
            modules={[Navigation]}
            navigation={true}
            slidesPerView={1}
            onSlideChange={(e) => handleColors(e.realIndex)}
        >
            {ALPHABET.map((letter, index) => (
                <SwiperSlide key={index}>
                    <Center>
                        <Letter color={currentColors?.letterColor || CONSTANTS.colors.gray} >{letter}</Letter>
                        <ImagesCarousel>
                            {currentImages.map((image, index) => (
                                <img key={index} src={`/assets/images/${image}.svg`} alt={image} />
                            ))}
                        </ImagesCarousel>
                    </Center>
                </SwiperSlide>
            ))
            }
        </Swiper>
    </SongGameBackground>
}
export default SongGameCard;
