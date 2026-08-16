export const useCategoryDB = (category) => {
    return {
        fetchSubcategories: async (
            config = {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
            }
        ) => {
            const indexPath = `/db/${category.categoryKey}/${category.categoryKey}.json`;
            const response = await fetch(indexPath, config);

            return await response.json();
        },
        fetchSubcategory: async (
            subcategory,
            config = {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
            }
        ) => {
            const folderPath = `/db/${category.categoryKey}/${subcategory}/${subcategory}.json`;
            const response = await fetch(folderPath, config);

            return await response.json();
        },
    };
};
