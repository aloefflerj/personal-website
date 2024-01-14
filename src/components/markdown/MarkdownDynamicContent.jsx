import { useState } from "react";
import { MarkdownPathType } from "../../common/MarkdownPathType";
import { useMarkdownPath } from "../../hooks/useMarkdownPath";
import { useRequest } from "../../hooks/useRequest";
import { useEffect } from "react";
import styled from 'styled-components';
import emojiPlugin from 'remark-emoji';
import CodeBlock from '../../components/codeblock/CodeBlock';
import PropTypes from 'prop-types';
import ReactMarkdown from "react-markdown";
import { If } from "../../components/If";
import { Spinner } from "../../components/Spinner";
import rehypeRaw from "rehype-raw";
import _ from "lodash";

const MarkdownSection = styled(ReactMarkdown)`
    padding: 30px 60px;

    h1 {
        color: ${(props) => props.$category.darkerColor};
        background-color: ${(props) => props.$category.lightColor};
        display: inline-flex;
        gap: 18px;
        justify-content: center;
        align-items: center;
        padding: 6px;
    }

    h2 {
        text-decoration: underline;
    }

    a {
        filter: brightness(150%);
        color: ${(props) => props.$category.lightColor};
        text-decoration: underline;
    }

    img {
        border: 3px solid ${(props) => props.$category.lightColor};
        padding: 6px;
    }

    ul {
        margin-left: 36px;
        list-style-type: square;
    }

    hr {
        height: 3px;
        background-color: ${(props) => props.$category.lightColor};
        border: none;
    }

    code {
        font-family: var(--default-font);
    }

    blockquote {
        filter: brightness(120%);
        color: ${(props) => props.$category.mediumColor};
        margin: 0 0 0 12px;
        padding: 0;
        p {
            margin: 0;
        }
    }
`;

export function MarkdownDynamicContent({
    dbJsonData,
    category,
    subcategory,
    link,
    markdownPathType
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
            setMarkdownContent("### :ghost: Nothing to see here");
        } else {
            const contentPath = getMarkdownContentPath(dbJsonData.contentPath);
            const markdownContent = await fetchByMethod(contentPath);

            if (markdownContent !== undefined) {
                setMarkdownContent(markdownContent);
            }
        }
        setLoading(false);
    }

    const getMarkdownContentPath = (subcategoryItemContentLink) => {
        const { getExternalGithubPath, getInternalPath } = useMarkdownPath();

        const subcategoryItem = link;
        
        switch (markdownPathType) {
            case MarkdownPathType.internal:
                return getInternalPath(category.categoryKey, subcategory, subcategoryItem, subcategoryItemContentLink);
            case MarkdownPathType.githubRaw:
                return getExternalGithubPath(subcategory, subcategoryItem, subcategoryItemContentLink);
            case MarkdownPathType.githubApi:
                return subcategoryItemContentLink;
            default:
                return getInternalPath(category.categoryKey, subcategory, subcategoryItem, subcategoryItemContentLink);
        }
    }
    
    const fetchByMethod = async (contentPath) => {
        switch (markdownPathType) {
            case MarkdownPathType.internal | MarkdownPathType.githubRaw:
                return await fetchUrl(contentPath, {}, 'text');
            case MarkdownPathType.githubApi:
                return await fetchGithubEncryptedMarkdown(contentPath);
            default:
                return await fetchUrl(contentPath, {}, 'text');
        }
    }

    const validDbJsonData = (dbJsonData) => {
        return dbJsonData !== null &&
        dbJsonData !== undefined &&
        !_.isEmpty(dbJsonData);
    }

    return (<>
        <If is={!loading}>
            <MarkdownSection
                remarkPlugins={[emojiPlugin]}
                rehypePlugins={[rehypeRaw]}
                $category={category}
                components={{ code: CodeBlock }}
                linkTarget={'_blank'}
            >
                {markdownContent}
            </MarkdownSection>
        </If>
        <If is={loading} >
            <Spinner color={category.darkerColor}/>
        </If>
    </>);
}

MarkdownDynamicContent.prototype = {
    dbJsonData: PropTypes.object,
    subcategory: PropTypes.string,
    category: PropTypes.object,
    link: PropTypes.string,
    markdownPathType: PropTypes.string,
};
