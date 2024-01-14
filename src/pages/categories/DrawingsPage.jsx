import { Blank, Drawings } from '../../categories/Categories';
import { CategoryPage } from '../CategoryPage';
import { CategoryContent } from '../../components/categories/CategoryContent';
import { Sidebar } from '../../elements/sidebar/Sidebar';
import { SidebarOption } from '../../elements/sidebar/SidebarOption';
import { useCategoryContext } from '../../hooks/useCategoryContext';
import { PixelCharContent } from '../../components/pixel/PixelCharContent';

import charImg from '/assets/img/guys/drawings-guy.png';
import { PixelCharImage } from '../../components/pixel/PixelCharImage';
import { Outlet } from 'react-router-dom';

export function DrawingsPage() {
    const { category, setCategory } = useCategoryContext();

    if (category === undefined || category === null || category === Blank) {
        setCategory(Drawings);
    }

    return (
        <CategoryPage>
            <Sidebar category={category}>
                <PixelCharContent >
                    <PixelCharImage src={charImg} />
                </PixelCharContent>
                <SidebarOption to="digital" category={Drawings}>
                    Digital
                </SidebarOption>
                <SidebarOption to="pixel" category={Drawings}>
                    Pixel Art
                </SidebarOption>
                <SidebarOption to="journal" category={Drawings}>
                    Journal
                </SidebarOption>
            </Sidebar>
            <CategoryContent category={Drawings}>
                <Outlet />
            </CategoryContent>
        </CategoryPage>
    );
}
