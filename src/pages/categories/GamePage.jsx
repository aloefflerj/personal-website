import { Blank, Game } from '../../categories/Categories';
import { CategoryPage } from '../CategoryPage';
import { CategoryContent } from '../../components/categories/CategoryContent';
import { Sidebar } from '../../elements/sidebar/Sidebar';
import { SidebarOption } from '../../elements/sidebar/SidebarOption';
import { useCategoryContext } from '../../hooks/useCategoryContext';
import { PixelCharContent } from '../../components/pixel/PixelCharContent';

import charImg from '/assets/img/guys/game-guy.png';
import { PixelCharImage } from '../../components/pixel/PixelCharImage';

export function GamePage() {
    const { category, setCategory } = useCategoryContext();

    if (category === undefined || category === null || category === Blank) {
        setCategory(Game);
    }

    return (
        <CategoryPage title={Game.title}>
            <Sidebar category={category}>
                <PixelCharContent brightnessPercentage={100}>
                    <PixelCharImage src={charImg} $brightnessPercentage={100} />
                </PixelCharContent>
                <SidebarOption category={Game}>Projects</SidebarOption>
                <SidebarOption category={Game}>Roadmap</SidebarOption>
                <SidebarOption category={Game}>Blog</SidebarOption>
                <SidebarOption category={Game}>App&apos;s</SidebarOption>
            </Sidebar>
            <CategoryContent category={Game} />
        </CategoryPage>
    );
}
