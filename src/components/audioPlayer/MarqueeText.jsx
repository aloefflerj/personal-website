import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css, keyframes } from 'styled-components';
import { If } from '../If';

const GAP = 48;

const Viewport = styled.div`
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
`;

const scroll = keyframes`
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(calc(-1 * var(--marquee-distance)));
    }
`;

const Track = styled.div`
    display: flex;
    width: max-content;
    max-width: 100%;

    @media screen and (max-width: 640px) {
        margin-inline: auto;
    }

    ${(props) =>
        props.$scroll &&
        css`
            max-width: none;
            animation: ${scroll} var(--marquee-duration) linear infinite;
        `}
`;

const Segment = styled.span`
    flex-shrink: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
    margin-left: ${(props) => (props.$spaced ? `${GAP}px` : '0')};
`;

export function MarqueeText({ children }) {
    const viewportRef = useRef(null);
    const segmentRef = useRef(null);
    const [scrolling, setScrolling] = useState(false);
    const [contentWidth, setContentWidth] = useState(0);

    useEffect(() => {
        const viewport = viewportRef.current;
        const segment = segmentRef.current;
        if (!viewport || !segment) return undefined;

        const measure = () => {
            const width = segment.scrollWidth;
            setContentWidth(width);
            setScrolling(width > viewport.clientWidth);
        };

        measure();

        const observer = new ResizeObserver(measure);
        observer.observe(viewport);
        observer.observe(segment);
        return () => observer.disconnect();
    }, [children]);

    const distance = contentWidth + GAP;
    const duration = Math.max(distance / 60, 4);

    return (
        <Viewport ref={viewportRef}>
            <Track
                $scroll={scrolling}
                style={{
                    '--marquee-distance': `${distance}px`,
                    '--marquee-duration': `${duration}s`,
                }}
            >
                <Segment ref={segmentRef}>{children}</Segment>
                <If is={scrolling}>
                    <Segment aria-hidden="true" $spaced>
                        {children}
                    </Segment>
                </If>
            </Track>
        </Viewport>
    );
}

MarqueeText.propTypes = {
    children: PropTypes.node,
};
