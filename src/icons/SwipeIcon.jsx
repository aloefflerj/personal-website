export function SwipeIcon({ fillColor, width = '24', heigth = '24' }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -0.5 24 24"
            shape-rendering="crispEdges"
            width={width}
            heigth={heigth}
        >
            <path
                stroke={fillColor}
                d="M0 7h4M16 7h2M0 8h4M16 8h2M0 9h4M16 9h4M0 10h4M16 10h4M0 11h4M16 11h6M0 12h22M0 13h24M0 14h24M0 15h22M16 16h6M16 17h4M16 18h4M16 19h2M16 20h2"
            />
        </svg>
    );
}
