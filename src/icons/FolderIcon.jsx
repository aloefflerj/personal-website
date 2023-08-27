import PropTypes from 'prop-types';

export function FolderIcon({ fill }) {
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
                d="M4 4H12V6H20H22V8L22 18V20L20 20H4L2 20V18V6V4H4ZM20 8H10V6H4V18H20V8Z"
                fill={fill}
            />
        </svg>
    );
}

FolderIcon.propTypes = {
    fill: PropTypes.string,
};
