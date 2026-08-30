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

    @media screen and (max-width: 640px) {
        min-width: 0;
        flex: 1;
        flex-wrap: nowrap;
        white-space: nowrap;
        overflow-x: auto;
        overflow-y: hidden;

        a {
            flex-shrink: 0;
        }
    }
`;

export function Breadcrumbs({ category, trail = null }) {
    const breadcrumbs = useBreadcrumbs();

    const renderTrail = () =>
        trail.map(({ title, path }) => (
            <NavLink key={path} to={path}>
                &nbsp;{title}&nbsp;/
            </NavLink>
        ));

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
            {trail ? renderTrail() : renderBreadcrumbs()}
        </BreadcrumbWrapper>
    );
}

Breadcrumbs.propTypes = {
    category: PropTypes.object,
    trail: PropTypes.array,
};
