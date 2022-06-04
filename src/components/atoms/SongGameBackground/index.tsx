import React from "react"
import { Container, Blur } from "./style";


const SongGameBackground: React.FC<{children: React.ReactNode}> = ({ children }) => {
    return (
        <Container>
            <Blur />
            { children }
        </Container>
    )
}

export default SongGameBackground;