export const useCategoryDB = (category) => {
    return {
        fetchProjects: async () => {
            const folderPath = `/db/${category.categoryKey}/projects/projects.json`;
            const response = await fetch(folderPath, {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
            });

            return await response.json();
        },
        fetchProjectByLink: async (link) => {
            const folderPath = `/db/${category.categoryKey}/projects/projects.json`;
            const response = await fetch(folderPath, {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
            });

            const jsonProjects = await response.json();
            let foundProject = null;
            jsonProjects.forEach((project) => {
                if (project.link === link) {
                    foundProject = project;
                }
            });

            return foundProject;
        },
        fetchRoadmaps: async () => {
            const folderPath = `/db/${category.categoryKey}/roadmaps/roadmaps.json`;
            const response = await fetch(folderPath, {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
            });

            return await response.json();
        },
    };
};
