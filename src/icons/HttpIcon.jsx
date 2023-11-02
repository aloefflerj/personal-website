import PropTypes from 'prop-types';

export function HttpIcon({ fillColor }) {
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
                d="M6 2h1M9 2h1M6 3h1M9 3h1M2 4h1M5 4h1M8 4h1M5 5h1M8 5h1M2 6h1M5 6h1M8 6h1M4 7h1M7 7h1M4 8h1M7 8h1"
            />
        </svg>
    );
}

HttpIcon.propTypes = {
    fillColor: PropTypes.string,
};
