import React from "react"
import { Container, Blur } from "./style";


const SongGameBackground: React.FC<{children: React.ReactNode ,background: string; blurColor: string;}> = ({ children, background, blurColor}) => {
    return (
        <Container background={background}>
            <Blur blurColor={blurColor} />
            { children }
        </Container>
    )
}

export default SongGameBackground;