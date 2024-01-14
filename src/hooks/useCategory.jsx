import {
    Blank,
    Code,
    Drawings,
    Game,
    Music,
    Worldbuilding,
} from '../categories/Categories';

export const useCategory = () => {
    return {
        getByKey: (key) => {
            switch (key) {
                case Blank.categoryKey:
                    return Blank;
                case Code.categoryKey:
                    return Code;
                case Drawings.categoryKey:
                    return Drawings;
                case Game.categoryKey:
                    return Game;
                case Music.categoryKey:
                    return Music;
                case Worldbuilding.categoryKey:
                    return Worldbuilding;
                default:
                    return Blank;
            }
        },
    };
};
