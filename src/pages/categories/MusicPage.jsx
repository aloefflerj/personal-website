import { Blank, Music } from "../../categories/Categories";
import { CategoryPage } from "../CategoryPage";
import { CategoryContent } from "../../components/categories/CategoryContent";
import { Sidebar } from "../../elements/sidebar/Sidebar";
import { SidebarOption } from "../../elements/sidebar/SidebarOption";
import { useCategoryContext } from "../../hooks/useCategoryContext";
import { PixelCharContent } from "../../components/pixel/PixelCharContent";

import charImg from '/assets/img/guys/music-guy.png'; 
import { PixelCharImage } from "../../components/pixel/PixelCharImage";

export function MusicPage() {
    const {category, setCategory} = useCategoryContext();

    if (
        category === undefined ||
        category === null ||
        category === Blank
    ) {
        setCategory(Music);
    }

    return (
        <CategoryPage title={Music.title}>
            <Sidebar category={category}>
                <PixelCharContent brightnessPercentage={100}>
                    <PixelCharImage src={charImg}
                        $brightnessPercentage={100}
                    />
                </PixelCharContent>
                <SidebarOption category={Music}>
                    Projects
                </SidebarOption>
                <SidebarOption category={Music}>
                    Roadmap
                </SidebarOption>
                <SidebarOption category={Music}>
                    Blog
                </SidebarOption>
                <SidebarOption category={Music}>
                    App's
                </SidebarOption>
            </Sidebar>
        <CategoryContent category={Music}/>
        </CategoryPage>
    );
}