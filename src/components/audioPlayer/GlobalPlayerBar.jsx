import styled from 'styled-components';
import { useAudioPlayer } from '../../hooks/useAudioPlayer';
import { useCategoryContext } from '../../hooks/useCategoryContext';
import { AudioPlayButton } from './AudioPlayButton';
import { StopButton } from './StopButton';
import { PreviousButton } from './PreviousButton';
import { NextButton } from './NextButton';
import { VolumeButton } from './VolumeButton';
import { ProgressBar } from './ProgressBar';
import { If } from '../If';

export const PLAYER_BAR_HEIGHT = '44px';

const Bar = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: ${PLAYER_BAR_HEIGHT};
    z-index: 20000;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2px;
    padding: 0 20px;
    background-color: ${(props) => props.$category.darkColor};
`;

const TrackInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    width: 440px;
    flex-shrink: 0;
    color: ${(props) => props.$category.lightColor};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const TrackImage = styled.img`
    image-rendering: pixelated;
    width: 32px;
    height: 32px;
    flex-shrink: 0;
`;

const CenterGroup = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2px;
`;

const SkipGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 2px;
`;

export function GlobalPlayerBar() {
    const { category } = useCategoryContext();
    const {
        currentTrack,
        isPlaying,
        volume,
        progress,
        duration,
        togglePlayPause,
        playRandom,
        playNext,
        playPrevious,
        stop,
        toggleMute,
        setVolume,
        seek,
    } = useAudioPlayer();

    const handlePlayClick = () => {
        if (currentTrack) {
            togglePlayPause();
        } else {
            playRandom();
        }
    };

    return (
        <Bar $category={category}>
            <TrackInfo $category={category}>
                <If is={!!currentTrack?.image}>
                    <TrackImage src={currentTrack?.image} alt="" />
                </If>
                {currentTrack
                    ? `${currentTrack.title} — ${currentTrack.author}`
                    : 'Nothing playing'}
            </TrackInfo>
            <CenterGroup>
                <AudioPlayButton
                    togglePlayPause={handlePlayClick}
                    playing={isPlaying}
                    global={true}
                />
                <ProgressBar
                    progress={progress}
                    duration={duration}
                    onSeek={seek}
                />
                <SkipGroup>
                    <PreviousButton onClick={playPrevious} />
                    <StopButton onClick={stop} />
                    <NextButton onClick={playNext} />
                </SkipGroup>
            </CenterGroup>
            <VolumeButton
                volume={volume}
                onToggleMute={toggleMute}
                onChangeVolume={setVolume}
            />
        </Bar>
    );
}
