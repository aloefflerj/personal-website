import { NavLink } from 'react-router-dom';
import { CategoryOption } from './CategoryOption';
import PropTypes from 'prop-types';
import { Category } from '../../categories/Categories';
import { If } from '../If';

export function CategoryNavLinkItem({ category, button = null }) {
    console.log(button)
    return (
        <NavLink to={category.categoryKey}>
            <If is={button === null}>
                <CategoryOption buttonCategory={category}>
                    {category.title}
                </CategoryOption>
            </If>
            <If is={button !== null}>{button}</If>
        </NavLink>
    );
}

CategoryNavLinkItem.propTypes = {
    category: PropTypes.objectOf(Category),
    button: PropTypes.element,
};
