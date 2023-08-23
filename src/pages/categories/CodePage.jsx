import { Blank, Code } from "../../categories/Categories";
import { CategoryPage } from "../CategoryPage";
import { CategoryContent } from "../../components/CategoryContent";
import { Sidebar } from "../../components/Sidebar";
import { SidebarOption } from "../../components/SidebarOption";
import { useCategoryContext } from "../../hooks/useCategoryContext";

export function CodePage() {
    const {category, setCategory} = useCategoryContext();

    if (
        category === undefined ||
        category === null ||
        category === Blank
    ) {
        setCategory(Code);
    }

    return (
        <CategoryPage title={Code.title}>
            <Sidebar>
                <SidebarOption category={Code}>
                    Projects
                </SidebarOption>
                <SidebarOption category={Code}>
                    Roadmap
                </SidebarOption>
                <SidebarOption category={Code}>
                    Blog
                </SidebarOption>
                <SidebarOption category={Code}>
                    App's
                </SidebarOption>
            </Sidebar>
        <CategoryContent title={Code.title}/>
        </CategoryPage>
    );
}