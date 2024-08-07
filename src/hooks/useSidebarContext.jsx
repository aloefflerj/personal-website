import { useContext } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';

export const useSidebarContext = () => {
    const context = useContext(SidebarContext);
    return context;
};
