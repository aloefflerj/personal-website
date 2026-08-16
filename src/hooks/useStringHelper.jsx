export const useStringHelper = () => {
    return {
        capitalizeFirstLetter: (word) => {
            return word.charAt(0).toUpperCase() + word.slice(1);
        },
        // Kept byte-identical to personal-website-admin's src/lib/slugify.js
        // and server/lib/validation.js's slugify. The three run in separate
        // JS contexts and cannot share an import; change all of them together.
        slugify: (text) =>
            text
                .toLowerCase()
                .trim()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/^-+|-+$/g, ''),
    };
};
