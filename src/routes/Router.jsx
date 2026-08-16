import { Route, Routes } from 'react-router-dom';
import { CodePage } from '../pages/categories/CodePage';
import { DrawingsPage } from '../pages/categories/DrawingsPage';
import { GamePage } from '../pages/categories/GamePage';
import { MusicPage } from '../pages/categories/MusicPage';
import { WorldbuildingPage } from '../pages/categories/WorldbuildingPage';
import { Home } from '../pages/Home';
import { FolderPage } from '../pages/folder/FolderPage';
import {
    Code,
    Drawings,
    Game,
    Music,
    Worldbuilding,
} from '../categories/Categories';

const categoryRoutes = [
    { path: 'code', element: <CodePage />, category: Code },
    { path: 'drawings', element: <DrawingsPage />, category: Drawings },
    { path: 'game', element: <GamePage />, category: Game },
    { path: 'music', element: <MusicPage />, category: Music },
    {
        path: 'worldbuilding',
        element: <WorldbuildingPage />,
        category: Worldbuilding,
    },
];

export function Router() {
    return (
        <Routes>
            <Route path="/">
                <Route path="" element={<Home />} />
                {categoryRoutes.map(({ path, element, category }) => (
                    <Route key={path} path={path} element={element}>
                        <Route
                            path=":subcategory/*"
                            element={<FolderPage category={category} />}
                        />
                    </Route>
                ))}
                <Route path="*" element={<h1>not found</h1>} />
            </Route>
        </Routes>
    );
}
