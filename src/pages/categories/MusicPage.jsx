import { Blank, Music } from '../../categories/Categories';
import { CategoryPage } from '../CategoryPage';
import { CategoryContent } from '../../components/categories/CategoryContent';
import { Sidebar } from '../../elements/sidebar/Sidebar';
import { SidebarOption } from '../../elements/sidebar/SidebarOption';
import { useCategoryContext } from '../../hooks/useCategoryContext';
import { PixelCharContent } from '../../components/pixel/PixelCharContent';

import charImg from '/assets/img/guys/music-guy.png';
import { PixelCharImage } from '../../components/pixel/PixelCharImage';
import { Outlet, useOutlet } from 'react-router-dom';
import { FoldersLayout } from '../folders-layout/FoldersLayout';
import { SubcategoriesList } from '../subcategories/SubcategoriesPage';
import { SubcategoryItem } from '../../components/subcategories/SubcategoryItem';
import { useEffect } from 'react';

export function MusicPage() {
    const { category, setCategory } = useCategoryContext();
    const outlet = useOutlet();

    useEffect(() => {
        if (category === undefined || category === null || category === Blank) {
            setCategory(Music);
        }
    }, [category, setCategory]);

    return (
        <CategoryPage>
            <Sidebar category={category}>
                <PixelCharContent>
                    <PixelCharImage src={charImg} />
                </PixelCharContent>
                <SidebarOption to="projects" category={Music}>
                    Projects
                </SidebarOption>
                <SidebarOption to="short" category={Music}>
                    Short
                </SidebarOption>
                {/* <SidebarOption to="clips" category={Music}>
                    Clips
                </SidebarOption> */}
                {/* <SidebarOption to="fave-albums" category={Music}>
                    Fave Albums
                </SidebarOption> */}
            </Sidebar>
            <CategoryContent category={Music}>
                {outlet ? (
                    <Outlet />
                ) : (
                    <FoldersLayout category={Music} title={'Music'}>
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
                                to="short"
                                title="Short"
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
