import { Blank, Code } from '../../categories/Categories';
import { CategoryPage } from '../CategoryPage';
import { CategoryContent } from '../../components/categories/CategoryContent';
import { Sidebar } from '../../elements/sidebar/Sidebar';
import { SidebarOption } from '../../elements/sidebar/SidebarOption';
import { useCategoryContext } from '../../hooks/useCategoryContext';
import { PixelCharContent } from '../../components/pixel/PixelCharContent';

import charImg from '/assets/img/guys/code-guy.png';
import { PixelCharImage } from '../../components/pixel/PixelCharImage';
import { Outlet } from 'react-router-dom';

export function CodePage() {
    const { category, setCategory } = useCategoryContext();

    if (category === undefined || category === null || category === Blank) {
        setCategory(Code);
    }

    return (
        <CategoryPage>
            <Sidebar category={category}>
                <PixelCharContent>
                    <PixelCharImage src={charImg} />
                </PixelCharContent>
                <SidebarOption to="projects" category={Code}>
                    Projects
                </SidebarOption>
                <SidebarOption to="roadmaps" category={Code}>
                    Roadmap
                </SidebarOption>
                <SidebarOption to="blog" category={Code}>
                    Blog
                </SidebarOption>
                <SidebarOption to="app" category={Code}>
                    App&apos;s
                </SidebarOption>
            </Sidebar>
            <CategoryContent category={Code}>
                <Outlet />
            </CategoryContent>
        </CategoryPage>
    );
}
