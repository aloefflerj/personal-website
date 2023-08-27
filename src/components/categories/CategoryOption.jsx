import { Blank } from '../../categories/Categories';
import { useCategoryContext } from '../../hooks/useCategoryContext';
import { Option } from '../../style/Option';
import PropTypes from 'prop-types';

export function CategoryOption({ children, buttonCategory }) {
    const { category, setCategory } = useCategoryContext();

    const changeCategory = (category) => {
        setCategory(category);
    };

    return (
        <Option
            $category={category}
            onMouseOver={() => changeCategory(buttonCategory)}
            onMouseLeave={() => changeCategory(Blank)}
        >
            {children}
        </Option>
    );
}

CategoryOption.propTypes = {
    children: PropTypes.string,
    buttonCategory: PropTypes.object,
};
