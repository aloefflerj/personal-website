import { useContext } from 'react';
import { PlayerContext } from '../contexts/PlayerContext';

export const useAudioPlayer = () => {
    const context = useContext(PlayerContext);
    return context;
};
