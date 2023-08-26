import { useContext } from 'react';
import { CategoryContext } from '../contexts/CategoryContext';

export const useCategoryContext = () => {
    const context = useContext(CategoryContext);
    return context;
};
