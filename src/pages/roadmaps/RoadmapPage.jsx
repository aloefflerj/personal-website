import 'react-vertical-timeline-component/style.min.css';
import { CustomTimeline } from '../../components/timeline/CustomTimeline';
import { CustomTimelineElement } from '../../components/timeline/CustomTimelineElement';
import PropTypes from 'prop-types';
import { useCategoryDB } from '../../hooks/useCategoryDB';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
// import { useState } from 'react';

export function RoadmapPage({ category }) {
    const { fetchRoadmapByLink } = useCategoryDB(category);
    const [timeline, setTimeline] = useState([]);
    const { link } = useParams();

    useEffect(() => {
        fetchRoadmapByLink(link).then((roadmap) => {
            setTimeline(roadmap.timeline);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getImagePathFromCategoryRoadmap = (imgName) => {
        return `/assets/img/categories/${category.categoryKey}/roadmap/${imgName}`;
    };

    return (
        <CustomTimeline category={category}>
            {timeline.map((timelineItem) => {
                return (
                    <CustomTimelineElement
                        category={category}
                        key={timelineItem.id}
                    >
                        <span>
                            <h1>{timelineItem.title}</h1>
                            {timelineItem.content.map((timelineItemContent) => {
                                switch (timelineItemContent.type) {
                                    case 'text':
                                        return (
                                            <p
                                                key={`text-${timelineItemContent.id}`}
                                            >
                                                {timelineItemContent.content}
                                            </p>
                                        );
                                    case 'img':
                                        return (
                                            <img
                                                key={`img-${timelineItemContent.id}`}
                                                src={getImagePathFromCategoryRoadmap(
                                                    timelineItemContent.src
                                                )}
                                            />
                                        );
                                }
                            })}
                        </span>
                    </CustomTimelineElement>
                );
            })}
        </CustomTimeline>
    );
}

RoadmapPage.propTypes = {
    category: PropTypes.object,
};
