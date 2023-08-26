import { CategoryPageLayout } from './CategoryPageLayout';
import PropTypes from 'prop-types';

export function CategoryPage({ children }) {
    return <CategoryPageLayout>{children}</CategoryPageLayout>;
}

CategoryPage.propTypes = {
    children: PropTypes.element,
};
