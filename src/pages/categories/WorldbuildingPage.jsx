import { Blank, Worldbuilding } from '../../categories/Categories';
import { CategoryPage } from '../CategoryPage';
import { CategoryContent } from '../../components/categories/CategoryContent';
import { Sidebar } from '../../elements/sidebar/Sidebar';
import { SidebarOption } from '../../elements/sidebar/SidebarOption';
import { useCategoryContext } from '../../hooks/useCategoryContext';
import { PixelCharContent } from '../../components/pixel/PixelCharContent';

import charImg from '/assets/img/guys/worldbuilding-guy.png';
import { PixelCharImage } from '../../components/pixel/PixelCharImage';

export function WorldbuildingPage() {
    const { category, setCategory } = useCategoryContext();

    if (category === undefined || category === null || category === Blank) {
        setCategory(Worldbuilding);
    }

    return (
        <CategoryPage title={Worldbuilding.title}>
            <Sidebar category={category}>
                <PixelCharContent brightnessPercentage={100}>
                    <PixelCharImage src={charImg} $brightnessPercentage={100} />
                </PixelCharContent>
                <SidebarOption category={Worldbuilding}>Projects</SidebarOption>
                <SidebarOption category={Worldbuilding}>Roadmap</SidebarOption>
                <SidebarOption category={Worldbuilding}>Blog</SidebarOption>
                <SidebarOption category={Worldbuilding}>
                    App&apos;s
                </SidebarOption>
            </Sidebar>
            <CategoryContent category={Worldbuilding} />
        </CategoryPage>
    );
}
