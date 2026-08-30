import { useEffect, useState } from 'react';

const MOBILE_QUERY = '(max-width: 640px)';

/**
 * Tracks whether the viewport is at or below the mobile breakpoint (640px),
 * kept in sync with a matchMedia listener. Use it only when behaviour, not
 * just styling, needs to branch; prefer a CSS media query otherwise.
 */
export function useIsMobile() {
    const [isMobile, setIsMobile] = useState(
        () => window.matchMedia(MOBILE_QUERY).matches
    );

    useEffect(() => {
        const mediaQuery = window.matchMedia(MOBILE_QUERY);
        const handleChange = (event) => setIsMobile(event.matches);

        setIsMobile(mediaQuery.matches);
        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    return isMobile;
}
