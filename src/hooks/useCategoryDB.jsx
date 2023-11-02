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
        fetchRoadmapByLink: async (link) => {
            const folderPath = `/db/${category.categoryKey}/roadmaps/roadmaps.json`;
            const response = await fetch(folderPath, {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
            });

            const jsonRoadmaps = await response.json();
            let foundRoadmap = null;
            jsonRoadmaps.forEach((roadmap) => {
                if (roadmap.link === link) {
                    foundRoadmap = roadmap;
                }
            });

            return foundRoadmap;
        },
        fetchGames: async () => {
            const folderPath = `/db/${category.categoryKey}/games/games.json`;
            const response = await fetch(folderPath, {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
            });

            return await response.json();
        },
        fetchGameByLink: async (link) => {
            const folderPath = `/db/${category.categoryKey}/games/games.json`;
            const response = await fetch(folderPath, {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
            });

            const jsonGames = await response.json();
            let foundGame = null;
            jsonGames.forEach((game) => {
                if (game.link === link) {
                    foundGame = game;
                }
            });

            return foundGame;
        },
    };
};
