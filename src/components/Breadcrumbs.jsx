import { NavLink } from 'react-router-dom';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import { HomeIcon } from '../icons/HomeIcon';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BreadcrumbWrapper = styled.div`
    display: flex;
    padding: 16px 16px 16px 0;
    align-items: center;
    margin-left: 18px;
    gap: 6px;

    a.active {
        color: ${(props) => props.$activeColor};
    }
`;

export function Breadcrumbs({ category }) {
    const breadcrumbs = useBreadcrumbs();

    const renderBreadcrumbs = () => {
        return breadcrumbs.map(({ match, breadcrumb }) => (
            <NavLink key={match.pathname} to={match.pathname}>
                {breadcrumb.props.children === 'Home' ? (
                    <>
                        <HomeIcon fill={category.lightColor} />
                    </>
                ) : (
                    <>&nbsp;{breadcrumb}&nbsp;/</>
                )}
            </NavLink>
        ));
    };

    return (
        <BreadcrumbWrapper $activeColor={category.lightColor}>
            {renderBreadcrumbs()}
        </BreadcrumbWrapper>
    );
}

Breadcrumbs.propTypes = {
    category: PropTypes.object,
};
