export const useCategoryDB = (category, table) => {
    return {
        fetchData: async () => {
            const folderPath = `/src/db/${category.categoryKey}/${table}.json`;
            const response = await fetch(folderPath, {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
            });

            return response.json();
        },
    };
};
