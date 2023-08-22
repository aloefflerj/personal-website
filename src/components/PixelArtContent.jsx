import { keyframes, styled } from "styled-components";
import { Blank, Code, Drawings, Game, Music, Worldbuilding } from "../categories/Categories";
import { useCategoryContext } from "../hooks/useCategoryContext";
import blankImg from '../assets/img/environments/blank-environment.png';
import codeImg from '../assets/img/environments/code-environment.png';
import drawingsImg from '../assets/img/environments/drawings-environment.png';
import gameImg from '../assets/img/environments/game-environment.png';
import musicImg from '../assets/img/environments/music-environment.png';
import worldbuildingImg from '../assets/img/environments/worldbuilding-environment.png';

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

    const showBackground = () => {
        switch (category.categoryKey) {
            case Blank.categoryKey:
                return <Background
                    src={blankImg}
                    $border={category.darkerColor}
                />;
            case Code.categoryKey:
                return <Background
                    src={codeImg}
                    $border={category.darkerColor}
                />;
            case Drawings.categoryKey:
                return <Background
                    src={drawingsImg}
                    $border={category.darkerColor}
                />;
            case Game.categoryKey:
                return <Background
                    src={gameImg}
                    $border={category.darkerColor}
                />;
            case Music.categoryKey:
                return <Background
                    src={musicImg}
                    $border={category.darkerColor}
                />;
            case Worldbuilding.categoryKey:
                return <Background
                    src={worldbuildingImg}
                    $border={category.darkerColor}
                />;
        }
    }
    
    return <PixelArtMain>
        {showBackground()}
        { children }
    </PixelArtMain>
}