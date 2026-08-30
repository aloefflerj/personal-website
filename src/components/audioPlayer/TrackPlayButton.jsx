import PropTypes from 'prop-types';
import { Track } from '../../model/Track';
import { useAudioPlayer } from '../../hooks/useAudioPlayer';
import { AudioPlayButton } from './AudioPlayButton';

export function TrackPlayButton({ track, queue, index, large = false }) {
    const { currentTrack, isPlaying, playFromList, togglePlayPause } =
        useAudioPlayer();

    const isThisTrack = currentTrack?.src === track.src;
    const isThisPlaying = isThisTrack && isPlaying;

    const handleClick = () => {
        if (isThisTrack) {
            togglePlayPause();
        } else {
            playFromList(queue, index);
        }
    };

    return (
        <AudioPlayButton
            togglePlayPause={handleClick}
            playing={isThisPlaying}
            global={false}
            large={large}
        />
    );
}

TrackPlayButton.propTypes = {
    track: PropTypes.instanceOf(Track).isRequired,
    queue: PropTypes.arrayOf(PropTypes.instanceOf(Track)).isRequired,
    index: PropTypes.number.isRequired,
    large: PropTypes.bool,
};
