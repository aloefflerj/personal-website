import { styled } from "styled-components";
import { PauseIcon } from "../assets/img/icons/PauseIcon";
import { PlayIcon } from "../assets/img/icons/PlayIcon";
import { useCategoryContext } from "../hooks/useCategoryContext";
import { PixelButton } from "./PixelButton";

const PlayButton = styled(PixelButton)`
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 1000;
`;

export function AudioPlayButton({ togglePlay, playing }) {
    const {category} = useCategoryContext();

    return <PlayButton onClick={() => togglePlay()}
        $bgColor={category.bgColor}
        $mediumColor={category.mediumColor}
        $darkColor={category.darkColor}
        $darkerColor={category.darkerColor} 
    >
        {   
            playing ?
            <PauseIcon fillColor={category.darkerColor} /> :
            <PlayIcon fillColor={category.darkerColor}/>
        }
    </PlayButton>
}