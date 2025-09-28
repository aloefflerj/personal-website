import { Route, Routes } from 'react-router-dom';
import { CodePage } from '../pages/categories/CodePage';
import { DrawingsPage } from '../pages/categories/DrawingsPage';
import { GamePage } from '../pages/categories/GamePage';
import { MusicPage } from '../pages/categories/MusicPage';
import { WorldbuildingPage } from '../pages/categories/WorldbuildingPage';
import { Home } from '../pages/Home';
import { SubcategoriesPage } from '../pages/subcategories/SubcategoriesPage';
import {
    Code,
    Drawings,
    Game,
    Music,
    Worldbuilding,
} from '../categories/Categories';
import { ProjectPage } from '../pages/projects/ProjectPage';
import { RoadmapPage } from '../pages/roadmaps/RoadmapPage';
import { GamesPage } from '../pages/games/GamesPage';
import { MarkdownPathType } from '../common/MarkdownPathType';
import { SongPage } from '../pages/songs/SongPage';
import { DigitalPaintingPage } from '../pages/digital-painting/DigitalPaintingPage';
import { PixelArtPage } from '../pages/pixel-art/PixelArtPage';
import { AnimationPage } from '../pages/animation/AnimationPage';

export function Router() {
    return (
        <Routes>
            <Route path="/">
                <Route path="" element={<Home />} />
                <Route path="code" element={<CodePage />}>
                    <Route
                        path="projects"
                        element={
                            <SubcategoriesPage
                                category={Code}
                                page="projects"
                            />
                        }
                    >
                        <Route
                            path=":link"
                            element={
                                <ProjectPage
                                    category={Code}
                                    markdownPathType={
                                        MarkdownPathType.githubApi
                                    }
                                />
                            }
                        />
                    </Route>
                    <Route
                        path="roadmaps"
                        element={
                            <SubcategoriesPage
                                category={Code}
                                page="roadmaps"
                            />
                        }
                    >
                        <Route
                            path=":link"
                            element={
                                <RoadmapPage
                                    category={Code}
                                    markdownPathType={
                                        MarkdownPathType.githubRaw
                                    }
                                />
                            }
                        />
                    </Route>
                </Route>
                <Route path="drawings" element={<DrawingsPage />}>
                    <Route
                        path="animation"
                        element={
                            <SubcategoriesPage
                                category={Drawings}
                                page="animation"
                            />
                        }
                    >
                        <Route
                            path=":link"
                            element={
                                <AnimationPage
                                    category={Drawings}
                                    markdownPathType={MarkdownPathType.internal}
                                />
                            }
                        />
                    </Route>
                    <Route
                        path="digital"
                        element={
                            <SubcategoriesPage
                                category={Drawings}
                                page="digital"
                            />
                        }
                    >
                        <Route
                            path=":link"
                            element={
                                <DigitalPaintingPage
                                    category={Drawings}
                                    markdownPathType={MarkdownPathType.internal}
                                />
                            }
                        />
                    </Route>
                    <Route
                        path="pixel"
                        element={
                            <SubcategoriesPage
                                category={Drawings}
                                page="pixel"
                            />
                        }
                    >
                        <Route
                            path=":link"
                            element={
                                <PixelArtPage
                                    category={Drawings}
                                    markdownPathType={MarkdownPathType.internal}
                                />
                            }
                        />
                    </Route>
                </Route>
                <Route path="game" element={<GamePage />}>
                    <Route
                        path="projects"
                        element={
                            <SubcategoriesPage
                                category={Game}
                                page="projects"
                            />
                        }
                    >
                        <Route
                            path=":link"
                            element={
                                <ProjectPage
                                    category={Game}
                                    markdownPathType={MarkdownPathType.internal}
                                />
                            }
                        />
                    </Route>
                    <Route
                        path="games"
                        element={
                            <SubcategoriesPage category={Game} page="games" />
                        }
                    >
                        <Route
                            path=":link"
                            element={
                                <GamesPage
                                    category={Game}
                                    markdownPathType={MarkdownPathType.internal}
                                />
                            }
                        />
                    </Route>
                </Route>
                <Route path="music" element={<MusicPage />}>
                    <Route
                        path="projects"
                        element={
                            <SubcategoriesPage
                                category={Music}
                                page="projects"
                            />
                        }
                    >
                        <Route
                            path=":link"
                            element={
                                <ProjectPage
                                    category={Music}
                                    markdownPathType={MarkdownPathType.internal}
                                />
                            }
                        />
                    </Route>
                    <Route
                        path="songs"
                        element={
                            <SubcategoriesPage category={Music} page="songs" />
                        }
                    >
                        <Route
                            path=":link"
                            element={
                                <SongPage
                                    category={Music}
                                    markdownPathType={MarkdownPathType.internal}
                                />
                            }
                        />
                    </Route>
                    <Route
                        path="roadmaps"
                        element={
                            <SubcategoriesPage
                                category={Music}
                                page="roadmaps"
                            />
                        }
                    >
                        <Route
                            path=":link"
                            element={
                                <RoadmapPage
                                    category={Music}
                                    markdownPathType={MarkdownPathType.internal}
                                />
                            }
                        />
                    </Route>
                </Route>
                <Route path="worldbuilding" element={<WorldbuildingPage />}>
                    <Route
                        path="roadmaps"
                        element={
                            <SubcategoriesPage
                                category={Worldbuilding}
                                page="roadmaps"
                            />
                        }
                    >
                        <Route
                            path=":link"
                            element={
                                <RoadmapPage
                                    category={Worldbuilding}
                                    markdownPathType={MarkdownPathType.internal}
                                />
                            }
                        />
                    </Route>
                    <Route
                        path="projects"
                        element={
                            <SubcategoriesPage
                                category={Worldbuilding}
                                page="projects"
                            />
                        }
                    >
                        <Route
                            path=":link"
                            element={
                                <ProjectPage
                                    category={Worldbuilding}
                                    markdownPathType={MarkdownPathType.internal}
                                />
                            }
                        />
                    </Route>
                    <Route path="*" element={<h1>not found</h1>} />
                </Route>
            </Route>
        </Routes>
    );
}
