import { Blank, Music } from '../../categories/Categories';
import { CategoryPage } from '../CategoryPage';
import { CategoryContent } from '../../components/categories/CategoryContent';
import { Sidebar } from '../../elements/sidebar/Sidebar';
import { SidebarOption } from '../../elements/sidebar/SidebarOption';
import { useCategoryContext } from '../../hooks/useCategoryContext';
import { PixelCharContent } from '../../components/pixel/PixelCharContent';

import charImg from '/assets/img/guys/music-guy.png';
import { PixelCharImage } from '../../components/pixel/PixelCharImage';
import { Outlet } from 'react-router-dom';

export function MusicPage() {
    const { category, setCategory } = useCategoryContext();

    if (category === undefined || category === null || category === Blank) {
        setCategory(Music);
    }

    return (
        <CategoryPage>
            <Sidebar category={category}>
                <PixelCharContent >
                    <PixelCharImage src={charImg} />
                </PixelCharContent>
                <SidebarOption to="projects" category={Music}>
                    Projects
                </SidebarOption>
                <SidebarOption to="songs" category={Music}>
                    Songs
                </SidebarOption>
                <SidebarOption to="roadmaps" category={Music}>
                    Roadmaps
                </SidebarOption>
                <SidebarOption to="clips" category={Music}>
                    Clips
                </SidebarOption>
                <SidebarOption to="fave-albums" category={Music}>
                    Fave Albums
                </SidebarOption>
            </Sidebar>
            <CategoryContent category={Music}>
                <Outlet />
            </CategoryContent>
        </CategoryPage>
    );
}
