import { createContext } from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';

export const SidebarContext = createContext({});

export const SidebarProvider = ({ children }) => {
    const [retracted, setRetracted] = useState(false);

    return (
        <SidebarContext.Provider value={{ retracted, setRetracted }}>
            {children}
        </SidebarContext.Provider>
    );
};

SidebarProvider.propTypes = {
    children: PropTypes.element,
};
