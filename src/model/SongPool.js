import { Track } from './Track';
import { SongSources } from './SongSources';
import { SubcategoryContentType } from '../common/SubcategoryContentType';

export async function fetchAllSongs() {
    const results = await Promise.all(
        SongSources.map(({ category, subcategory }) =>
            fetch(
                `/db/${category.categoryKey}/${subcategory}/${subcategory}.json`
            )
                .then((response) => response.json())
                .catch(() => [])
        )
    );

    return results
        .flat()
        .filter((item) => item.contentType === SubcategoryContentType.song)
        .map(
            ({ id, title, subtitle, songPath }) =>
                new Track(
                    id,
                    `/assets/audio/${songPath}`,
                    title,
                    subtitle?.artist,
                    subtitle?.album
                )
        );
}
