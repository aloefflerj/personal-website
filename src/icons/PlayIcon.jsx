import PropTypes from 'prop-types';

export function PlayIcon({ fillColor, width = '12', height = '12' }) {
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
                d="M10 20H8V4H10V6H12V9H14V11H16V13H14V15H12V18H10V20Z"
                fill={fillColor ?? '#333'}
            />
        </svg>
    );
}

PlayIcon.propTypes = {
    fillColor: PropTypes.string,
};
