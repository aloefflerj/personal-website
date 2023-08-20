import { useEffect } from "react";
import { keyframes, styled } from "styled-components";
import { Blank, Code, Drawings, Game, Music, Worldbuilding } from "../categories/Categories";
import { useCategoryContext } from "../hooks/useCategoryContext";

const backgroundImagesPath = '/src/assets/img/environments';

const PixelArtMain = styled.main`
    image-rendering: pixelated;
    position: relative;

    @media only screen and (min-height: 360px) and (min-width: 640px) {
        width: 640px;
        height: 360px;
    }

    @media only screen and (min-height: 540px) and (min-width: 960px) {
        width: 960px;
        height: 540px;
    }

    @media only screen and (min-height: 810px) and (min-width: 1440px) {
        width: 1440px;
        height: 810px;
    }

    @media only screen and (min-height: 1080px) and (min-width: 1920px) {
        width: 1920px;
        height: 1080px;
    }
`;

const fadeIn = keyframes`
    from {
        opacity: 0;
    }

    to {
        opacity: 100;
    }
`;

const Background = styled.img`
    object-fit: contain;
    width: 100%;
    height: auto;
    border: 3px solid ${props => props.$border};
    animation: ${fadeIn} 0.2s linear;
`;

export function PixelArtContent({ children }) {
    const { category } = useCategoryContext();

    const setImageBackground = (category) => {
        return `${backgroundImagesPath}/${category.img}`;
    }

    const showBackground = () => {
        switch (category.categoryKey) {
            case Blank.categoryKey:
                return <Background 
                    src={setImageBackground(Blank)}
                    $border={category.mediumColor}
                />;
            case Code.categoryKey:
                return <Background 
                    src={setImageBackground(Code)}
                    $border={category.mediumColor}
                />;
            case Drawings.categoryKey:
                return <Background 
                    src={setImageBackground(Drawings)}
                    $border={category.mediumColor}
                />;
            case Game.categoryKey:
                return <Background 
                    src={setImageBackground(Game)}
                    $border={category.mediumColor}
                />;
            case Music.categoryKey:
                return <Background 
                    src={setImageBackground(Music)}
                    $border={category.mediumColor}
                />;
            case Worldbuilding.categoryKey:
                return <Background 
                    src={setImageBackground(Worldbuilding)}
                    $border={category.mediumColor}
                />;
        }
    }
    
    return <PixelArtMain>
        {showBackground()}
        { children }
    </PixelArtMain>
}