import { useEffect, useState } from 'react';
import { Track } from '../../model/Track';
import { AudioPlayer } from './AudioPlayer';
import { useCategoryDB } from '../../hooks/useCategoryDB';
import { Music } from '../../categories/Categories';

export function GlobalAudioPlayer() {
    const { fetchSubcategory } = useCategoryDB(Music);
    const [tracks, setTracks] = useState([]);

    useEffect(() => {
        fetchSubcategory('songs').then((foundTracks) => {
            setTracks(foundTracks);
        });
    }, []);

    const listSongs = () => {
        return tracks.map(
            ({ id, title, subtitle, songPath }) => {
                return new Track(
                    id,
                    `/assets/audio/${songPath}`,
                    title,
                    subtitle.artist,
                    subtitle.album
                );
            }
        );
    };

    return <AudioPlayer tracks={listSongs()} />;
}
