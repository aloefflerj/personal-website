import { Route, Routes } from 'react-router-dom';
import { CodePage } from '../pages/categories/CodePage';
import { DrawingsPage } from '../pages/categories/DrawingsPage';
import { GamePage } from '../pages/categories/GamePage';
import { MusicPage } from '../pages/categories/MusicPage';
import { WorldbuildingPage } from '../pages/categories/WorldbuildingPage';
import { Home } from '../pages/Home';
import { ProjectsPage } from '../pages/projects/ProjectsPage';
import { Code } from '../categories/Categories';
import { ProjectPage } from '../pages/projects/ProjectPage';

export function Router() {
    return (
        <Routes>
            <Route path="/">
                <Route path="" element={<Home />} />
                <Route path="code" element={<CodePage />}>
                    <Route
                        path="projects"
                        element={<ProjectsPage category={Code} />}
                    >
                        <Route
                            path=":projectId"
                            element={<ProjectPage category={Code} />}
                        />
                    </Route>
                </Route>
                <Route path="drawings" element={<DrawingsPage />} />
                <Route path="game" element={<GamePage />} />
                <Route path="music" element={<MusicPage />} />
                <Route path="worldbuilding" element={<WorldbuildingPage />} />
                <Route path="*" element={<h1>not found</h1>} />
            </Route>
        </Routes>
    );
}
