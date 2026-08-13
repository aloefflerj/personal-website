import styled from 'styled-components';
import { useAudioPlayer } from '../../hooks/useAudioPlayer';
import { useCategoryContext } from '../../hooks/useCategoryContext';
import { AudioPlayButton } from './AudioPlayButton';
import { StopButton } from './StopButton';
import { VolumeButton } from './VolumeButton';
import { ProgressBar } from './ProgressBar';

export const PLAYER_BAR_HEIGHT = '64px';

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
    gap: 16px;
    padding: 0 20px;
    background-color: ${(props) => props.$category.darkColor};
`;

const TrackInfo = styled.div`
    color: ${(props) => props.$category.lightColor};
    min-width: 160px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const ControlsGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

export function GlobalPlayerBar() {
    const { category } = useCategoryContext();
    const {
        currentTrack,
        isPlaying,
        muted,
        progress,
        duration,
        togglePlayPause,
        playRandom,
        stop,
        toggleMute,
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
                {currentTrack
                    ? `${currentTrack.title} — ${currentTrack.author}`
                    : 'Nothing playing'}
            </TrackInfo>
            <ControlsGroup>
                <AudioPlayButton
                    togglePlayPause={handlePlayClick}
                    playing={isPlaying}
                    global={true}
                    miniplayer={false}
                />
                <StopButton onClick={stop} />
                <VolumeButton muted={muted} onClick={toggleMute} />
            </ControlsGroup>
            <ProgressBar
                progress={progress}
                duration={duration}
                onSeek={seek}
            />
        </Bar>
    );
}
