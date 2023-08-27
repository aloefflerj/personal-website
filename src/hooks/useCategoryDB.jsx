export const useCategoryDB = (category, table) => {
    return {
        fetchData: async () => {
            const folderPath = `/db/${category.categoryKey}/${table}.json`;
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
