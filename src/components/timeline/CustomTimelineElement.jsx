import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import { HomeIcon } from '../../icons/HomeIcon';
import PropTypes from 'prop-types';

export function CustomTimelineElement({
    category,
    elementKey,
    children,
    icon,
    date = null,
}) {
    return (
        <VerticalTimelineElement
            key={elementKey}
            className="vertical-timeline-element--work"
            contentStyle={{
                background: category.bgColor,
                color: category.lightColor,
                borderRadius: 0,
                boxShadow: 'none',
                border: `3px solid ${category.lightColor}`,
            }}
            contentArrowStyle={{
                borderRight: `10px solid ${category.lightColor}`,
            }}
            date={date}
            iconStyle={{
                background: category.mediumColor,
                color: category.lightColor,
                boxShadow: `0 0 0 3px ${category.lightColor}`,
                borderRadius: 0,
            }}
            icon={icon ?? <HomeIcon fill={category.lightColor} />}
        >
            {children}
        </VerticalTimelineElement>
    );
}

CustomTimelineElement.propTypes = {
    category: PropTypes.object,
    elementKey: PropTypes.number,
    children: PropTypes.element,
    icon: PropTypes.element,
    date: PropTypes.string,
};
