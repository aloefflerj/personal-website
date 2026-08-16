export const useMarkdownPath = () => {
    return {
        getInternalPath: (categoryKey, dir, segments, contentPath) => {
            return `/content/${[
                categoryKey,
                dir,
                ...segments,
                contentPath,
            ].join('/')}`;
        },
        getExternalGithubPath: (dir, segments, contentPath) => {
            return `https://raw.githubusercontent.com/aloefflerj/${dir}/main/${segments[0]}/steps/${contentPath}`;
        },
    };
};
