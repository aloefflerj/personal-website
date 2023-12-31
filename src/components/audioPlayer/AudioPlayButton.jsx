import { styled } from 'styled-components';
import { PauseIcon } from '../../icons/PauseIcon';
import { PlayIcon } from '../../icons/PlayIcon';
import { useCategoryContext } from '../../hooks/useCategoryContext';
import { PixelButton } from '../../elements/buttons/PixelButton';
import PropTypes from 'prop-types';

const PlayButton = styled(PixelButton)`
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 1000;
`;

export function AudioPlayButton({ togglePlay, playing }) {
    const { category } = useCategoryContext();

    return (
        <PlayButton onClick={() => togglePlay()} $category={category}>
            {playing ? (
                <PauseIcon fillColor={category.darkerColor} />
            ) : (
                <PlayIcon fillColor={category.darkerColor} />
            )}
        </PlayButton>
    );
}

AudioPlayButton.propTypes = {
    togglePlay: PropTypes.func,
    playing: PropTypes.bool,
};
