export const useRequest = () => {
    return {
        fetchUrl: async (url, config = {}, returnType = 'json') => {
            const response = await fetch(url, config);
            if (returnType === 'text')
                return await response.text();
            
            return await response.json();
        },
    };
};
