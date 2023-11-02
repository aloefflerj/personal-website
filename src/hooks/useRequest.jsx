import _ from "lodash";

export const useRequest = () => {
    return {
        fetchUrl: async (url, config = {}, returnType = 'json') => {
            const response = await fetch(url, config);
            if (returnType === 'text')
                return await response.text();
            
            return await response.json();
        },
        fetchGithubEncryptedMarkdown: async (url, config) => {
            const response = await fetch(url, config);
            const stringResponse = await response.json();

            if (!_.isEmpty(stringResponse)) {
                return atob(stringResponse.content);
            }
        }
    };
};
