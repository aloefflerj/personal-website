import PropTypes from 'prop-types';

export function PauseIcon({ fillColor }) {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 4H5V20H10V4ZM19 4H14V20H19V4Z"
                fill={fillColor ?? '#333'}
            />
        </svg>
    );
}

PauseIcon.propTypes = {
    fillColor: PropTypes.string,
};
