import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useCategoryDB } from '../../hooks/useCategoryDB';
import {
    childrenOf,
    pruneDrafts,
    useContentTree,
} from '../../hooks/useContentTree';
import { useSubcategories } from '../../hooks/useSubcategories';
import { useStringHelper } from '../../hooks/useStringHelper';
import { useCategoryContext } from '../../hooks/useCategoryContext';
import { MarkdownDynamicContent } from '../../components/markdown/MarkdownDynamicContent';
import { FolderGrid } from '../../components/folder/FolderGrid';
import { SongCard } from '../../components/audioPlayer/SongCard';
import { FoldersLayout } from '../folders-layout/FoldersLayout';
import { RoadmapPage } from '../roadmaps/RoadmapPage';
import { BlogPage } from '../blog/BlogPage';
import { SubcategoryView } from '../../common/SubcategoryView';
import { MarkdownPathType } from '../../common/MarkdownPathType';
import { SubcategoryContentType } from '../../common/SubcategoryContentType';
import { buildSongQueue, songIndexInQueue } from '../../model/songQueue';
import { If } from '../../components/If';
import { WikiIndex } from '../../components/wiki/WikiIndex';

const FolderContent = styled.div`
    color: ${(props) => props.$category.lightColor};
`;

const NotFoundMessage = styled.p`
    padding: 32px;
    color: ${(props) => props.$category.lightColor};
`;

const EMPTY_NODE = {};

const FolderViewType = {
    list: 'list',
    timeline: 'timeline',
    content: 'content',
    wiki: 'wiki',
    blog: 'blog',
};

function FolderListView({ category, items, basePath }) {
    return <FolderGrid items={items} category={category} basePath={basePath} />;
}

FolderListView.propTypes = {
    category: PropTypes.object,
    items: PropTypes.array,
    basePath: PropTypes.string,
};

function FolderTimelineView({
    category,
    node,
    dir,
    segments,
    markdownPathType,
}) {
    return (
        <RoadmapPage
            category={category}
            timeline={node.timeline || []}
            dir={dir}
            segments={segments}
            markdownPathType={markdownPathType}
        />
    );
}

FolderTimelineView.propTypes = {
    category: PropTypes.object,
    node: PropTypes.object,
    dir: PropTypes.string,
    segments: PropTypes.arrayOf(PropTypes.string),
    markdownPathType: PropTypes.string,
};

function FolderBlogView({
    category,
    items,
    node,
    dir,
    segments,
    markdownPathType,
}) {
    // At the subcategory root the posts are the fetched items; nested under a
    // folder node they are that node's children.
    const posts = segments.length > 0 ? childrenOf(node) : items;

    return (
        <BlogPage
            category={category}
            items={posts}
            dir={dir}
            segments={segments}
            markdownPathType={markdownPathType}
        />
    );
}

FolderBlogView.propTypes = {
    category: PropTypes.object,
    items: PropTypes.array,
    node: PropTypes.object,
    dir: PropTypes.string,
    segments: PropTypes.arrayOf(PropTypes.string),
    markdownPathType: PropTypes.string,
};

function FolderWikiView({
    category,
    node,
    dir,
    segments,
    markdownPathType,
    wiki,
}) {
    // A subcategory wiki has no markdown of its own; an item wiki does.
    const hasLanding = Boolean(node?.contentPath);

    return (
        <FolderContent $category={category}>
            <If is={hasLanding}>
                <MarkdownDynamicContent
                    dbJsonData={node}
                    category={category}
                    dir={dir}
                    segments={segments}
                    markdownPathType={markdownPathType}
                    wiki={wiki}
                />
            </If>
            <WikiIndex
                items={wiki.items}
                basePath={wiki.basePath}
                category={category}
            />
        </FolderContent>
    );
}

FolderWikiView.propTypes = {
    category: PropTypes.object,
    node: PropTypes.object,
    dir: PropTypes.string,
    segments: PropTypes.arrayOf(PropTypes.string),
    markdownPathType: PropTypes.string,
    wiki: PropTypes.object,
};

function FolderSongCard({ category, node, siblings }) {
    const songQueue = buildSongQueue(siblings);
    const songIndex = songIndexInQueue(songQueue, node.songPath);

    if (songIndex < 0) return null;

    return (
        <SongCard
            track={songQueue[songIndex]}
            queue={songQueue}
            index={songIndex}
            category={category}
        />
    );
}

FolderSongCard.propTypes = {
    category: PropTypes.object,
    node: PropTypes.object,
    siblings: PropTypes.array,
};

function FolderContentView({
    category,
    node,
    dir,
    segments,
    markdownPathType,
    basePath,
    wiki,
    siblings,
}) {
    const children = childrenOf(node);
    const isSong = node.contentType === SubcategoryContentType.song;

    return (
        <FolderContent $category={category}>
            <If is={isSong}>
                <FolderSongCard
                    category={category}
                    node={node}
                    siblings={siblings}
                />
            </If>
            <MarkdownDynamicContent
                dbJsonData={node}
                category={category}
                dir={dir}
                segments={segments}
                markdownPathType={markdownPathType}
                wiki={wiki}
            />
            <If is={children.length > 0}>
                <FolderGrid
                    items={children}
                    category={category}
                    basePath={basePath}
                />
            </If>
        </FolderContent>
    );
}

FolderContentView.propTypes = {
    category: PropTypes.object,
    node: PropTypes.object,
    dir: PropTypes.string,
    segments: PropTypes.arrayOf(PropTypes.string),
    markdownPathType: PropTypes.string,
    basePath: PropTypes.string,
    wiki: PropTypes.object,
    siblings: PropTypes.array,
};

