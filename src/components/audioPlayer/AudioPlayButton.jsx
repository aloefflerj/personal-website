import { styled } from 'styled-components';
import { PauseIcon } from '../../icons/PauseIcon';
import { PlayIcon } from '../../icons/PlayIcon';
import { useCategoryContext } from '../../hooks/useCategoryContext';
import { PixelButton } from '../../elements/buttons/PixelButton';
import PropTypes from 'prop-types';

const GlobalPlayButton = styled(PixelButton)`
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 1000;
`;

const LocalPlayButton = styled(PixelButton)`
    position: relative;
    z-index: 1000;
`;

export function AudioPlayButton({
    togglePlayPause,
    playing,
    global = false,
    miniplayer = true,
    songId = null,
}) {
    const { category } = useCategoryContext();

    const mini = miniplayer ? '12' : '24';

    const icon = playing ? (
        <PauseIcon
            fillColor={category.darkerColor}
            width={mini}
            height={mini}
        />
    ) : (
        <PlayIcon fillColor={category.darkerColor} width={mini} height={mini} />
    );

    return global ? (
        <GlobalPlayButton
            onClick={() => togglePlayPause()}
            $category={category}
        >
            {icon}
        </GlobalPlayButton>
    ) : (
        <LocalPlayButton onClick={() => togglePlayPause()} $category={category}>
            {icon}
        </LocalPlayButton>
    );
}

AudioPlayButton.propTypes = {
    togglePlay: PropTypes.func,
    playing: PropTypes.bool,
};
