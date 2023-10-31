import PropTypes from 'prop-types'
import { useRequest } from '../../hooks/useRequest';
import { useEffect } from 'react';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import _ from 'lodash';


export function CustomTimelineElementContent({ link }) {
    const { fetchUrl } = useRequest();
    const [content, setContent] = useState();

    useEffect(() => {
        fetchUrl(link, {}, 'text').then((timelineRequestContent) => {
            setContent(timelineRequestContent)
        })
    }, []);

    const handleReadmeContent = () => {
        if (!_.isEmpty(content)) {
            return atob(content);
        }
    };

    return <div>
        <ReactMarkdown linkTarget={'_blank'} >
            {content}
        </ReactMarkdown>
    </div>
}

CustomTimelineElementContent.prototype = {
    timelineItem: PropTypes.object
}