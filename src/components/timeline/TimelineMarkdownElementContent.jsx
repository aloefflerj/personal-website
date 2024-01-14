import PropTypes from 'prop-types'
import { useRequest } from '../../hooks/useRequest';
import { useEffect } from 'react';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import emojiPlugin from 'remark-emoji';
import { MarkdownImage } from '../markdownimage/MarkdownImage';

export function TimelineMarkdownElementContent({ link, hideTimelineSpinnerOnFinishLoading }) {
    const { fetchUrl } = useRequest();
    const [content, setContent] = useState();

    useEffect(() => {
        fetchUrl(link, {}, 'text').then((timelineRequestContent) => {
            setContent(timelineRequestContent);
        }).finally(() => {
            hideTimelineSpinnerOnFinishLoading();
        })
    }, []);

    return <div>
        <ReactMarkdown
            remarkPlugins={[emojiPlugin]}
            linkTarget={'_blank'}
            components={{ img: MarkdownImage }}
        >
            {content}
        </ReactMarkdown>
    </div>
}

TimelineMarkdownElementContent.prototype = {
    link: PropTypes.string,
    hideTimelineSpinnerOnFinishLoading: PropTypes.func
}