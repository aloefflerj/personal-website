import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import { Blank } from '../../categories/Categories';

const ENV_PATH = '/assets/img/environments';

// The guy is a layer inside the 16:9 art space, so a fixed percentage keeps
// it standing on the ground as the whole scene zooms. Shared across every
// category and tuned by eye against the ground art.
const GUY_LEFT = 12;
const GUY_BOTTOM = 21;
const GUY_WIDTH = 10;

const fadeIn = keyframes`
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
`;

const Stage = styled.div`
    position: absolute;
    inset: 0;
    overflow: hidden;
`;

// A 16:9 box, at least as large as the viewport on both axes, pinned to the
// bottom-left corner. A wider viewport crops the right edge, a taller one
// crops the top - the guy and the ground stay in view either way.
const Scene = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    width: max(100vw, calc(var(--app-height, 100vh) * 16 / 9));
    aspect-ratio: 16 / 9;
    image-rendering: pixelated;
    animation: ${fadeIn} 0.2s linear;
`;

const Layer = styled.img`
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    display: block;
`;

const Guy = styled.img`
    position: absolute;
    left: ${GUY_LEFT}%;
    bottom: ${GUY_BOTTOM}%;
    width: ${GUY_WIDTH}%;
    height: auto;
    image-rendering: pixelated;
`;

export function EnvironmentScene({ category }) {
    const key = category.categoryKey ?? Blank.categoryKey;

    return (
        <Stage>
            <Scene>
                <Layer src={`${ENV_PATH}/${key}-bg.png`} alt="" />
                <Layer src={`${ENV_PATH}/${key}-ground.png`} alt="" />
                <Guy src={`${ENV_PATH}/${key}-guy.gif`} alt="" />
            </Scene>
        </Stage>
    );
}

EnvironmentScene.propTypes = {
    category: PropTypes.object,
};
