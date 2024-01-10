import PropTypes from 'prop-types';
import styled from 'styled-components';

const Progress = styled.div`
    input[type='range'] {
        --range-progress: 0;
    }

    input[type='range']::before {
        background: #f50;
        width: var(--range-progress);
    }
`;

export function ProgressBar({
    progressBarRef,
    audioRef,
    timeProgress,
    duration,
}) {
    const handleProgressChange = () => {
        audioRef.current.currentTime = progressBarRef.current.value;
    };

    const formatTime = (time) => {
        if (time && !isNaN(time)) {
            const minutes = Math.floor(time / 60);
            const formatMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
            const seconds = Math.floor(time % 60);
            const formatSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
            return `${formatMinutes}:${formatSeconds}`;
        }
        return '00:00';
    };

    return (
        <Progress>
            <span className="time current">{formatTime(timeProgress)}</span>
            <input
                type="range"
                ref={progressBarRef}
                defaultValue={0}
                onChange={handleProgressChange}
            />
            <span className="time">{formatTime(duration)}</span>
        </Progress>
    );
}

ProgressBar.proptype = {
    progressBarRef: PropTypes.element,
    audioRef: PropTypes.element,
    timeProgress: PropTypes.number,
    duration: PropTypes.number,
};
