import {
    CategoryBGColors,
    CategoryDarkColors,
    CategoryDarkerColors,
    CategoryLightColors,
    CategoryMediumColors,
} from '../style/Colors';
import { CategoriesKeys } from './CategoriesKeys';

class Category {
    constructor(
        categoryKey,
        title,
        img,
        bgColor,
        mediumColor,
        lightColor,
        darkColor,
        darkerColor
    ) {
        this.categoryKey = categoryKey;
        this.title = title;
        this.img = img;
        this.bgColor = bgColor;
        this.mediumColor = mediumColor;
        this.lightColor = lightColor;
        this.darkColor = darkColor;
        this.darkerColor = darkerColor;
    }
}

export const Blank = new Category(
    CategoriesKeys.blank,
    '',
    'blank-environment.png',
    CategoryBGColors.blank,
    CategoryMediumColors.blank,
    CategoryLightColors.blank,
    CategoryDarkColors.blank,
    CategoryDarkerColors.blank
);

export const Code = new Category(
    CategoriesKeys.code,
    'Code',
    'code-environment.png',
    CategoryBGColors.code,
    CategoryMediumColors.code,
    CategoryLightColors.code,
    CategoryDarkColors.code,
    CategoryDarkerColors.code
);

export const Drawings = new Category(
    CategoriesKeys.drawings,
    'Drawings',
    'drawings-environment.png',
    CategoryBGColors.drawings,
    CategoryMediumColors.drawings,
    CategoryLightColors.drawings,
    CategoryDarkColors.drawings,
    CategoryDarkerColors.drawings
);

export const Game = new Category(
    CategoriesKeys.game,
    'Game',
    'game-environment.png',
    CategoryBGColors.game,
    CategoryMediumColors.game,
    CategoryLightColors.game,
    CategoryDarkColors.game,
    CategoryDarkerColors.game
);

export const Music = new Category(
    CategoriesKeys.music,
    'Music',
    'music-environment.png',
    CategoryBGColors.music,
    CategoryMediumColors.music,
    CategoryLightColors.music,
    CategoryDarkColors.music,
    CategoryDarkerColors.music
);

export const Worldbuilding = new Category(
    CategoriesKeys.worldbuilding,
    'Worldbuilding',
    'worldbuilding-environment.png',
    CategoryBGColors.worldbuilding,
    CategoryMediumColors.worldbuilding,
    CategoryLightColors.worldbuilding,
    CategoryDarkColors.worldbuilding,
    CategoryDarkerColors.worldbuilding
);
