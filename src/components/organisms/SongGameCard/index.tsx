import Letter from "../../atoms/Letter";
import SongGameBackground from "../../atoms/SongGameBackground";
import leftChevronImage from '../../../assets/slide-chevron-left.svg'
import rightChevronImage from '../../../assets/slide-chevron-right.svg'
import { Center, LeftChevronContainer, RightChevronContainer } from "./style";

const SongGameCard = () => {
    return <SongGameBackground>
        <Center>
        <Letter>A</Letter>
        <LeftChevronContainer><img src={leftChevronImage} alt="left-chvron" /></LeftChevronContainer>
        <RightChevronContainer><img src={rightChevronImage} alt="right-chvron" /></RightChevronContainer>
        </Center>
    </SongGameBackground>
    }
export default SongGameCard;
