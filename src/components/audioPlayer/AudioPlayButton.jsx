import { styled } from 'styled-components';
import PropTypes from 'prop-types';
import { PauseIcon } from '../../icons/PauseIcon';
import { PlayIcon } from '../../icons/PlayIcon';
import { useCategoryContext } from '../../hooks/useCategoryContext';
import { PixelButton } from '../../elements/buttons/PixelButton';

const GlobalPlayButton = styled(PixelButton)`
    position: relative;
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
    togglePlayPause: PropTypes.func,
    playing: PropTypes.bool,
    global: PropTypes.bool,
    miniplayer: PropTypes.bool,
};
