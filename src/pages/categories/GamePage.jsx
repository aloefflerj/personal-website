import { Blank, Game } from '../../categories/Categories';
import { CategoryPage } from '../CategoryPage';
import { CategoryContent } from '../../components/categories/CategoryContent';
import { Sidebar } from '../../elements/sidebar/Sidebar';
import { SidebarOption } from '../../elements/sidebar/SidebarOption';
import { useCategoryContext } from '../../hooks/useCategoryContext';
import { PixelCharContent } from '../../components/pixel/PixelCharContent';

import charImg from '/assets/img/guys/game-guy.png';
import { PixelCharImage } from '../../components/pixel/PixelCharImage';
import { Outlet, useOutlet } from 'react-router-dom';
import { FoldersLayout } from '../folders-layout/FoldersLayout';
import { SubcategoriesList } from '../subcategories/SubcategoriesPage';
import { SubcategoryItem } from '../../components/subcategories/SubcategoryItem';
import { useEffect } from 'react';

export function GamePage() {
    const { category, setCategory } = useCategoryContext();
    const outlet = useOutlet();

    useEffect(() => {
        if (category === undefined || category === null || category === Blank) {
            setCategory(Game);
        }
    }, [category, setCategory]);

    return (
        <CategoryPage>
            <Sidebar category={category}>
                <PixelCharContent>
                    <PixelCharImage src={charImg} />
                </PixelCharContent>
                <SidebarOption to="projects" category={Game}>
                    Projects
                </SidebarOption>
                <SidebarOption to="games" category={Game}>
                    Games
                </SidebarOption>
            </Sidebar>
            <CategoryContent category={Game}>
                {outlet ? (
                    <Outlet />
                ) : (
                    <FoldersLayout category={Game} title={'Game'}>
                        <SubcategoriesList $bgColor={category.darkColor}>
                            <SubcategoryItem
                                id={1}
                                to="projects"
                                title="Projects"
                                key={1}
                                category={category}
                                contentType="folder"
                            />
                            <SubcategoryItem
                                id={2}
                                to="games"
                                title="Games"
                                key={2}
                                category={category}
                                contentType="folder"
                            />
                        </SubcategoriesList>
                    </FoldersLayout>
                )}
            </CategoryContent>
        </CategoryPage>
    );
}
