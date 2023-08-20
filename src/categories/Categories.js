import { CategoryBGColors, CategoryDarkColors, CategoryDarkerColors, CategoryMediumColors } from "../style/Colors";
import { CategoriesKeys } from "./CategoriesKeys";

class Category {
    constructor(
        categoryKey,
        title,
        img,
        bgColor,
        mediumColor,
        darkColor,
        darkerColor,
    ) {
        this.categoryKey = categoryKey;
        this.title = title;
        this.img = img;
        this.bgColor = bgColor;
        this.mediumColor = mediumColor;
        this.darkColor = darkColor;
        this.darkerColor = darkerColor;
    }
};

export const Blank = new Category(
    CategoriesKeys.blank,
    '',
    'blank-environment.png',
    CategoryBGColors.blank,
    CategoryMediumColors.blank,
    CategoryDarkColors.blank,
    CategoryDarkerColors.blank,
);

export const Code = new Category(
    CategoriesKeys.code,
    'Code',
    'code-environment.png',
    CategoryBGColors.code,
    CategoryMediumColors.code,
    CategoryDarkColors.code,
    CategoryDarkerColors.code,
);

export const Drawings = new Category(
    CategoriesKeys.drawings,
    'Drawings',
    'drawings-environment.png',
    CategoryBGColors.drawings,
    CategoryMediumColors.drawings,
    CategoryDarkColors.drawings,
    CategoryDarkerColors.drawings,
);

export const Game = new Category(
    CategoriesKeys.game,
    'Game',
    'game-environment.png',
    CategoryBGColors.game,
    CategoryMediumColors.game,
    CategoryDarkColors.game,
    CategoryDarkerColors.game,
);

export const Music = new Category(
    CategoriesKeys.music,
    'Music',
    'music-environment.png',
    CategoryBGColors.music,
    CategoryMediumColors.music,
    CategoryDarkColors.music,
    CategoryDarkerColors.music,
);

export const Worldbuilding = new Category(
    CategoriesKeys.worldbuilding,
    'Worldbuilding',
    'worldbuilding-environment.png',
    CategoryBGColors.worldbuilding,
    CategoryMediumColors.worldbuilding,
    CategoryDarkColors.worldbuilding,
    CategoryDarkerColors.worldbuilding,
);