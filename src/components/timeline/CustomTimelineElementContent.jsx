import PropTypes from 'prop-types'
import { useRequest } from '../../hooks/useRequest';
import { useEffect } from 'react';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

export function CustomTimelineElementContent({ link, hideTimelineSpinnerOnFinishLoading }) {
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
        <ReactMarkdown linkTarget={'_blank'} >
            {content}
        </ReactMarkdown>
    </div>
}

CustomTimelineElementContent.prototype = {
    link: PropTypes.string,
    hideTimelineSpinnerOnFinishLoading: PropTypes.func
}