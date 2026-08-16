import { Blank, Worldbuilding } from '../../categories/Categories';
import { CategoryPage } from '../CategoryPage';
import { CategoryContent } from '../../components/categories/CategoryContent';
import { Sidebar } from '../../elements/sidebar/Sidebar';
import { SidebarOption } from '../../elements/sidebar/SidebarOption';
import { useCategoryContext } from '../../hooks/useCategoryContext';
import { PixelCharContent } from '../../components/pixel/PixelCharContent';

import charImg from '/assets/img/guys/worldbuilding-guy.png';
import { PixelCharImage } from '../../components/pixel/PixelCharImage';
import { Outlet, useOutlet } from 'react-router-dom';
import { FoldersLayout } from '../folders-layout/FoldersLayout';
import { FolderGrid } from '../../components/folder/FolderGrid';
import { useSubcategories } from '../../hooks/useSubcategories';
import { useEffect } from 'react';

export function WorldbuildingPage() {
    const { category, setCategory } = useCategoryContext();
    const outlet = useOutlet();
    const { subcategories } = useSubcategories(Worldbuilding);

    useEffect(() => {
        if (category === undefined || category === null || category === Blank) {
            setCategory(Worldbuilding);
        }
    }, [category, setCategory]);

    return (
        <CategoryPage>
            <Sidebar category={category}>
                <PixelCharContent>
                    <PixelCharImage src={charImg} />
                </PixelCharContent>
                {subcategories.map((record) => (
                    <SidebarOption
                        key={record.link}
                        to={record.link}
                        category={Worldbuilding}
                    >
                        {record.title}
                    </SidebarOption>
                ))}
            </Sidebar>
            <CategoryContent category={Worldbuilding}>
                {outlet ? (
                    <Outlet />
                ) : (
                    <FoldersLayout
                        category={Worldbuilding}
                        title={'Worldbuilding'}
                    >
                        <FolderGrid
                            items={subcategories}
                            category={category}
                            basePath={`/${Worldbuilding.categoryKey}`}
                        />
                    </FoldersLayout>
                )}
            </CategoryContent>
        </CategoryPage>
    );
}
