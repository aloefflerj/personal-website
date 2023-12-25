import { Blank, Worldbuilding } from '../../categories/Categories';
import { CategoryPage } from '../CategoryPage';
import { CategoryContent } from '../../components/categories/CategoryContent';
import { Sidebar } from '../../elements/sidebar/Sidebar';
import { SidebarOption } from '../../elements/sidebar/SidebarOption';
import { useCategoryContext } from '../../hooks/useCategoryContext';
import { PixelCharContent } from '../../components/pixel/PixelCharContent';

import charImg from '/assets/img/guys/worldbuilding-guy.png';
import { PixelCharImage } from '../../components/pixel/PixelCharImage';
import { Outlet } from 'react-router-dom';

export function WorldbuildingPage() {
    const { category, setCategory } = useCategoryContext();

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
                <Outlet />
            </CategoryContent>
        </CategoryPage>
    );
}
