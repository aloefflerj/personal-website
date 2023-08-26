import { Blank, Code } from '../../categories/Categories';
import { CategoryPage } from '../CategoryPage';
import { CategoryContent } from '../../components/categories/CategoryContent';
import { Sidebar } from '../../elements/sidebar/Sidebar';
import { SidebarOption } from '../../elements/sidebar/SidebarOption';
import { useCategoryContext } from '../../hooks/useCategoryContext';
import { PixelCharContent } from '../../components/pixel/PixelCharContent';

import charImg from '/assets/img/guys/code-guy.png';
import { PixelCharImage } from '../../components/pixel/PixelCharImage';

export function CodePage() {
    const { category, setCategory } = useCategoryContext();

    if (category === undefined || category === null || category === Blank) {
        setCategory(Code);
    }

    return (
        <CategoryPage title={Code.title}>
            <Sidebar category={category}>
                <PixelCharContent brightnessPercentage={100}>
                    <PixelCharImage src={charImg} $brightnessPercentage={100} />
                </PixelCharContent>
                <SidebarOption category={Code}>Projects</SidebarOption>
                <SidebarOption category={Code}>Roadmap</SidebarOption>
                <SidebarOption category={Code}>Blog</SidebarOption>
                <SidebarOption category={Code}>App's</SidebarOption>
            </Sidebar>
            <CategoryContent category={Code} />
        </CategoryPage>
    );
}
