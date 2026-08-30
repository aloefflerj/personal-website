import styled from 'styled-components';
import PropTypes from 'prop-types';
import { SubcategoryItem } from '../subcategories/SubcategoryItem';
import { buildSongQueue, songIndexInQueue } from '../../model/songQueue';
import { SubcategoryContentType } from '../../common/SubcategoryContentType';

export const SubcategoriesList = styled.div`
    padding: 32px;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(7, 0.25fr);
    grid-gap: 16px;
    background-color: ${(props) => props.$bgColor};

    @media screen and (max-width: 640px) {
        grid-template-columns: repeat(${(props) => props.$mobileColumns}, 1fr);
        grid-template-rows: none;
        grid-gap: ${(props) => (props.$mobileColumns === 1 ? '48px' : '24px')};
        justify-items: center;
        padding: 16px;
    }
`;

export function FolderGrid({ items, category, basePath }) {
    const songQueue = buildSongQueue(items);
    const hasSongs = items.some(
        (item) => item.contentType === SubcategoryContentType.song
    );
    const mobileColumns = hasSongs ? 1 : 2;

    return (
        <SubcategoriesList
            $bgColor={category.darkColor}
            $mobileColumns={mobileColumns}
        >
            {items.map(
                ({
                    id,
                    title,
                    subtitle,
                    link,
                    songPath = null,
                    image = null,
                    contentType,
                }) => (
                    <SubcategoryItem
                        id={id}
                        to={`${basePath}/${link}`}
                        title={title}
                        subtitle={subtitle}
                        key={`folder-${category.categoryKey}-${link}`}
                        category={category}
                        contentType={contentType}
                        songPath={songPath}
                        image={image}
                        songQueue={songQueue}
                        songIndex={songIndexInQueue(songQueue, songPath)}
                    />
                )
            )}
        </SubcategoriesList>
    );
}

FolderGrid.propTypes = {
    items: PropTypes.array,
    category: PropTypes.object,
    basePath: PropTypes.string,
};
