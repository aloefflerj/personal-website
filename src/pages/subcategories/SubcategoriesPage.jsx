import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useCategoryDB } from '../../hooks/useCategoryDB.jsx';
import { useEffect, useState } from 'react';
import { useOutlet, useParams } from 'react-router-dom';
import { SubcategoryType } from '../../common/SubcategoryType.js';
import { SubcategoryItem } from '../../components/subcategories/SubcategoryItem.jsx';
import { If } from '../../components/If.jsx';
import { Track } from '../../model/Track.js';
import { SingleTrackPlayer } from '../../components/audioPlayer/SingleTrackPlayer.jsx';

const SubcategoriesList = styled.div`
    padding: 32px;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(7, 0.25fr);
    grid-gap: 16px;
    background-color: ${(props) => props.$bgColor};
`;

const SubcategoriesContent = styled.div`
    display: flex;
    background-color: ${(props) => props.$bgColor};
`;

const SubcategoriesItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const Title = styled.h2`
    background-color: ${(props) => props.$bgColor};
    margin: 0;
    padding: 4px 0 4px 32px;
    color: ${(props) => props.$fontColor};
`;

export function SubcategoriesPage({ category, page }) {
    const { fetchSubcategory } = useCategoryDB(category);
    const [subcategoriesItems, setSubcategoriesItems] = useState([]);
    const outlet = useOutlet();
    const outletParam = useParams();

    useEffect(() => {
        fetchSubcategory(SubcategoryType[page]).then((subcategoriesItems) => {
            setSubcategoriesItems(subcategoriesItems);
        });
    }, [outletParam]);

    const listFolders = () => {
        return subcategoriesItems.map(
            ({ id, title, subtitle, link, songPath = null, contentType }) => {
                return (
                    <SubcategoriesItemWrapper key={id}>
                        <SubcategoryItem
                            to={link}
                            title={title}
                            subtitle={subtitle}
                            key={`folder-${category.categoryKey}-${id}`}
                            category={category}
                            contentType={contentType}
                        />
                        <If is={songPath !== null && songPath !== undefined}>
                            <SingleTrackPlayer
                                track={
                                    new Track(
                                        id,
                                        `/assets/audio/${songPath}`,
                                        title,
                                        subtitle?.artist,
                                        subtitle?.album
                                    )
                                }
                            />
                        </If>
                    </SubcategoriesItemWrapper>
                );
            }
        );
    };

    const title = outlet ? outletParam.link : page;
    const formattedTitle = title.charAt(0).toUpperCase() + title.slice(1);

    const content = outlet ? outlet : listFolders();
    const wrappedContent = outlet ? (
        <SubcategoriesContent $bgColor={category.darkColor}>
            {content}
        </SubcategoriesContent>
    ) : (
        <SubcategoriesList $bgColor={category.darkColor}>
            {content}
        </SubcategoriesList>
    );

    return (
        <>
            <Title
                $bgColor={category.lightColor}
                $fontColor={category.darkerColor}
            >
                {formattedTitle}
            </Title>
            {wrappedContent}
        </>
    );
}

SubcategoriesPage.propTypes = {
    category: PropTypes.object,
    page: PropTypes.string,
};
