import { useCallback, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Track } from '../../model/Track';
import { If } from '../If';

export function Controls({
    audioRef,
    progressBarRef,
    duration,
    setTimeProgress,
    tracks,
    trackIndex,
    setTrackIndex,
    setCurrentTrack,
    isGlobal = false,
}) {
    const [isPlaying, setIsPlaying] = useState(false);
    const playAnimationRef = useRef();

    const togglePlayPause = () => {
        setIsPlaying((prev) => !prev);
    };

    const repeat = useCallback(() => {
        const currentTime = audioRef.current.currentTime;
        setTimeProgress(currentTime);

        progressBarRef.current.value = currentTime;
        progressBarRef.current.style.setProperty(
            '--range-progress',
            `${(progressBarRef.current.value / duration) * 100}%`
        );

        playAnimationRef.current = requestAnimationFrame(repeat);
    }, [audioRef, duration, progressBarRef, setTimeProgress]);

    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
        playAnimationRef.current = requestAnimationFrame(repeat);
    }, [isPlaying, audioRef, repeat]);

    const skipForward = () => {
        audioRef.current.currentTime += 15;
    };

    const skipBackward = () => {
        audioRef.current.currentTime -= 15;
    };

    const handlePrevious = () => {
        if (trackIndex === 0) {
            let lastTrackIndex = tracks.length - 1;
            setTrackIndex(lastTrackIndex);
            setCurrentTrack(tracks[lastTrackIndex]);
        } else {
            setTrackIndex((prev) => prev - 1);
            setCurrentTrack(tracks[trackIndex - 1]);
        }
    };

    const handleNext = () => {
        if (trackIndex >= tracks.length - 1) {
            setTrackIndex(0);
            setCurrentTrack(tracks[0]);
        } else {
            setTrackIndex((prev) => prev + 1);
            setCurrentTrack(tracks[trackIndex + 1]);
        }
    };

    return (
        <div className="controls-wrapper">
            <div className="controls">
                <If is={isGlobal}>
                    <button onClick={handlePrevious}>PlaySkipBackSharp</button>
                    <button onClick={skipBackward}>PlayBackSharp</button>
                </If>

                <button onClick={togglePlayPause}>
                    {isPlaying ? 'PauseSharp' : 'PlaySharp'}
                </button>

                <If is={isGlobal}>
                    <button onClick={skipForward}>PlayForwardSharp</button>
                    <button onClick={handleNext}>PlaySkipForwardSharp</button>
                </If>
            </div>
        </div>
    );
}

Controls.proptype = {
    audioRef: PropTypes.element,
    progressBarRef: PropTypes.element,
    duration: PropTypes.number,
    setTimeProgress: PropTypes.func,
    tracks: PropTypes.arrayOf(Track),
    trackIndex: PropTypes.number,
    setTrackIndex: PropTypes.func,
    setCurrentTrack: PropTypes.func,
};