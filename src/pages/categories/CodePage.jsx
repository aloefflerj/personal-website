import { Blank, Code } from '../../categories/Categories';
import { CategoryPage } from '../CategoryPage';
import { CategoryContent } from '../../components/categories/CategoryContent';
import { Sidebar } from '../../elements/sidebar/Sidebar';
import { SidebarOption } from '../../elements/sidebar/SidebarOption';
import { useCategoryContext } from '../../hooks/useCategoryContext';
import { PixelCharContent } from '../../components/pixel/PixelCharContent';

import charImg from '/assets/img/guys/code-guy.png';
import { PixelCharImage } from '../../components/pixel/PixelCharImage';
import { Outlet, useOutlet } from 'react-router-dom';
import { FoldersLayout } from '../folders-layout/FoldersLayout';
import { FolderGrid } from '../../components/folder/FolderGrid';
import { useSubcategories } from '../../hooks/useSubcategories';
import { useEffect } from 'react';

export function CodePage() {
    const { category, setCategory } = useCategoryContext();
    const outlet = useOutlet();
    const { subcategories } = useSubcategories(Code);

    useEffect(() => {
        if (category === undefined || category === null || category === Blank) {
            setCategory(Code);
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
                        category={Code}
                    >
                        {record.title}
                    </SidebarOption>
                ))}
            </Sidebar>
            <CategoryContent category={category}>
                {outlet ? (
                    <Outlet />
                ) : (
                    <FoldersLayout category={Code} title={'Code'}>
                        <FolderGrid items={subcategories} category={category} />
                    </FoldersLayout>
                )}
            </CategoryContent>
        </CategoryPage>
    );
}
