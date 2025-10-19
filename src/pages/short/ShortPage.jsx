import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useCategoryDB } from '../../hooks/useCategoryDB';
import { useEffect, useState } from 'react';
import _ from 'lodash';
import { MarkdownDynamicContent } from '../../components/markdown/MarkdownDynamicContent';
import { SubcategoryType } from '../../common/SubcategoryType';

const ShortContent = styled.div`
    color: ${(props) => props.$category.lightColor};
`;

export function ShortPage({ category, markdownPathType }) {
    const { link } = useParams();
    const { fetchSubcategoryItemByLink } = useCategoryDB(category);
    const [shortJsonData, setShortJsonData] = useState({});

    useEffect(() => {
        fetchProject();
    }, [link]);

    const fetchProject = () => {
        if (link !== undefined || link !== null) {
            return fetchSubcategoryItemByLink(SubcategoryType.short, link).then(
                (shortData) => setShortJsonData(shortData)
            );
        }
    };

    return (
        <ShortContent $category={category}>
            <MarkdownDynamicContent
                dbJsonData={shortJsonData}
                subcategory={'short'}
                category={category}
                link={link}
                markdownPathType={markdownPathType}
            />
        </ShortContent>
    );
}

ShortPage.propTypes = {
    category: PropTypes.object,
};
