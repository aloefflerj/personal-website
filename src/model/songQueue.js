import { SubcategoryContentType } from '../common/SubcategoryContentType';
import { Track } from './Track';

const audioSrc = (songPath) => `/assets/audio/${songPath}`;

const imageSrc = (image) => (image ? `/assets/img/songs/${image}` : null);

// Turns a single song record from a content DB into a playable Track. Shared by
// the folder queues and the global random pool so every source builds tracks the
// same way.
export const trackFromRecord = ({ id, title, subtitle, songPath, image }) =>
    new Track(
        id,
        audioSrc(songPath),
        title,
        subtitle?.artist,
        subtitle?.album,
        imageSrc(image)
    );

// Builds the ordered list of playable tracks from a folder's items, keeping only
// the song entries. Shared by the folder grid and the single song page so both
// feed the global player the same queue.
export const buildSongQueue = (items) =>
    (Array.isArray(items) ? items : [])
        .filter((item) => item.contentType === SubcategoryContentType.song)
        .map(trackFromRecord);

// Index of the track matching songPath within a queue from buildSongQueue, or
// -1 when the item is not a song.
export const songIndexInQueue = (queue, songPath) =>
    songPath
        ? queue.findIndex((track) => track.src === audioSrc(songPath))
        : -1;
