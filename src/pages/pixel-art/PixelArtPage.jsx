import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useCategoryDB } from '../../hooks/useCategoryDB';
import { useEffect, useState } from 'react';
import _ from 'lodash';
import { MarkdownDynamicContent } from '../../components/markdown/MarkdownDynamicContent';
import { SubcategoryType } from '../../common/SubcategoryType';

const PixelArtContent = styled.div`
    color: ${(props) => props.$category.lightColor};
`;

export function PixelArtPage({ category, markdownPathType }) {
    const { link } = useParams();
    const { fetchSubcategoryItemByLink } = useCategoryDB(category);
    const [pixelArtJsonData, setPixelArtJsonData] = useState({});

    useEffect(() => {
        fetchPixelArt();
    }, [link]);

    const fetchPixelArt = () => {
        if (link !== undefined || link !== null) {
            return fetchSubcategoryItemByLink(SubcategoryType.pixel, link).then(
                (pixelArtData) => setPixelArtJsonData(pixelArtData)
            );
        }
    };

    return (
        <PixelArtContent $category={category}>
            <MarkdownDynamicContent
                dbJsonData={pixelArtJsonData}
                subcategory={'pixel-art'}
                category={category}
                link={link}
                markdownPathType={markdownPathType}
            />
        </PixelArtContent>
    );
}

PixelArtPage.propTypes = {
    category: PropTypes.object,
};
