import styled from 'styled-components';
import PropTypes from 'prop-types';
import { StopIcon } from '../../icons/StopIcon';
import { useCategoryContext } from '../../hooks/useCategoryContext';
import { PixelButton } from '../../elements/buttons/PixelButton';

const StyledStopButton = styled(PixelButton)`
    position: relative;
`;

export function StopButton({ onClick }) {
    const { category } = useCategoryContext();

    return (
        <StyledStopButton onClick={onClick} $category={category}>
            <StopIcon fillColor={category.darkerColor} width="12" height="12" />
        </StyledStopButton>
    );
}

StopButton.propTypes = {
    onClick: PropTypes.func,
};
