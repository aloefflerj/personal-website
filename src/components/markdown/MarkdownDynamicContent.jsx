import { useState } from 'react';
import { MarkdownPathType } from '../../common/MarkdownPathType';
import { useMarkdownPath } from '../../hooks/useMarkdownPath';
import { useRequest } from '../../hooks/useRequest';
import { useEffect } from 'react';
import emojiPlugin from 'remark-emoji';
import CodeBlock from '../../components/codeblock/CodeBlock';
import PropTypes from 'prop-types';
import { If } from '../../components/If';
import { Spinner } from '../../components/Spinner';
import rehypeRaw from 'rehype-raw';
import _ from 'lodash';
import { MarkdownImage } from '../markdownimage/MarkdownImage';
import { MarkdownSection } from './MarkdownSection';
import { LinkBlock } from '../linkBlock/LinkBlock';
import { useWikiLinks } from '../../hooks/useWikiLinks';

const ASSET_PATH_RE = /(?:\.\.\/)+assets\/(img|video)\/categories\//g;

const normalizeAssetPaths = (markdown) =>
    markdown.replace(ASSET_PATH_RE, '/assets/$1/categories/');

export function MarkdownDynamicContent({
    dbJsonData,
    category,
    dir,
    segments,
    markdownPathType,
    wiki,
}) {
    const { fetchUrl, fetchGithubEncryptedMarkdown } = useRequest();
    const { getExternalGithubPath, getInternalPath } = useMarkdownPath();
    const { linkWikiPages } = useWikiLinks();
    const [markdownContent, setMarkdownContent] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchMarkdownContent();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dbJsonData]);

    const transformMarkdown = (markdown) => {
        const normalized = normalizeAssetPaths(markdown);
        if (!wiki) return normalized;

        return linkWikiPages(normalized, wiki.basePath, wiki.items);
    };

    const fetchMarkdownContent = async () => {
        setLoading(true);
        if (!validDbJsonData(dbJsonData)) {
            setMarkdownContent('### :ghost: Nothing to see here');
        } else {
            const contentPath = getMarkdownContentPath(dbJsonData.contentPath);
            const markdownContent = await fetchByMethod(contentPath);

            if (markdownContent !== undefined) {
                setMarkdownContent(transformMarkdown(markdownContent));
            }
        }
        setLoading(false);
    };

    const getMarkdownContentPath = (subcategoryItemContentLink) => {
        switch (markdownPathType) {
            case MarkdownPathType.internal:
                return getInternalPath(
                    category.categoryKey,
                    dir,
                    segments,
                    subcategoryItemContentLink
                );
            case MarkdownPathType.githubRaw:
                return getExternalGithubPath(
                    dir,
                    segments,
                    subcategoryItemContentLink
                );
            case MarkdownPathType.githubApi:
                return subcategoryItemContentLink;
            default:
                return getInternalPath(
                    category.categoryKey,
                    dir,
                    segments,
                    subcategoryItemContentLink
                );
        }
    };

    const fetchByMethod = async (contentPath) => {
        if (markdownPathType === MarkdownPathType.githubApi) {
            return await fetchGithubEncryptedMarkdown(contentPath);
        }
        return await fetchUrl(contentPath, {}, 'text');
    };

    const validDbJsonData = (dbJsonData) => {
        return (
            dbJsonData !== null &&
            dbJsonData !== undefined &&
            !_.isEmpty(dbJsonData)
        );
    };

    return (
        <>
            <If is={!loading}>
                <MarkdownSection
                    remarkPlugins={[emojiPlugin]}
                    rehypePlugins={[rehypeRaw]}
                    $category={category}
                    components={{
                        code: CodeBlock,
                        img: MarkdownImage,
                        a: LinkBlock,
                    }}
                    linkTarget={'_blank'}
                >
                    {markdownContent}
                </MarkdownSection>
            </If>
            <If is={loading}>
                <Spinner color={category.darkerColor} />
            </If>
        </>
    );
}

MarkdownDynamicContent.propTypes = {
    dbJsonData: PropTypes.object,
    dir: PropTypes.string,
    segments: PropTypes.arrayOf(PropTypes.string),
    category: PropTypes.object,
    markdownPathType: PropTypes.string,
    wiki: PropTypes.shape({
        basePath: PropTypes.string,
        items: PropTypes.array,
    }),
};
