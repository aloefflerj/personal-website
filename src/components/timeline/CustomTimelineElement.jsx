import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import { HomeIcon } from '../../icons/HomeIcon';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CustomVerticalTimelineElement = styled(VerticalTimelineElement)`
    .timeline-date {
        display: none;
    }
`;

export function CustomTimelineElement({
    category,
    elementKey,
    children,
    icon,
    onTimelineElementClick,
    date = null,
}) {
    return (
        <CustomVerticalTimelineElement
            key={elementKey}
            className="vertical-timeline-element--work"
            contentStyle={{
                background: category.bgColor,
                color: category.lightColor,
                borderRadius: 0,
                boxShadow: 'none',
                border: `3px solid ${category.lightColor}`,
                padding: '12px',
                cursor: 'pointer',
            }}
            contentArrowStyle={{
                borderRight: `10px solid ${category.lightColor}`,
            }}
            dateClassName="timeline-date"
            iconStyle={{
                background: category.bgColor,
                color: category.lightColor,
                boxShadow: `0 0 0 3px ${category.lightColor}`,
                borderRadius: 0,
            }}
            icon={icon ?? <HomeIcon fill={category.lightColor} />}
            style={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
            }}
            onTimelineElementClick={onTimelineElementClick}
        >
            {children}
        </CustomVerticalTimelineElement>
    );
}

CustomTimelineElement.propTypes = {
    category: PropTypes.object,
    elementKey: PropTypes.number,
    children: PropTypes.element,
    icon: PropTypes.element,
    onTimelineElementClick: PropTypes.func,
    date: PropTypes.string,
};
