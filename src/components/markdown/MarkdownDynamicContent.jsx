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

export function MarkdownDynamicContent({
    dbJsonData,
    category,
    subcategory,
    link,
    markdownPathType,
}) {
    const { fetchUrl, fetchGithubEncryptedMarkdown } = useRequest();
    const [markdownContent, setMarkdownContent] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchMarkdownContent();
    }, [dbJsonData]);

    const fetchMarkdownContent = async () => {
        setLoading(true);
        if (!validDbJsonData(dbJsonData)) {
            setMarkdownContent('### :ghost: Nothing to see here');
        } else {
            const contentPath = getMarkdownContentPath(dbJsonData.contentPath);
            const markdownContent = await fetchByMethod(contentPath);

            if (markdownContent !== undefined) {
                setMarkdownContent(markdownContent);
            }
        }
        setLoading(false);
    };

    const getMarkdownContentPath = (subcategoryItemContentLink) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const { getExternalGithubPath, getInternalPath } = useMarkdownPath();

        const subcategoryItem = link;

        switch (markdownPathType) {
            case MarkdownPathType.internal:
                return getInternalPath(
                    category.categoryKey,
                    subcategory,
                    subcategoryItem,
                    subcategoryItemContentLink
                );
            case MarkdownPathType.githubRaw:
                return getExternalGithubPath(
                    subcategory,
                    subcategoryItem,
                    subcategoryItemContentLink
                );
            case MarkdownPathType.githubApi:
                return subcategoryItemContentLink;
            default:
                return getInternalPath(
                    category.categoryKey,
                    subcategory,
                    subcategoryItem,
                    subcategoryItemContentLink
                );
        }
    };

    const fetchByMethod = async (contentPath) => {
        switch (markdownPathType) {
            case MarkdownPathType.internal | MarkdownPathType.githubRaw:
                return await fetchUrl(contentPath, {}, 'text');
            case MarkdownPathType.githubApi:
                return await fetchGithubEncryptedMarkdown(contentPath);
            default:
                return await fetchUrl(contentPath, {}, 'text');
        }
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
                    components={{ code: CodeBlock, img: MarkdownImage, a: LinkBlock }}
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
    subcategory: PropTypes.string,
    category: PropTypes.object,
    link: PropTypes.string,
    markdownPathType: PropTypes.string,
};
