import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useCategoryContext } from '../../hooks/useCategoryContext';

const Progress = styled.div`
    display: flex;
    align-items: center;

    input[type='range'] {
        --range-progress: 0;
    }

    input[type='range']::before {
        width: var(--range-progress);
    }

    input[type='range'] {
        -webkit-appearance: none;
        appearance: none;
        cursor: pointer;
        width: 14rem;
    }

    input[type='range']::-webkit-slider-runnable-track {
        background: ${(props) => props.$category.lightColor};
        height: 24px;
    }

    input[type='range']::-moz-range-track {
        background: ${(props) => props.$category.lightColor};
        height: 24px;
    }

    input[type='range']::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        margin: 3px;
        background-color: ${(props) => props.$category.darkColor};
        height: 18px;
        width: 18px;
    }

    input[type='range']::-moz-range-thumb {
        border: none;
        border-radius: 0;
        margin: 3px;
        background-color: ${(props) => props.$category.darkColor};
        height: 18px;
        width: 18px;
    }
`;

export function ProgressBar({ progress = 0, duration = 0, onSeek }) {
    const { category } = useCategoryContext();

    const progressPercent = duration > 0 ? (progress / duration) * 100 : 0;

    const handleChange = (event) => {
        onSeek(Number(event.target.value));
    };

    return (
        <Progress
            $category={category}
            style={{ '--range-progress': `${progressPercent}%` }}
        >
            <input
                type="range"
                min={0}
                max={duration || 0}
                value={progress}
                onChange={handleChange}
            />
        </Progress>
    );
}

ProgressBar.propTypes = {
    progress: PropTypes.number,
    duration: PropTypes.number,
    onSeek: PropTypes.func,
};
