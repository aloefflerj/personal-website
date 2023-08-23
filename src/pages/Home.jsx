import { CategorySelector } from "../components/categories/CategorySelector";
import { PixelArtContent } from "../components/PixelArtContent";
import { HomePageLayout } from "./HomePageLayout";

export function Home() {
    return (
        <HomePageLayout>
            <PixelArtContent>
                <CategorySelector />
            </PixelArtContent>
        </HomePageLayout>
    )
}