import { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { VolumeIcon } from '../../icons/VolumeIcon';
import { useCategoryContext } from '../../hooks/useCategoryContext';
import { useIsMobile } from '../../hooks/useIsMobile';
import { PixelButton } from '../../elements/buttons/PixelButton';
import { If } from '../If';

const sliderTrackAndThumb = css`
    &::-webkit-slider-runnable-track {
        background: ${(props) => props.$category.lightColor};
        background-clip: border-box;
        height: 24px;
        border-left: 4px solid transparent;
        border-right: 3px solid transparent;
    }

    &::-moz-range-track {
        background: ${(props) => props.$category.lightColor};
        background-clip: border-box;
        height: 24px;
        border-left: 4px solid transparent;
        border-right: 3px solid transparent;
    }

    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        margin: 3px 0;
        background-color: ${(props) => props.$category.darkColor};
        height: 18px;
        width: 18px;
    }

    &::-moz-range-thumb {
        border: none;
        border-radius: 0;
        margin: 3px 0;
        background-color: ${(props) => props.$category.darkColor};
        height: 18px;
        width: 18px;
    }
`;

const StyledVolumeButton = styled(PixelButton)`
    position: relative;
`;

const VolumeWrapper = styled.div`
    position: relative;
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

    ${sliderTrackAndThumb}
`;

const VolumePopover = styled.div`
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    margin-bottom: 8px;
    padding: 10px 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.$category.mediumColor};
    box-shadow:
        inset 3px -3px ${(props) => props.$category.lightColor},
        inset -3px 3px ${(props) => props.$category.lightColor},
        0 0 0 3px ${(props) => props.$category.darkerColor};
    z-index: 1;
`;

const VerticalSliderBox = styled.div`
    position: relative;
    width: 24px;
    height: 96px;
`;

const VerticalSlider = styled(VolumeSlider)`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 96px;
    transform: translate(-50%, -50%) rotate(-90deg);
`;

export function VolumeButton({ volume, onToggleMute, onChangeVolume }) {
    const { category } = useCategoryContext();
    const isMobile = useIsMobile();
    const [open, setOpen] = useState(false);
    const wrapperRef = useRef(null);

    useEffect(() => {
        if (!open) return undefined;

        const handlePointerDown = (event) => {
            if (!wrapperRef.current?.contains(event.target)) {
                setOpen(false);
            }
        };

        document.addEventListener('pointerdown', handlePointerDown);
        return () =>
            document.removeEventListener('pointerdown', handlePointerDown);
    }, [open]);

    useEffect(() => {
        if (!isMobile) setOpen(false);
    }, [isMobile]);

    const handleSliderChange = (event) => {
        onChangeVolume(Number(event.target.value));
    };

    const handleButtonClick = () => {
        if (isMobile) {
            setOpen((current) => !current);
        } else {
            onToggleMute();
        }
    };

    return (
        <VolumeWrapper ref={wrapperRef}>
            <StyledVolumeButton
                onClick={handleButtonClick}
                $category={category}
            >
                <VolumeIcon
                    fillColor={category.darkerColor}
                    muted={volume === 0}
                    width="12"
                    height="12"
                />
            </StyledVolumeButton>
            <If is={!isMobile}>
                <VolumeSlider
                    type="range"
                    min={0}
                    max={1}
                    step={0.01}
                    value={volume}
                    onChange={handleSliderChange}
                    $category={category}
                />
            </If>
            <If is={isMobile && open}>
                <VolumePopover $category={category}>
                    <VerticalSliderBox>
                        <VerticalSlider
                            type="range"
                            min={0}
                            max={1}
                            step={0.01}
                            value={volume}
                            onChange={handleSliderChange}
                            $category={category}
                        />
                    </VerticalSliderBox>
                </VolumePopover>
            </If>
        </VolumeWrapper>
    );
}

VolumeButton.propTypes = {
    volume: PropTypes.number,
    onToggleMute: PropTypes.func,
    onChangeVolume: PropTypes.func,
};
