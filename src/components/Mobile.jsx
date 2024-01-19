import { useEffect, useState } from 'react';
import { If } from './If';
import PropTypes from 'prop-types';

export function Mobile({
    ifIsMobileComponent,
    ifNotMobileComponent,
    mobileWidthBreakpoint = 640,
}) {
    const windowSmallerThanBreakpoint =
        window.innerWidth < mobileWidthBreakpoint;

    const [isMobile, setIsMobile] = useState(windowSmallerThanBreakpoint);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
    });

    const handleResize = () => {
        if (windowSmallerThanBreakpoint) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    };

    return (
        <>
            <If is={isMobile}>{ifIsMobileComponent}</If>
            <If is={!isMobile}>{ifNotMobileComponent}</If>
        </>
    );
}

Mobile.propTypes = {
    ifIsMobileComponent: PropTypes.element,
    ifNotMobileComponent: PropTypes.element,
    mobileWidthBreakpoint: PropTypes.number,
};
