import { useEffect, useState } from 'react';
import { useCategoryDB } from './useCategoryDB';

export const useSubcategories = (category) => {
    const { fetchSubcategories } = useCategoryDB(category);
    const [subcategories, setSubcategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let active = true;

        setLoading(true);
        fetchSubcategories()
            .then((records) => {
                if (!active) return;
                setSubcategories(Array.isArray(records) ? records : []);
            })
            .catch(() => {
                if (active) setSubcategories([]);
            })
            .finally(() => {
                if (active) setLoading(false);
            });

        return () => {
            active = false;
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [category.categoryKey]);

    return { subcategories, loading };
};
