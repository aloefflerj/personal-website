import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useCategoryDB } from '../../hooks/useCategoryDB.jsx';
import { useEffect, useState } from 'react';
import { useOutlet, useParams } from 'react-router-dom';
import { SubcategoryType } from '../../common/SubcategoryType.js';
import { SubcategoryItem } from '../../components/subcategories/SubcategoryItem.jsx';
import { useStringHelper } from '../../hooks/useStringHelper.jsx';
import { FoldersLayout } from '../folders-layout/FoldersLayout.jsx';

export const SubcategoriesList = styled.div`
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

export function SubcategoriesPage({ category, page }) {
    const { fetchSubcategory } = useCategoryDB(category);
    const [subcategoriesItems, setSubcategoriesItems] = useState([]);
    const outlet = useOutlet();
    const outletParam = useParams();
    const { capitalizeFirstLetter } = useStringHelper();

    useEffect(() => {
        fetchSubcategory(SubcategoryType[page]).then((subcategoriesItems) => {
            setSubcategoriesItems(subcategoriesItems);
        });
    }, [outletParam]);

    const listFolders = () => {
        return subcategoriesItems.map(
            ({ id, title, subtitle, link, songPath = null, contentType }) => {
                return (
                    <SubcategoryItem
                        id={id}
                        to={link}
                        title={title}
                        subtitle={subtitle}
                        key={`folder-${category.categoryKey}-${id}`}
                        category={category}
                        contentType={contentType}
                        songPath={songPath}
                    />
                );
            }
        );
    };

    const title = outlet ? outletParam.link : page;
    const formattedTitle = capitalizeFirstLetter(title);

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
        <FoldersLayout title={formattedTitle} category={category}>
            {wrappedContent}
        </FoldersLayout>
    );
}

SubcategoriesPage.propTypes = {
    category: PropTypes.object,
    page: PropTypes.string,
};
