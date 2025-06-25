import PropTypes from 'prop-types';

export function BackArrowIcon({ fillColor, width = 32, height = 32 }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -0.5 12 12"
            shapeRendering="crispEdges"
            fill={fillColor}
            width={`${width}px`}
            height={`${height}px`}
        >
            <path
                stroke={fillColor}
                d="M6 1h4M6 2h4M4 3h2M4 4h2M2 5h2M2 6h2M4 7h2M4 8h2M6 9h4M6 10h4"
            />
        </svg>
    );
}

BackArrowIcon.propTypes = {
    fill: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
};
