import { useEffect, useState } from "react";
import { styled } from "styled-components";
// import celticSong from '../assets/audio/celtic.wav';
import spookyNostalgiaSong from '../assets/audio/spooky-nostalgia.m4a';
import { AudioPlayButton } from "./AudioPlayButton";

const AudioPlayerContent = styled.div`
    cursor: pointer;
`;

export function AudioPlayer() {
    const [audio] = useState(new Audio(spookyNostalgiaSong));
    const [playing, setPlaying] = useState(false);

    useEffect(() => {
        if (playing)
            audio.play();
        else
            audio.pause();
    });

    const togglePlay = () => {
        setPlaying(!playing);
    }

    return (
        <AudioPlayerContent>
            <audio src={spookyNostalgiaSong} />
            <AudioPlayButton 
                togglePlay={togglePlay}
                playing={playing}
            />
        </AudioPlayerContent>
    )

}