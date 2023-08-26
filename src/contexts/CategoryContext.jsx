import { createContext } from 'react';
import { useState } from 'react';
import { Blank } from '../categories/Categories';
import PropTypes from 'prop-types';

export const CategoryContext = createContext({});

export const CategoryProvider = ({ children }) => {
    const [category, setCategory] = useState(Blank);

    return (
        <CategoryContext.Provider value={{ category, setCategory }}>
            {children}
        </CategoryContext.Provider>
    );
};

CategoryProvider.propTypes = {
    children: PropTypes.element,
};
