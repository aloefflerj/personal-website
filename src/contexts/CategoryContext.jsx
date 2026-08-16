import { createContext } from 'react';
import { useState } from 'react';
import { Blank } from '../categories/Categories';
import PropTypes from 'prop-types';

export const CategoryContext = createContext({});

export const CategoryProvider = ({ children }) => {
    const [category, setCategory] = useState(Blank);
    const [breadcrumbTrail, setBreadcrumbTrail] = useState(null);

    return (
        <CategoryContext.Provider
            value={{
                category,
                setCategory,
                breadcrumbTrail,
                setBreadcrumbTrail,
            }}
        >
            {children}
        </CategoryContext.Provider>
    );
};

CategoryProvider.propTypes = {
    children: PropTypes.element,
};
