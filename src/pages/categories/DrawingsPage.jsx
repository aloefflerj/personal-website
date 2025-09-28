import { Blank, Drawings } from '../../categories/Categories';
import { CategoryPage } from '../CategoryPage';
import { CategoryContent } from '../../components/categories/CategoryContent';
import { Sidebar } from '../../elements/sidebar/Sidebar';
import { SidebarOption } from '../../elements/sidebar/SidebarOption';
import { useCategoryContext } from '../../hooks/useCategoryContext';
import { PixelCharContent } from '../../components/pixel/PixelCharContent';

import charImg from '/assets/img/guys/drawings-guy.png';
import { PixelCharImage } from '../../components/pixel/PixelCharImage';
import { Outlet, useOutlet } from 'react-router-dom';
import { FoldersLayout } from '../folders-layout/FoldersLayout';
import { SubcategoriesList } from '../subcategories/SubcategoriesPage';
import { SubcategoryItem } from '../../components/subcategories/SubcategoryItem';
import { useEffect } from 'react';

export function DrawingsPage() {
    const { category, setCategory } = useCategoryContext();
    const outlet = useOutlet();

    if (category === undefined || category === null || category === Blank) {
        setCategory(Drawings);
    }

    useEffect(() => {
        if (category === undefined || category === null || category === Blank) {
            setCategory(Drawings);
        }
    }, [category, setCategory]);

    return (
        <CategoryPage>
            <Sidebar category={category}>
                <PixelCharContent>
                    <PixelCharImage src={charImg} />
                </PixelCharContent>
                <SidebarOption to="animation" category={Drawings}>
                    Animation
                </SidebarOption>
                <SidebarOption to="digital" category={Drawings}>
                    Digital
                </SidebarOption>
                <SidebarOption to="pixel" category={Drawings}>
                    Pixel Art
                </SidebarOption>
            </Sidebar>
            <CategoryContent category={Drawings}>
                {outlet ? (
                    <Outlet />
                ) : (
                    <FoldersLayout category={Drawings} title={'Drawings'}>
                        <SubcategoriesList $bgColor={category.darkColor}>
                            <SubcategoryItem
                                id={3}
                                to="animation"
                                title="Animation"
                                key={3}
                                category={category}
                                contentType="folder"
                            />
                            <SubcategoryItem
                                id={1}
                                to="digital"
                                title="Digital"
                                key={1}
                                category={category}
                                contentType="folder"
                            />
                            <SubcategoryItem
                                id={2}
                                to="pixel"
                                title="Pixel Art"
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
