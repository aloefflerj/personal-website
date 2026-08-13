import PropTypes from 'prop-types';

export function SkipNextIcon({ fillColor, width = '12', height = '12' }) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M6 4L14 12L6 20V4Z" fill={fillColor} />
            <rect x="16" y="4" width="2" height="16" fill={fillColor} />
        </svg>
    );
}

SkipNextIcon.propTypes = {
    fillColor: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
};