const FOLDER_VIEWS = {
    [FolderViewType.list]: FolderListView,
    [FolderViewType.timeline]: FolderTimelineView,
    [FolderViewType.content]: FolderContentView,
    [FolderViewType.wiki]: FolderWikiView,
    [FolderViewType.blog]: FolderBlogView,
};

function resolveFolderViewType(segments, record, node) {
    if (segments.length === 0) {
        if (record?.view === SubcategoryView.wiki) return FolderViewType.wiki;
        if (record?.view === SubcategoryView.blog) return FolderViewType.blog;
        return FolderViewType.list;
    }

    if (record?.view === SubcategoryView.timeline && segments.length === 1) {
        return FolderViewType.timeline;
    }

    if (node?.view === SubcategoryView.wiki) return FolderViewType.wiki;
    if (node?.view === SubcategoryView.blog) return FolderViewType.blog;

    return FolderViewType.content;
}

function resolveFolderTitle(trail, record) {
    if (trail.length > 0) return trail[trail.length - 1].title;
    if (record) return record.title;

    return null;
}

function resolveDirectory(record, subcategoryLink) {
    if (!record) return subcategoryLink;

    return record.dir || record.link;
}

function resolveBasePath(category, subcategoryLink, segments) {
    return `/${[category.categoryKey, subcategoryLink, ...segments].join('/')}`;
}

// A wiki can be the subcategory itself or an item nested under one. The
// subcategory case is checked first: when it holds the `wiki` view, every
// descendant resolves links against the subcategory's own root items, and no
// trail entry will carry the marker.
function resolveWikiScope(
    category,
    subcategoryLink,
    segments,
    trail,
    record,
    items
) {
    const subcategoryPath = `/${[category.categoryKey, subcategoryLink].join(
        '/'
    )}`;

    if (record?.view === SubcategoryView.wiki) {
        return { basePath: subcategoryPath, items };
    }

    const index = trail.findIndex(
        (entry) => entry.view === SubcategoryView.wiki
    );
    if (index === -1) return null;

    return {
        basePath: `${subcategoryPath}/${segments
            .slice(0, index + 1)
            .join('/')}`,
        items: childrenOf(trail[index]),
    };
}

function buildBreadcrumbTrail(
    category,
    subcategoryLink,
    record,
    segments,
    trail
) {
    return [
        { title: category.title, path: `/${category.categoryKey}` },
        {
            title: record ? record.title : subcategoryLink,
            path: `/${category.categoryKey}/${subcategoryLink}`,
        },
        ...trail.map((node, index) => ({
            title: node.title,
            path: `/${category.categoryKey}/${subcategoryLink}/${segments
                .slice(0, index + 1)
                .join('/')}`,
        })),
    ];
}

export function FolderPage({ category }) {
    const params = useParams();
    const subcategoryLink = params.subcategory;
    const segments = (params['*'] || '').split('/').filter(Boolean);

    const { subcategories, loading: subcategoriesLoading } =
        useSubcategories(category);
    const { fetchSubcategory } = useCategoryDB(category);
    const { findNodeByPath } = useContentTree();
    const { capitalizeFirstLetter } = useStringHelper();
    const { setBreadcrumbTrail } = useCategoryContext();
    const [items, setItems] = useState([]);
    const [itemsLoaded, setItemsLoaded] = useState(false);

    const record = subcategories.find(
        (entry) => entry.link === subcategoryLink
    );
    const dir = resolveDirectory(record, subcategoryLink);

    useEffect(() => {
        if (!record) return;

        setItemsLoaded(false);
        fetchSubcategory(dir).then((fetched) => {
            setItems(pruneDrafts(Array.isArray(fetched) ? fetched : []));
            setItemsLoaded(true);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [record, dir]);

    const { node, trail } = findNodeByPath(items, segments);
    const wiki = resolveWikiScope(
        category,
        subcategoryLink,
        segments,
        trail,
        record,
        items
    );
    const View = FOLDER_VIEWS[resolveFolderViewType(segments, record, node)];

    // The songs a single song page can queue up: the items sitting alongside it
    // in the same folder.
    const siblings =
        trail.length > 1 ? childrenOf(trail[trail.length - 2]) : items;

    const segmentsKey = segments.join('/');
    const trailKey = trail.map((trailNode) => trailNode.link).join('/');

    useEffect(() => {
        setBreadcrumbTrail(
            buildBreadcrumbTrail(
                category,
                subcategoryLink,
                record,
                segments,
                trail
            )
        );

        return () => setBreadcrumbTrail(null);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [category, subcategoryLink, record, segmentsKey, trailKey]);

    // A missing subcategory (unknown or draft-hidden), or a path that runs
    // through a draft-hidden / non-existent folder, resolves to nothing.
    const notFound =
        (!subcategoriesLoading && !record) ||
        Boolean(record && itemsLoaded && segments.length > 0 && !node);

    if (notFound) {
        return (
            <FoldersLayout title="Not found" category={category}>
                <NotFoundMessage $category={category}>
                    This page doesn&rsquo;t exist.
                </NotFoundMessage>
            </FoldersLayout>
        );
    }

    return (
        <FoldersLayout
            title={
                resolveFolderTitle(trail, record) ??
                capitalizeFirstLetter(subcategoryLink)
            }
            category={category}
        >
            <View
                category={category}
                items={items}
                node={node || EMPTY_NODE}
                dir={dir}
                segments={segments}
                markdownPathType={
                    record?.markdownPathType || MarkdownPathType.internal
                }
                basePath={resolveBasePath(category, subcategoryLink, segments)}
                wiki={wiki}
                siblings={siblings}
            />
        </FoldersLayout>
    );
}

FolderPage.propTypes = {
    category: PropTypes.object,
};
