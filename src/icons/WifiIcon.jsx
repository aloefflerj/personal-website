import PropTypes from 'prop-types';

export function WifiIcon({ fillColor }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -0.5 12 12"
            shapeRendering="crispEdges"
            width="24"
            heigth="24"
        >
            <path
                stroke={fillColor}
                d="M4 2h4M2 3h2M8 3h2M1 4h1M5 4h2M10 4h1M3 5h2M7 5h2M2 6h1M9 6h1M4 7h4M3 8h1M8 8h1M5 9h2M5 10h2"
            />
        </svg>
    );
}

WifiIcon.propTypes = {
    fillColor: PropTypes.string,
};
