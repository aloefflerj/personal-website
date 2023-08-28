export const useRequest = () => {
    return {
        fetchUrl: async (url, config) => {
            const response = await fetch(url, config);
            return await response.json();
        },
    };
};
