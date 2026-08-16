import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useCategoryDB } from '../../hooks/useCategoryDB';
import { childrenOf, useContentTree } from '../../hooks/useContentTree';
import { useSubcategories } from '../../hooks/useSubcategories';
import { useStringHelper } from '../../hooks/useStringHelper';
import { useCategoryContext } from '../../hooks/useCategoryContext';
import { MarkdownDynamicContent } from '../../components/markdown/MarkdownDynamicContent';
import { FolderGrid } from '../../components/folder/FolderGrid';
import { FoldersLayout } from '../folders-layout/FoldersLayout';
import { RoadmapPage } from '../roadmaps/RoadmapPage';
import { SubcategoryView } from '../../common/SubcategoryView';
import { MarkdownPathType } from '../../common/MarkdownPathType';
import { If } from '../../components/If';

const FolderContent = styled.div`
    color: ${(props) => props.$category.lightColor};
`;

const EMPTY_NODE = {};

const FolderViewType = {
    list: 'list',
    timeline: 'timeline',
    content: 'content',
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

function FolderContentView({
    category,
    node,
    dir,
    segments,
    markdownPathType,
    basePath,
}) {
    const children = childrenOf(node);

    return (
        <FolderContent $category={category}>
            <MarkdownDynamicContent
                dbJsonData={node}
                category={category}
                dir={dir}
                segments={segments}
                markdownPathType={markdownPathType}
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
};

const FOLDER_VIEWS = {
    [FolderViewType.list]: FolderListView,
    [FolderViewType.timeline]: FolderTimelineView,
    [FolderViewType.content]: FolderContentView,
};

function resolveFolderViewType(segments, record) {
    if (segments.length === 0) return FolderViewType.list;

    if (record?.view === SubcategoryView.timeline && segments.length === 1) {
        return FolderViewType.timeline;
    }

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

    const { subcategories } = useSubcategories(category);
    const { fetchSubcategory } = useCategoryDB(category);
    const { findNodeByPath } = useContentTree();
    const { capitalizeFirstLetter } = useStringHelper();
    const { setBreadcrumbTrail } = useCategoryContext();
    const [items, setItems] = useState([]);

    const record = subcategories.find(
        (entry) => entry.link === subcategoryLink
    );
    const dir = resolveDirectory(record, subcategoryLink);

    useEffect(() => {
        if (!record) return;

        fetchSubcategory(dir).then((fetched) =>
            setItems(Array.isArray(fetched) ? fetched : [])
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [record, dir]);

    const { node, trail } = findNodeByPath(items, segments);
    const View = FOLDER_VIEWS[resolveFolderViewType(segments, record)];

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
            />
        </FoldersLayout>
    );
}

FolderPage.propTypes = {
    category: PropTypes.object,
};
