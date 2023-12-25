import PropTypes from 'prop-types';

export function MusicIcon({ fill }) {
    return (
        <svg
            width="64"
            height="64"
            viewBox="0 0 24 24"
            fill={fill}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 4H20V20H12V12H18V8H10V20H2V12H8V4ZM8 14H4V18H8V14ZM18 14H14V18H18V14Z"
                fill={fill ?? '#333'}
            />
        </svg>
    );
}

MusicIcon.propTypes = {
    fillColor: PropTypes.string,
};
