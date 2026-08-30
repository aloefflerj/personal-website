import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useCategoryContext } from '../../hooks/useCategoryContext';

const THUMB_SIZE = 18;
// Space kept between the thumb and each end of the track. Tune to taste.
const EDGE_GAP_LEFT = 3;
const EDGE_GAP_RIGHT = -1;

const Track = styled.div`
    position: relative;
    box-sizing: border-box;
    width: 14rem;
    height: 24px;
    background-color: ${(props) => props.$category.lightColor};
    cursor: pointer;

    @media screen and (max-width: 640px) {
        width: auto;
        flex: 1;
        min-width: 0;
    }
`;

const Thumb = styled.div`
    position: absolute;
    top: 3px;
    left: calc(
        ${EDGE_GAP_LEFT}px + (100% - ${EDGE_GAP_LEFT + EDGE_GAP_RIGHT}px) *
            ${(props) => props.$pct} / 100
    );
    width: ${THUMB_SIZE}px;
    height: ${THUMB_SIZE}px;
    transform: translateX(-${(props) => props.$pct}%);
    background-color: ${(props) => props.$category.darkColor};
    pointer-events: none;
`;

const Range = styled.input`
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    opacity: 0;
    cursor: pointer;
`;

export function ProgressBar({ progress = 0, duration = 0, onSeek }) {
    const { category } = useCategoryContext();

    const pct =
        duration > 0
            ? Math.min(100, Math.max(0, (progress / duration) * 100))
            : 0;

    const handleChange = (event) => {
        onSeek(Number(event.target.value));
    };

    return (
        <Track $category={category}>
            <Thumb $category={category} $pct={pct} />
            <Range
                type="range"
                min={0}
                max={duration || 0}
                value={progress}
                onChange={handleChange}
            />
        </Track>
    );
}

ProgressBar.propTypes = {
    progress: PropTypes.number,
    duration: PropTypes.number,
    onSeek: PropTypes.func,
};
