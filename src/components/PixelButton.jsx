import { styled } from "styled-components"
import { Blank } from "../categories/Categories";

export const PixelButton = styled.button`
    background-color: ${props => props.$category.mediumColor ?? Blank.mediumColor};
    margin: 6px 0 6px 0;

    width: 64px;
    height: 64px;
    
    border: 0px;
    box-shadow: 
        inset 3px -3px ${props => props.$category.lightColor ?? Blank.lightColor},
        inset -3px 3px ${props => props.$category.darkColor ?? Blank.darkColor},
        3px 0px 0px 0px ${props => props.$category.darkerColor ?? Blank.darkerColor},
        0px -3px 0px 0px ${props => props.$category.darkerColor ?? Blank.darkerColor};

        &::after {
            content: '';
            background: ${props => props.$category.darkerColor ?? Blank.darkerColor};
            position: absolute;
            left: -3px;
            top: 0;
            width: 3px;
            height: 100%;
            z-index: -1;
        }

        &::after {
            content: '';
            background: ${props => props.$category.darkerColor ?? Blank.darkerColor};
            position: absolute;
            right: -3px;
            top: 0;
            width: 3px;
            height: 100%;
            z-index: -1;
        }

        &::before {
            content: '';
            background: ${props => props.$category.darkerColor ?? Blank.darkerColor};
            position: absolute;
            left: 0;
            bottom: -3px;
            width: 100%;
            height: 3px;
            z-index: -1;
        }
    
    filter: brightness(200%);
    &:hover {
        cursor: pointer;
        filter: brightness(250%);
        box-shadow: 
            inset 3px -3px ${props => props.$category.darkColor ?? Blank.darkColor},
            inset -3px 3px ${props => props.$category.lightColor ?? Blank.lightColor},
            3px 0px 0px 0px ${props => props.$category.darkerColor ?? Blank.darkerColor},
            0px -3px 0px 0px ${props => props.$category.darkerColor ?? Blank.darkerColor};
    }
`;