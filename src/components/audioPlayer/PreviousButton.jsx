import styled from 'styled-components';
import PropTypes from 'prop-types';
import { SkipPreviousIcon } from '../../icons/SkipPreviousIcon';
import { useCategoryContext } from '../../hooks/useCategoryContext';
import { PixelButton } from '../../elements/buttons/PixelButton';

const StyledPreviousButton = styled(PixelButton)`
    position: relative;
`;

export function PreviousButton({ onClick }) {
    const { category } = useCategoryContext();

    return (
        <StyledPreviousButton onClick={onClick} $category={category}>
            <SkipPreviousIcon
                fillColor={category.darkerColor}
                width="12"
                height="12"
            />
        </StyledPreviousButton>
    );
}

PreviousButton.propTypes = {
    onClick: PropTypes.func,
};
