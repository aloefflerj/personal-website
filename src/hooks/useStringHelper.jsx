export const useStringHelper = () => {
    return {
        capitalizeFirstLetter: (word) => {
            return word.charAt(0).toUpperCase() + word.slice(1);
        },
    };
};
