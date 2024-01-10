import PropTypes from 'prop-types';
import { Track } from '../../model/Track';
import { DisplayTrack } from './DisplayTrack';
import { useRef, useState } from 'react';
import { ProgressBar } from './ProgressBar';
import { Controls } from './Controls';

export function SingleTrackPlayer({ track }) {

    const [timeProgress, setTimeProgress] = useState(0);
    const [duration, setDuration] = useState(0);
    const [currentTrack, setCurrentTrack] = useState(0);

    const audioRef = useRef();
    const progressBarRef = useRef();

    return (
        <div>
            <div>
                <DisplayTrack
                    currentTrack={track}
                    audioRef={audioRef}
                    setDuration={setDuration}
                    progressBarRef={progressBarRef}
                />
                <Controls
                    audioRef={audioRef}
                    progressBarRef={progressBarRef}
                    duration={duration}
                    setTimeProgress={setTimeProgress}
                    tracks={[track]}
                    trackIndex={0}
                    setTrackIndex={() => null}
                    setCurrentTrack={setCurrentTrack}
                />
                <ProgressBar
                    progressBarRef={progressBarRef}
                    audioRef={audioRef}
                    timeProgress={timeProgress}
                    duration={duration}
                />
            </div>
        </div>
    );
}

SingleTrackPlayer.proptype = {
    track: PropTypes.instanceOf(Track),
};
