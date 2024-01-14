import { NavLink } from 'react-router-dom';
import { CategoryOption } from './CategoryOption';
import PropTypes from 'prop-types';
import { Category } from '../../categories/Categories';
import { If } from '../If';
import styled from 'styled-components';

const Link = styled(NavLink)`
    text-decoration: none;
`;
export function CategoryNavLinkItem({ category, button = null }) {
    return (
        <Link to={category.categoryKey}>
            <If is={button === null}>
                <CategoryOption buttonCategory={category}>
                    {category.title}
                </CategoryOption>
            </If>
            <If is={button !== null}>{button}</If>
        </Link>
    );
}

CategoryNavLinkItem.propTypes = {
    category: PropTypes.objectOf(Category),
    button: PropTypes.element,
};
