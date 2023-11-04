export const useCategoryDB = (category) => {
    return {
        fetchSubcategory: async (
            subcategory,
            config = {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                }
            }
        ) => {
            const folderPath = `/db/${category.categoryKey}/${subcategory}/${subcategory}.json`;
            const response = await fetch(folderPath, config);

            return await response.json();
        },
        fetchSubcategoryItemByLink: async (
            subcategory,
            link,
            config = {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                }
            }
        ) => {
            const folderPath = `/db/${category.categoryKey}/${subcategory}/${subcategory}.json`;
            const response = await fetch(folderPath, config);

            const jsonProjects = await response.json();
            let foundProject = null;
            jsonProjects.forEach((project) => {
                if (project.link === link) {
                    foundProject = project;
                }
            });

            return foundProject;
        },
    };
};
