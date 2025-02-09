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
import { SubcategoriesList } from '../subcategories/SubcategoriesPage';
import { SubcategoryItem } from '../../components/subcategories/SubcategoryItem';

export function WorldbuildingPage() {
    const { category, setCategory } = useCategoryContext();
    const outlet = useOutlet();

    if (category === undefined || category === null || category === Blank) {
        setCategory(Worldbuilding);
    }

    return (
        <CategoryPage>
            <Sidebar category={category}>
                <PixelCharContent >
                    <PixelCharImage src={charImg} />
                </PixelCharContent>
                <SidebarOption to="projects" category={Worldbuilding}>
                    Projects
                </SidebarOption>
                <SidebarOption to="roadmaps" category={Worldbuilding}>
                    Roadmaps
                </SidebarOption>
            </Sidebar>
            <CategoryContent category={Worldbuilding}>
            {outlet ?
                    <Outlet /> :
                    <FoldersLayout
                        category={Worldbuilding}
                        title={'Worldbuilding'}
                    >
                        <SubcategoriesList
                            $bgColor={category.darkColor}
                        >
                            <SubcategoryItem
                                id={1}
                                to='projects'
                                title='Projects'
                                key={1}
                                category={category}
                                contentType='folder'
                            />
                            <SubcategoryItem
                                id={2}
                                to='roadmaps'
                                title='Roadmaps'
                                key={2}
                                category={category}
                                contentType='folder'
                            />
                        </SubcategoriesList>
                    </FoldersLayout>
                }
            </CategoryContent>
        </CategoryPage>
    );
}
