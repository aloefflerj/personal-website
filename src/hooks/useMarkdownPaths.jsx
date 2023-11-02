export const useMarkdownPath = () => {
    return {
        getInternalPath: (category, subcategory, subcategoryItem, subcategoryItemContentLink) => {
            return `/content/${category}/${subcategory}/${subcategoryItem}/${subcategoryItemContentLink}`;
        },
        getExternalGithubPath: (subcategory, subcategoryItem, subcategoryItemContentLink) => {
            return `https://raw.githubusercontent.com/aloefflerj/${subcategory}/main/${subcategoryItem}/steps/${subcategoryItemContentLink}`;
        }
    };
};
