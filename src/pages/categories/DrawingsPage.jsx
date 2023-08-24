import { Blank, Drawings } from "../../categories/Categories";
import { CategoryPage } from "../CategoryPage";
import { CategoryContent } from "../../components/categories/CategoryContent";
import { Sidebar } from "../../elements/sidebar/Sidebar";
import { SidebarOption } from "../../elements/sidebar/SidebarOption";
import { useCategoryContext } from "../../hooks/useCategoryContext";
import { PixelCharContent } from "../../components/pixel/PixelCharContent";

import charImg from '/assets/img/guys/drawings-guy.png'; 
import { PixelCharImage } from "../../components/pixel/PixelCharImage";

export function DrawingsPage() {
    const {category, setCategory} = useCategoryContext();

    if (
        category === undefined ||
        category === null ||
        category === Blank
    ) {
        setCategory(Drawings);
    }

    return (
        <CategoryPage title={Drawings.title}>
            <Sidebar category={category}>
                <PixelCharContent brightnessPercentage={100}>
                    <PixelCharImage src={charImg}
                        $brightnessPercentage={100}
                    />
                </PixelCharContent>
                <SidebarOption category={Drawings}>
                    Projects
                </SidebarOption>
                <SidebarOption category={Drawings}>
                    Roadmap
                </SidebarOption>
                <SidebarOption category={Drawings}>
                    Blog
                </SidebarOption>
                <SidebarOption category={Drawings}>
                    App's
                </SidebarOption>
            </Sidebar>
        <CategoryContent category={Drawings}/>
        </CategoryPage>
    );
}