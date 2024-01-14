import 'react-vertical-timeline-component/style.min.css';
import { CustomTimeline } from '../../components/timeline/CustomTimeline';
import { CustomTimelineElement } from '../../components/timeline/CustomTimelineElement';
import PropTypes from 'prop-types';
import { useCategoryDB } from '../../hooks/useCategoryDB';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { If } from '../../components/If';
import { TimelineMarkdownElementContent } from '../../components/timeline/TimelineMarkdownElementContent';
import { DynamicIcon } from '../../icons/DynamicIcon';
import { Spinner } from '../../components/Spinner';
import { useMarkdownPath } from '../../hooks/useMarkdownPath';
import { MarkdownPathType } from '../../common/MarkdownPathType';
import { SubcategoryType } from '../../common/SubcategoryType';

const TimelineMarkdownElementContentWrapper = styled.span`
    h2 {
        color: ${(props) => props.$category.darkerColor};
        text-decoration: underline;
        margin: 0;
    }
`;

export function RoadmapPage({ category, markdownPathType, journalStyle = false }) {
    const { fetchSubcategoryItemByLink } = useCategoryDB(category);
    const [timeline, setTimeline] = useState([]);
    const { link } = useParams();
    const [visibleTimelineElement, setVisibleTimelineElement] = useState(null);
    const [loadingTimelineElement, setLoadingTimelineElement] = useState(null);
    const { getExternalGithubPath, getInternalPath } = useMarkdownPath();

    useEffect(() => {
        // TODO: refactor subcategory link
        fetchSubcategoryItemByLink(journalStyle ? SubcategoryType.journal : SubcategoryType.roadmaps, link).then((roadmap) => {
            setTimeline(roadmap.timeline);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getMarkdownContentPath = (subcategoryItemContentLink) => {
        const subcategory = journalStyle ? SubcategoryType.journal : SubcategoryType.roadmaps;
        const subcategoryItem = link;
        
        switch (markdownPathType) {
            case MarkdownPathType.internal:
                return getInternalPath(category.categoryKey, subcategory, subcategoryItem, subcategoryItemContentLink);
            case MarkdownPathType.githubRaw:
                return getExternalGithubPath(subcategory, subcategoryItem, subcategoryItemContentLink);
            default:
                return getInternalPath(category.categoryKey, subcategory, subcategoryItem, subcategoryItemContentLink);
        }
    }

    const showTimelineElementById = (id) => {
        if (id === visibleTimelineElement)
            return;

        setVisibleTimelineElement(id);
        setLoadingTimelineElement(id);
    }

    const hideTimelineSpinnerOnFinishLoading = () => {
        setLoadingTimelineElement(null);
    }

    return (
        <CustomTimeline category={category}>
            {timeline.map((timelineItem) => {
                return (
                    <CustomTimelineElement
                        category={category}
                        key={timelineItem.id}
                        icon={
                            <DynamicIcon iconFile={timelineItem.icon} fillColor={category.lightColor}/>
                        }
                        onTimelineElementClick={() => showTimelineElementById(timelineItem.id)}
                    >
                        <TimelineMarkdownElementContentWrapper $category={category}>
                            <If is={visibleTimelineElement !== timelineItem.id}>
                                <h2>{timelineItem.title}</h2>
                            </If>
                            <If is={loadingTimelineElement === timelineItem.id}>
                                <Spinner color={category.darkerColor} local={true} />
                            </If>
                            <If is={visibleTimelineElement === timelineItem.id}>
                                <TimelineMarkdownElementContent
                                    timelineItemId={timelineItem.id}
                                    link={getMarkdownContentPath(timelineItem.link)}
                                    hideTimelineSpinnerOnFinishLoading={hideTimelineSpinnerOnFinishLoading}
                                />
                            </If>
                        </TimelineMarkdownElementContentWrapper>
                    </CustomTimelineElement>
                );
            })}
        </CustomTimeline>
    );
}

RoadmapPage.propTypes = {
    category: PropTypes.object,
    markdownPath: PropTypes.string,
};
