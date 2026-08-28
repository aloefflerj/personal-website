import 'react-vertical-timeline-component/style.min.css';
import { CustomTimeline } from '../../components/timeline/CustomTimeline';
import { CustomTimelineElement } from '../../components/timeline/CustomTimelineElement';
import PropTypes from 'prop-types';
import { useState } from 'react';
import styled from 'styled-components';
import { If } from '../../components/If';
import { TimelineMarkdownElementContent } from '../../components/timeline/TimelineMarkdownElementContent';
import { Spinner } from '../../components/Spinner';
import { useMarkdownPath } from '../../hooks/useMarkdownPath';
import { MarkdownPathType } from '../../common/MarkdownPathType';

const BlogMarkdownElementContentWrapper = styled.span`
    h2 {
        color: ${(props) => props.$category.darkerColor};
        text-decoration: underline;
        margin: 0;
    }

    time {
        display: block;
        color: ${(props) => props.$category.darkerColor};
        font-size: 0.6em;
    }
`;

function dateValue(post) {
    const time = new Date(post.date).getTime();
    return Number.isNaN(time) ? -Infinity : time;
}

function sortByDateDescending(posts) {
    return [...posts].sort((a, b) => dateValue(b) - dateValue(a));
}

export function BlogPage({ category, items, dir, segments, markdownPathType }) {
    const [visiblePostId, setVisiblePostId] = useState(null);
    const [loadingPostId, setLoadingPostId] = useState(null);
    const { getExternalGithubPath, getInternalPath } = useMarkdownPath();

    const posts = sortByDateDescending(items);

    const getMarkdownContentPath = (post) => {
        if (markdownPathType === MarkdownPathType.githubRaw) {
            return getExternalGithubPath(dir, segments, post.contentPath);
        }
        return getInternalPath(
            category.categoryKey,
            dir,
            [...segments, post.link],
            post.contentPath
        );
    };

    const showPostById = (id) => {
        if (id === visiblePostId) return;

        setVisiblePostId(id);
        setLoadingPostId(id);
    };

    const hideSpinnerOnFinishLoading = () => {
        setLoadingPostId(null);
    };

    return (
        <CustomTimeline category={category}>
            {posts.map((post) => {
                return (
                    <CustomTimelineElement
                        category={category}
                        key={post.id}
                        onTimelineElementClick={() => showPostById(post.id)}
                        inFocus={visiblePostId === post.id}
                    >
                        <BlogMarkdownElementContentWrapper $category={category}>
                            <If is={visiblePostId !== post.id}>
                                <If is={Boolean(post.date)}>
                                    <time>{post.date}</time>
                                </If>
                                <h2>{post.title}</h2>
                            </If>
                            <If is={loadingPostId === post.id}>
                                <Spinner
                                    color={category.darkerColor}
                                    local={true}
                                />
                            </If>
                            <If is={visiblePostId === post.id}>
                                <TimelineMarkdownElementContent
                                    timelineItemId={post.id}
                                    link={getMarkdownContentPath(post)}
                                    hideTimelineSpinnerOnFinishLoading={
                                        hideSpinnerOnFinishLoading
                                    }
                                />
                            </If>
                        </BlogMarkdownElementContentWrapper>
                    </CustomTimelineElement>
                );
            })}
        </CustomTimeline>
    );
}

BlogPage.propTypes = {
    category: PropTypes.object,
    items: PropTypes.array,
    dir: PropTypes.string,
    segments: PropTypes.arrayOf(PropTypes.string),
    markdownPathType: PropTypes.string,
};
