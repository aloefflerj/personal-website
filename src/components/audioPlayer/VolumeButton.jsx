import styled from 'styled-components';
import PropTypes from 'prop-types';
import { VolumeIcon } from '../../icons/VolumeIcon';
import { useCategoryContext } from '../../hooks/useCategoryContext';
import { PixelButton } from '../../elements/buttons/PixelButton';

const StyledVolumeButton = styled(PixelButton)`
    position: relative;
`;

const VolumeWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const VolumeSlider = styled.input`
    -webkit-appearance: none;
    appearance: none;
    cursor: pointer;
    width: 70px;
    height: 24px;
    background: transparent;

    &::-webkit-slider-runnable-track {
        background: ${(props) => props.$category.lightColor};
        height: 24px;
    }

    &::-moz-range-track {
        background: ${(props) => props.$category.lightColor};
        height: 24px;
    }

    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        margin: 3px;
        background-color: ${(props) => props.$category.darkColor};
        height: 18px;
        width: 18px;
    }

    &::-moz-range-thumb {
        border: none;
        border-radius: 0;
        margin: 3px;
        background-color: ${(props) => props.$category.darkColor};
        height: 18px;
        width: 18px;
    }
`;

export function VolumeButton({ volume, onToggleMute, onChangeVolume }) {
    const { category } = useCategoryContext();

    const handleSliderChange = (event) => {
        onChangeVolume(Number(event.target.value));
    };

    return (
        <VolumeWrapper>
            <StyledVolumeButton onClick={onToggleMute} $category={category}>
                <VolumeIcon
                    fillColor={category.darkerColor}
                    muted={volume === 0}
                    width="12"
                    height="12"
                />
            </StyledVolumeButton>
            <VolumeSlider
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={volume}
                onChange={handleSliderChange}
                $category={category}
            />
        </VolumeWrapper>
    );
}

VolumeButton.propTypes = {
    volume: PropTypes.number,
    onToggleMute: PropTypes.func,
    onChangeVolume: PropTypes.func,
};
