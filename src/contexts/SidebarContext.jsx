import { createContext } from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';

export const SidebarContext = createContext({});

export const SidebarProvider = ({ children }) => {
    // On mobile the sidebar is an overlay, so it must start closed; on desktop
    // it is part of the layout and starts open.
    const [retracted, setRetracted] = useState(
        () => window.matchMedia('(max-width: 640px)').matches
    );

    return (
        <SidebarContext.Provider value={{ retracted, setRetracted }}>
            {children}
        </SidebarContext.Provider>
    );
};

SidebarProvider.propTypes = {
    children: PropTypes.element,
};
