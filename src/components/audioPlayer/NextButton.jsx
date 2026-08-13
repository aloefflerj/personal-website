import styled from 'styled-components';
import PropTypes from 'prop-types';
import { SkipNextIcon } from '../../icons/SkipNextIcon';
import { useCategoryContext } from '../../hooks/useCategoryContext';
import { PixelButton } from '../../elements/buttons/PixelButton';

const StyledNextButton = styled(PixelButton)`
    position: relative;
`;

export function NextButton({ onClick }) {
    const { category } = useCategoryContext();

    return (
        <StyledNextButton onClick={onClick} $category={category}>
            <SkipNextIcon
                fillColor={category.darkerColor}
                width="12"
                height="12"
            />
        </StyledNextButton>
    );
}

NextButton.propTypes = {
    onClick: PropTypes.func,
};
