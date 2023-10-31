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

    useEffect(() => {
        fetchRoadmapByLink(link).then((roadmap) => {
            setTimeline(roadmap.timeline);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const hideTimelineElementById = () => {
        setVisibleTimelineElement(null);
    }

    const showTimelineElementById = (id) => {
        setVisibleTimelineElement(id);
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
                            <If is={visibleTimelineElement === timelineItem.id}>
                                <CustomTimelineElementContent link={`${githubApiLink}/${timelineItem.link}`}/>
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
