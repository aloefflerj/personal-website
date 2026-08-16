import styled from 'styled-components';
import PropTypes from 'prop-types';
import { SubcategoryItem } from '../subcategories/SubcategoryItem';
import { SubcategoryContentType } from '../../common/SubcategoryContentType';
import { Track } from '../../model/Track';

export const SubcategoriesList = styled.div`
    padding: 32px;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(7, 0.25fr);
    grid-gap: 16px;
    background-color: ${(props) => props.$bgColor};
`;

export function FolderGrid({ items, category }) {
    const songQueue = items
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

    return (
        <SubcategoriesList $bgColor={category.darkColor}>
            {items.map(
                ({
                    id,
                    title,
                    subtitle,
                    link,
                    songPath = null,
                    contentType,
                }) => (
                    <SubcategoryItem
                        id={id}
                        to={link}
                        title={title}
                        subtitle={subtitle}
                        key={`folder-${category.categoryKey}-${link}`}
                        category={category}
                        contentType={contentType}
                        songPath={songPath}
                        songQueue={songQueue}
                        songIndex={
                            songPath
                                ? songQueue.findIndex(
                                      (track) =>
                                          track.src ===
                                          `/assets/audio/${songPath}`
                                  )
                                : -1
                        }
                    />
                )
            )}
        </SubcategoriesList>
    );
}

FolderGrid.propTypes = {
    items: PropTypes.array,
    category: PropTypes.object,
};
