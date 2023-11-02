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
import { CustomTimelineElementContent } from '../../components/timeline/CustomTimelineElementContent';
import { DynamicIcon } from '../../icons/DynamicIcon';
import { Spinner } from '../../components/Spinner';

const CustomTimelineElementContentWrapper = styled.span`
    h2 {
        color: ${(props) => props.$category.darkerColor};
        text-decoration: underline;
        margin: 0;
    }
`;

export function RoadmapPage({ category }) {
    const { fetchRoadmapByLink } = useCategoryDB(category);
    const [timeline, setTimeline] = useState([]);
    const { link } = useParams();
    const githubApiLink = `https://raw.githubusercontent.com/aloefflerj/roadmaps/main/${link}/steps`;
    const [visibleTimelineElement, setVisibleTimelineElement] = useState(null);
    const [loadingTimelineElement, setLoadingTimelineElement] = useState(null);

    useEffect(() => {
        fetchRoadmapByLink(link).then((roadmap) => {
            setTimeline(roadmap.timeline);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const showTimelineElementById = (id) => {
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
                        <CustomTimelineElementContentWrapper $category={category}>
                            <If is={visibleTimelineElement !== timelineItem.id}>
                                <h2>{timelineItem.title}</h2>
                            </If>
                            <If is={loadingTimelineElement === timelineItem.id}>
                                <Spinner color={category.darkerColor} local={true} />
                            </If>
                            <If is={visibleTimelineElement === timelineItem.id}>
                                <CustomTimelineElementContent
                                    timelineItemId={timelineItem.id}
                                    link={`${githubApiLink}/${timelineItem.link}`}
                                    hideTimelineSpinnerOnFinishLoading={hideTimelineSpinnerOnFinishLoading}
                                />
                            </If>
                        </CustomTimelineElementContentWrapper>
                    </CustomTimelineElement>
                );
            })}
        </CustomTimeline>
    );
}

RoadmapPage.propTypes = {
    category: PropTypes.object,
};
