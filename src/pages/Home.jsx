import { CategorySelector } from '../components/categories/CategorySelector';
import { PixelArtContent } from '../components/pixel/PixelArtContent';
import { HomePageLayout } from './HomePageLayout';

export function Home() {
    return (
        <HomePageLayout>
            <PixelArtContent>
                <CategorySelector />
            </PixelArtContent>
        </HomePageLayout>
    );
}
