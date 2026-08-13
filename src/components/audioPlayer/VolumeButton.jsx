import styled from 'styled-components';
import PropTypes from 'prop-types';
import { VolumeIcon } from '../../icons/VolumeIcon';
import { useCategoryContext } from '../../hooks/useCategoryContext';
import { PixelButton } from '../../elements/buttons/PixelButton';

const StyledVolumeButton = styled(PixelButton)`
    position: relative;
`;

export function VolumeButton({ muted, onClick }) {
    const { category } = useCategoryContext();

    return (
        <StyledVolumeButton onClick={onClick} $category={category}>
            <VolumeIcon
                fillColor={category.darkerColor}
                muted={muted}
                width="12"
                height="12"
            />
        </StyledVolumeButton>
    );
}

VolumeButton.propTypes = {
    muted: PropTypes.bool,
    onClick: PropTypes.func,
};
