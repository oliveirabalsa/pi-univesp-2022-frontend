import React from "react"
import { StyledLetter } from "./style";


const Letter: React.FC<{children: React.ReactNode}> = ({ children }) => {
    return (
        <StyledLetter>
            { children }
        </StyledLetter>
    )
}

export default Letter;