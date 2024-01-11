import PropTypes from 'prop-types';
import { Track } from '../../model/Track';

export function DisplayTrack({
    currentTrack,
    audioRef,
    setDuration,
    progressBarRef,
}) {
    const onLoadedMetadata = () => {
        const seconds = audioRef.current.duration;
        setDuration(seconds);
        progressBarRef.current.max = seconds;
    };

    return (
        <div>
            <audio
                src={currentTrack.src}
                ref={audioRef}
                onLoadedMetadata={onLoadedMetadata}
            />
            {/* <div className="audio-info">
                <div className="audio-img">
                    {currentTrack.thumbnail ? (
                        <img src={currentTrack.thumbnail} alt="audio avatar" />
                    ) : (
                        <div className="icon-wrapper">
                            <span className="audio-icon">Music Icon</span>
                        </div>
                    )}
                </div>
                <div className="text">
                    <p className="title">{currentTrack.title}</p>
                    <p>{currentTrack.author}</p>
                </div>
            </div> */}
        </div>
    );
}

DisplayTrack.proptype = {
    currentTrack: PropTypes.objectOf(Track),
    audioRef: PropTypes.element,
    setDuration: PropTypes.func,
    progressBarRef: PropTypes.element,
};
