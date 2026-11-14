import { Music } from '../categories/Categories';
import { SubcategoryContentType } from '../common/SubcategoryContentType';
import { trackFromRecord } from './songQueue';

const fetchDb = (path) =>
    fetch(`/db/${path}`)
        .then((response) => response.json())
        .catch(() => []);

// Walks a content record tree depth-first and collects every song node, skipping
// anything flagged `draft: true` (and, with it, that node's whole subtree).
const collectSongs = (records) =>
    (Array.isArray(records) ? records : [])
        .filter((record) => !record.draft)
        .flatMap((record) =>
            record.contentType === SubcategoryContentType.song
                ? [record]
                : collectSongs(record.children)
        );

// Every playable song stored under the Music category, regardless of how deeply
// it is nested. Feeds the global player's no-context random play.
export async function fetchAllSongs() {
    const key = Music.categoryKey;
    const subcategories = await fetchDb(`${key}/${key}.json`);

    const trees = await Promise.all(
        (Array.isArray(subcategories) ? subcategories : []).map(({ link }) =>
            fetchDb(`${key}/${link}/${link}.json`)
        )
    );

    return collectSongs(trees.flat()).map(trackFromRecord);
}
