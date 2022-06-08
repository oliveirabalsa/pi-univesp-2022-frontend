import React from "react"
import { StyledLetter } from "./style";


const Letter: React.FC<{children: React.ReactNode, color: string}> = ({ children, color }) => {
    return (
        <StyledLetter color={color}>
            { children }
        </StyledLetter>
    )
}

export default Letter;