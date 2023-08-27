import { NavLink } from 'react-router-dom';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import { HomeIcon } from '../icons/HomeIcon';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BreadcrumbWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
`;

export function Breadcrumbs({ category }) {
    const breadcrumbs = useBreadcrumbs();

    return (
        <BreadcrumbWrapper>
            {breadcrumbs.map(({ match, breadcrumb }) => (
                <NavLink key={match.pathname} to={match.pathname}>
                    {breadcrumb.props.children === 'Home' ? (
                        <>
                            <HomeIcon fill={category.darkerColor} />
                        </>
                    ) : (
                        <>&nbsp;{breadcrumb}/&nbsp;</>
                    )}
                </NavLink>
            ))}
        </BreadcrumbWrapper>
    );
}

Breadcrumbs.propTypes = {
    category: PropTypes.object,
};
