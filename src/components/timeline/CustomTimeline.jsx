import { VerticalTimeline } from 'react-vertical-timeline-component';
import PropTypes from 'prop-types';

export function CustomTimeline({ category, children }) {
    return (
        <VerticalTimeline
            lineColor={category.lightColor}
            layout="1-column-left"
        >
            {children}
        </VerticalTimeline>
    );
}

CustomTimeline.propTypes = {
    category: PropTypes.object,
    children: PropTypes.arrayOf(PropTypes.element),
};
