import { styled } from "styled-components";
import { PauseIcon } from "../../public/assets/img/icons/PauseIcon";
import { PlayIcon } from "../../public/assets/img/icons/PlayIcon";
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
        $category={category}
    >
        {   
            playing ?
            <PauseIcon fillColor={category.darkerColor} /> :
            <PlayIcon fillColor={category.darkerColor}/>
        }
    </PlayButton>
}