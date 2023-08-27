import { styled } from 'styled-components';
import { useCategoryContext } from '../../hooks/useCategoryContext';
import { Option } from '../../style/Option';
import PropTypes from 'prop-types';

const StyledOption = styled(Option)`
    width: 100%;
`;

export function SidebarOption({ children }) {
    const { category } = useCategoryContext();

    return <StyledOption $category={category}>{children}</StyledOption>;
}

SidebarOption.propTypes = {
    children: PropTypes.string,
};
