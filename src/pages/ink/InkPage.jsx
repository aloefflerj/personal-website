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

export function InkPage({ category, markdownPathType }) {
    const { link } = useParams();
    const { fetchSubcategoryItemByLink } = useCategoryDB(category);
    const [inkJsonData, setInkJsonData] = useState({});

    useEffect(() => {
        fetchInk();
    }, [link]);

    const fetchInk = () => {
        if (link !== undefined || link !== null) {
            return fetchSubcategoryItemByLink(
                SubcategoryType.ink,
                link
            ).then((inkJsonData) =>
                setInkJsonData(inkJsonData)
            );
        }
    };

    return (
        <DigitalPaintingContent $category={category}>
            <MarkdownDynamicContent
                dbJsonData={inkJsonData}
                subcategory={SubcategoryType.ink}
                category={category}
                link={link}
                markdownPathType={markdownPathType}
            />
        </DigitalPaintingContent>
    );
}

InkPage.propTypes = {
    category: PropTypes.object,
};
