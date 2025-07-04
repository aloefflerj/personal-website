import PropTypes from 'prop-types';

export function HamburgerIcon({ fillColor, width = 32, height = 32 }) {
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
                d="M1 2h10M1 3h10M1 5h10M1 6h10M1 8h10M1 9h10"
            />
        </svg>
    );
}

HamburgerIcon.propTypes = {
    fill: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
};
