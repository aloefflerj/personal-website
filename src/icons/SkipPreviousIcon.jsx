import PropTypes from 'prop-types';

export function SkipPreviousIcon({ fillColor, width = '12', height = '12' }) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect x="6" y="4" width="2" height="16" fill={fillColor} />
            <path d="M18 4L10 12L18 20V4Z" fill={fillColor} />
        </svg>
    );
}

SkipPreviousIcon.propTypes = {
    fillColor: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
};
