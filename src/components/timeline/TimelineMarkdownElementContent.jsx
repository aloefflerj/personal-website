import PropTypes from 'prop-types';
import { useRequest } from '../../hooks/useRequest';
import { useEffect } from 'react';
import { useState } from 'react';
import emojiPlugin from 'remark-emoji';
import { MarkdownImage } from '../markdownimage/MarkdownImage';
import CodeBlock from '../codeblock/CodeBlock';
import rehypeRaw from 'rehype-raw';
import { MarkdownSection } from '../markdown/MarkdownSection';
import { useCategoryContext } from '../../hooks/useCategoryContext';

export function TimelineMarkdownElementContent({
    link,
    hideTimelineSpinnerOnFinishLoading,
}) {
    const { fetchUrl } = useRequest();
    const [content, setContent] = useState();
    const { category } = useCategoryContext();

    useEffect(() => {
        fetchUrl(link, {}, 'text')
            .then((timelineRequestContent) => {
                setContent(timelineRequestContent);
            })
            .finally(() => {
                hideTimelineSpinnerOnFinishLoading();
            });
    }, []);

    return (
        <div>
            <MarkdownSection
                remarkPlugins={[emojiPlugin]}
                rehypePlugins={[rehypeRaw]}
                linkTarget={'_blank'}
                $category={category}
                components={{ code: CodeBlock, img: MarkdownImage }}
            >
                {content}
            </MarkdownSection>
        </div>
    );
}

TimelineMarkdownElementContent.propTypes = {
    link: PropTypes.string,
    hideTimelineSpinnerOnFinishLoading: PropTypes.func,
};
