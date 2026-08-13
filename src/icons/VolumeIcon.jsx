import PropTypes from 'prop-types';

export function VolumeIcon({
    fillColor,
    muted = false,
    width = '12',
    height = '12',
}) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M3 9H7L12 4V20L7 15H3V9Z" fill={fillColor} />
            {muted ? (
                <path
                    d="M16 8L22 16M22 8L16 16"
                    stroke={fillColor}
                    strokeWidth="2"
                />
            ) : (
                <path
                    d="M16 8C17.5 9.5 17.5 14.5 16 16"
                    stroke={fillColor}
                    strokeWidth="2"
                    fill="none"
                />
            )}
        </svg>
    );
}

VolumeIcon.propTypes = {
    fillColor: PropTypes.string,
    muted: PropTypes.bool,
    width: PropTypes.string,
    height: PropTypes.string,
};
