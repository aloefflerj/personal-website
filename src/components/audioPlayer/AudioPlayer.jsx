import { useEffect, useRef, useState } from 'react';
import { Controls } from './Controls';
import { DisplayTrack } from './DisplayTrack';
import { ProgressBar } from './ProgressBar';
import PropTypes from 'prop-types';
import { Track } from '../../model/Track';
import { Spinner } from '../Spinner';

export function AudioPlayer({ tracks }) {
    const [trackIndex, setTrackIndex] = useState(0);

    const [currentTrack, setCurrentTrack] = useState([]);

    const [timeProgress, setTimeProgress] = useState(0);
    const [duration, setDuration] = useState(0);

    const audioRef = useRef();
    const progressBarRef = useRef();

    useEffect(() => {
        setCurrentTrack(tracks[trackIndex] ?? tracks[0] ?? null);
    }, []);

    const loading = () => tracks.length === 0 || currentTrack === null;

    return loading() ? (
        <Spinner />
    ) : (
        <div className="audio-player">
            <div className="inner">
                <DisplayTrack
                    currentTrack={currentTrack}
                    audioRef={audioRef}
                    setDuration={setDuration}
                    progressBarRef={progressBarRef}
                />
                <Controls
                    audioRef={audioRef}
                    progressBarRef={progressBarRef}
                    duration={duration}
                    setTimeProgress={setTimeProgress}
                    tracks={tracks}
                    trackIndex={trackIndex}
                    setTrackIndex={setTrackIndex}
                    setCurrentTrack={setCurrentTrack}
                    isGlobal={true}
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

AudioPlayer.proptype = {
    tracks: PropTypes.arrayOf(Track),
    global: PropTypes.bool,
};
