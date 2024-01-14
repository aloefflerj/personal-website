import { Blank, Game } from '../../categories/Categories';
import { CategoryPage } from '../CategoryPage';
import { CategoryContent } from '../../components/categories/CategoryContent';
import { Sidebar } from '../../elements/sidebar/Sidebar';
import { SidebarOption } from '../../elements/sidebar/SidebarOption';
import { useCategoryContext } from '../../hooks/useCategoryContext';
import { PixelCharContent } from '../../components/pixel/PixelCharContent';

import charImg from '/assets/img/guys/game-guy.png';
import { PixelCharImage } from '../../components/pixel/PixelCharImage';
import { Outlet } from 'react-router-dom';

export function GamePage() {
    const { category, setCategory } = useCategoryContext();

    if (category === undefined || category === null || category === Blank) {
        setCategory(Game);
    }

    return (
        <CategoryPage>
            <Sidebar category={category}>
                <PixelCharContent >
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
                <Outlet />
            </CategoryContent>
        </CategoryPage>
    );
}
