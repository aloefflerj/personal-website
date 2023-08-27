import { styled } from 'styled-components';
import { useCategoryContext } from '../../hooks/useCategoryContext';
import { Option } from '../../style/Option';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const StyledOption = styled(Option)`
    width: 100%;
`;

const SidebarLink = styled(NavLink)`
    color: ${(props) => props.$category.darkerColor};

    &.active {
        color: ${(props) => props.$category.lightColor};
        filter: brightness(200%);
        button {
            color: ${(props) => props.$category.lightColor};
        }
        &:hover {
            filter: brightness(100%);
        }
    }
`;

export function SidebarOption({ children, to }) {
    const { category } = useCategoryContext();

    return (
        <SidebarLink $category={category} to={to}>
            <StyledOption $category={category}>{children}</StyledOption>
        </SidebarLink>
    );
}

SidebarOption.propTypes = {
    children: PropTypes.string,
    to: PropTypes.string,
};
