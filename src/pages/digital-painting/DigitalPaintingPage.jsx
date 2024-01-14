import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useCategoryDB } from '../../hooks/useCategoryDB';
import { useEffect, useState } from 'react';
import _ from 'lodash';
import { MarkdownDynamicContent } from '../../components/markdown/MarkdownDynamicContent';
import { SubcategoryType } from '../../common/SubcategoryType';

const DigitalPaintingContent = styled.div`
    color: ${(props) => props.$category.lightColor};
`;

export function DigitalPaintingPage({ category, markdownPathType }) {
    const { link } = useParams();
    const { fetchSubcategoryItemByLink } = useCategoryDB(category);
    const [digitalPaintingJsonData, setDigitalPaintingJsonData] = useState({});

    useEffect(() => {
        fetchDigitalPainting();
    }, [link]);

    const fetchDigitalPainting = () => {
        if (link !== undefined || link !== null) {
            return fetchSubcategoryItemByLink(SubcategoryType.digital, link).then(
                (digitalPaintingData) => setDigitalPaintingJsonData(digitalPaintingData)
            );
        }
    }

    return (
        <DigitalPaintingContent $category={category}>
            <MarkdownDynamicContent
                dbJsonData={digitalPaintingJsonData}
                subcategory={'digital-painting'}
                category={category}
                link={link}
                markdownPathType={markdownPathType}
            />
        </DigitalPaintingContent>
    );
}

DigitalPaintingPage.propTypes = {
    category: PropTypes.object,
};
