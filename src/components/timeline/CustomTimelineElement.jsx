import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import { HomeIcon } from '../../icons/HomeIcon';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CustomVerticalTimelineElement = styled(VerticalTimelineElement)`
    .timeline-date {
        display: none;
    }
`;

const InFocusCustomVerticalTimelineElement = styled(VerticalTimelineElement)`
    .timeline-date {
        display: none;
    }

    .vertical-timeline-element-content p {
        font-weight: 300;
    }

    @media screen and (max-width: 640px) {
    .vertical-timeline-element-content {
        margin: 0;
    }

    .vertical-timeline-element-icon {
        display: none;
    }

    .vertical-timeline-element-content-arrow {
        display: none;
    }

    .vertical-timeline-element-content p {
        font-size: 30px;
    }
`;

export function CustomTimelineElement({
    category,
    elementKey,
    children,
    icon,
    onTimelineElementClick,
    inFocus = false,
}) {
    const elementProperties = {
        key: elementKey,
        className: 'vertical-timeline-element--work',
        contentStyle: {
            background: category.bgColor,
            color: category.lightColor,
            borderRadius: 0,
            boxShadow: 'none',
            border: `3px solid ${category.lightColor}`,
            padding: '12px',
            cursor: 'pointer',
        },
        contentArrowStyle: {
            borderRight: `10px solid ${category.lightColor}`,
        },
        dateClassName: 'timeline-date',
        iconStyle: {
            background: category.bgColor,
            color: category.lightColor,
            boxShadow: `0 0 0 3px ${category.lightColor}`,
            borderRadius: 0,
        },
        icon: icon ?? <HomeIcon fill={category.lightColor} />,
        style: {
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
        },
        onTimelineElementClick: onTimelineElementClick,
    };

    return inFocus ? (
        <InFocusCustomVerticalTimelineElement {...elementProperties}>
            {children}
        </InFocusCustomVerticalTimelineElement>
    ) : (
        <CustomVerticalTimelineElement {...elementProperties}>
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
    inFocus: PropTypes.bool,
};
