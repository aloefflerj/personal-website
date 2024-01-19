import { styled } from 'styled-components';
import { useCategoryContext } from '../../hooks/useCategoryContext';
import { Option } from '../../style/Option';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { useSidebarContext } from '../../hooks/useSidebarContext';
import { Mobile } from '../../components/Mobile';

const StyledOption = styled(Option)`
    width: 100%;
`;

const SidebarLink = styled(NavLink)`
    color: ${(props) => props.$category.darkerColor};

    &.active {
        color: ${(props) => props.$category.lightColor};
        button {
            color: ${(props) => props.$category.lighterColor};
        }
    }
`;

export function SidebarOption({ children, to }) {
    const { category } = useCategoryContext();
    const { setRetracted } = useSidebarContext();

    const closeOnClickSideBarLink = (
        <SidebarLink
            $category={category}
            to={to}
            onClick={() => setRetracted(true)}
        >
            <StyledOption $category={category}>{children}</StyledOption>
        </SidebarLink>
    );

    const sideBarLink = (
        <SidebarLink $category={category} to={to}>
            <StyledOption $category={category}>{children}</StyledOption>
        </SidebarLink>
    );

    return (
        <Mobile
            ifIsMobileComponent={closeOnClickSideBarLink}
            ifNotMobileComponent={sideBarLink}
        />
    );
}

SidebarOption.propTypes = {
    children: PropTypes.string,
    to: PropTypes.string,
};
