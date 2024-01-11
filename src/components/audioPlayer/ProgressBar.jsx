import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useCategoryContext } from '../../hooks/useCategoryContext';

const Progress = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 50%;

    input[type='range'] {
        --range-progress: 0;

    }

    input[type='range']::before {
        width: var(--range-progress);
    }

    input[type="range"] {
        -webkit-appearance: none;
        appearance: none;
        /* background: transparent; */
        cursor: pointer;
        width: 15rem;
    }

    input[type="range"]::-webkit-slider-runnable-track {
        background: ${(props) => props.$category.lightColor};
        height: 24px;
    }

    input[type="range"]::-moz-range-track {
        background: ${(props) => props.$category.lightColor};
        height: 24px;
    }

    input[type="range"]::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        margin: 3px;
        background-color: ${(props) => props.$category.darkColor};
        height: 18px;
        width: 18px;    
    }

    input[type="range"]::-moz-range-thumb {
        border: none;
        border-radius: 0;
        margin: 3px;
        background-color: ${(props) => props.$category.darkColor};
        height: 18px;
        width: 18px; 
    }
`;

export function ProgressBar({
    progressBarRef,
    audioRef,
    timeProgress,
    duration,
}) {
    const { category } = useCategoryContext();

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
        <Progress $category={category}>
            <input
                type="range"
                ref={progressBarRef}
                defaultValue={0}
                onChange={handleProgressChange}
            />
            {/* <span className="time current">{formatTime(timeProgress)}</span> */}
            {/* <span className="time">{formatTime(duration)}</span> */}
        </Progress>
    );
}

ProgressBar.proptype = {
    progressBarRef: PropTypes.element,
    audioRef: PropTypes.element,
    timeProgress: PropTypes.number,
    duration: PropTypes.number,
};
