import { createContext } from 'react';
import { useState } from 'react';
import { Blank } from '../categories/Categories';

export const CategoryContext = createContext({});

export const CategoryProvider = ({ children }) => {
    const [category, setCategory] = useState(Blank);

    return (
        <CategoryContext.Provider value={{ category, setCategory }}>
            {children}
        </CategoryContext.Provider>
    );
};
