import { createContext, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Track } from '../model/Track';
import { fetchAllSongs } from '../model/SongPool';

export const PlayerContext = createContext({});

const STORAGE_KEY = 'global-player-state';
const PROGRESS_PERSIST_INTERVAL_MS = 3000;

function trackFromPlain(plain) {
    if (!plain) return null;
    return new Track(
        plain.id,
        plain.src,
        plain.title,
        plain.author,
        plain.album
    );
}

export const PlayerProvider = ({ children }) => {
    const audioRef = useRef(null);
    if (audioRef.current === null) {
        audioRef.current = new Audio();
    }

    const [currentTrack, setCurrentTrack] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [muted, setMuted] = useState(false);
    const [progress, setProgress] = useState(0);
    const [duration, setDuration] = useState(0);
    const [queue, setQueue] = useState([]);
    const [queueIndex, setQueueIndex] = useState(0);
    const [mode, setMode] = useState('random');

    const currentTrackRef = useRef(null);
    const isPlayingRef = useRef(false);
    const mutedRef = useRef(false);
    const queueRef = useRef([]);
    const queueIndexRef = useRef(0);
    const modeRef = useRef('random');
    const songPoolRef = useRef([]);

    const persist = () => {
        const data = {
            track: currentTrackRef.current,
            queue: queueRef.current,
            queueIndex: queueIndexRef.current,
            mode: modeRef.current,
            muted: mutedRef.current,
            isPlaying: isPlayingRef.current,
            progress: audioRef.current.currentTime,
        };
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    };

    const loadAndPlay = (track, tracks, index) => {
        const audio = audioRef.current;
        audio.src = track.src;
        audio.currentTime = 0;

        setCurrentTrack(track);
        currentTrackRef.current = track;
        setQueue(tracks);
        queueRef.current = tracks;
        setQueueIndex(index);
        queueIndexRef.current = index;
        setProgress(0);

        audio
            .play()
            .then(() => {
                setIsPlaying(true);
                isPlayingRef.current = true;
                persist();
            })
            .catch(() => {
                setIsPlaying(false);
                isPlayingRef.current = false;
                persist();
            });
    };

    const playRandom = () => {
        const pool = songPoolRef.current;
        if (pool.length === 0) return;

        const track = pool[Math.floor(Math.random() * pool.length)];
        setMode('random');
        modeRef.current = 'random';
        loadAndPlay(track, pool, pool.indexOf(track));
    };

    const playFromList = (tracks, index) => {
        if (
            !tracks ||
            tracks.length === 0 ||
            index < 0 ||
            index >= tracks.length
        ) {
            return;
        }
        setMode('list');
        modeRef.current = 'list';
        loadAndPlay(tracks[index], tracks, index);
    };

    const togglePlayPause = () => {
        const audio = audioRef.current;
        if (!currentTrackRef.current) return;

        if (audio.paused) {
            audio
                .play()
                .then(() => {
                    setIsPlaying(true);
                    isPlayingRef.current = true;
                    persist();
                })
                .catch(() => {
                    setIsPlaying(false);
                    isPlayingRef.current = false;
                    persist();
                });
        } else {
            audio.pause();
            setIsPlaying(false);
            isPlayingRef.current = false;
            persist();
        }
    };

    const stop = () => {
        const audio = audioRef.current;
        audio.pause();
        audio.currentTime = 0;
        audio.removeAttribute('src');

        setIsPlaying(false);
        isPlayingRef.current = false;
        setCurrentTrack(null);
        currentTrackRef.current = null;
        setProgress(0);
        setDuration(0);
        persist();
    };

    const seek = (time) => {
        audioRef.current.currentTime = time;
        setProgress(time);
    };

    const toggleMute = () => {
        setMuted((prev) => {
            const next = !prev;
            audioRef.current.volume = next ? 0 : 1;
            mutedRef.current = next;
            persist();
            return next;
        });
    };

    const handleEnded = () => {
        if (modeRef.current === 'list') {
            const q = queueRef.current;
            if (q.length === 0) return;
            const nextIndex = (queueIndexRef.current + 1) % q.length;
            loadAndPlay(q[nextIndex], q, nextIndex);
        } else {
            playRandom();
        }
    };

    const handleTimeUpdate = () => {
        setProgress(audioRef.current.currentTime);
    };

    const handleLoadedMetadata = () => {
        setDuration(audioRef.current.duration);
    };

    const hydrateFromStorage = () => {
        const saved = sessionStorage.getItem(STORAGE_KEY);
        if (!saved) return;

        let parsed;
        try {
            parsed = JSON.parse(saved);
        } catch {
            return;
        }

        const track = trackFromPlain(parsed.track);
        const queueFromStorage = (parsed.queue ?? []).map(trackFromPlain);
        const audio = audioRef.current;

        setMode(parsed.mode ?? 'random');
        modeRef.current = parsed.mode ?? 'random';
        setQueue(queueFromStorage);
        queueRef.current = queueFromStorage;
        setQueueIndex(parsed.queueIndex ?? 0);
        queueIndexRef.current = parsed.queueIndex ?? 0;
        setMuted(parsed.muted ?? false);
        mutedRef.current = parsed.muted ?? false;
        audio.volume = parsed.muted ? 0 : 1;

        if (!track) return;

        audio.src = track.src;
        setCurrentTrack(track);
        currentTrackRef.current = track;

        const onLoaded = () => {
            audio.currentTime = parsed.progress ?? 0;
            setProgress(parsed.progress ?? 0);

            if (parsed.isPlaying) {
                audio
                    .play()
                    .then(() => {
                        setIsPlaying(true);
                        isPlayingRef.current = true;
                    })
                    .catch(() => {
                        setIsPlaying(false);
                        isPlayingRef.current = false;
                    });
            }
            audio.removeEventListener('loadedmetadata', onLoaded);
        };
        audio.addEventListener('loadedmetadata', onLoaded);
    };

    useEffect(() => {
        const audio = audioRef.current;

        fetchAllSongs().then((songs) => {
            songPoolRef.current = songs;
        });

        hydrateFromStorage();

        audio.addEventListener('ended', handleEnded);
        audio.addEventListener('timeupdate', handleTimeUpdate);
        audio.addEventListener('loadedmetadata', handleLoadedMetadata);
        window.addEventListener('pagehide', persist);

        const progressInterval = setInterval(() => {
            if (isPlayingRef.current) persist();
        }, PROGRESS_PERSIST_INTERVAL_MS);

        return () => {
            audio.removeEventListener('ended', handleEnded);
            audio.removeEventListener('timeupdate', handleTimeUpdate);
            audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
            window.removeEventListener('pagehide', persist);
            clearInterval(progressInterval);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <PlayerContext.Provider
            value={{
                currentTrack,
                isPlaying,
                muted,
                progress,
                duration,
                queue,
                queueIndex,
                mode,
                playRandom,
                playFromList,
                togglePlayPause,
                stop,
                seek,
                toggleMute,
            }}
        >
            {children}
        </PlayerContext.Provider>
    );
};

PlayerProvider.propTypes = {
    children: PropTypes.node,
};
