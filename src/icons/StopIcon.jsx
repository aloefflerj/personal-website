import PropTypes from 'prop-types';

export function StopIcon({ fillColor, width = '12', height = '12' }) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5 5H19V19H5V5Z"
                fill={fillColor}
            />
        </svg>
    );
}

StopIcon.propTypes = {
    fillColor: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
};
