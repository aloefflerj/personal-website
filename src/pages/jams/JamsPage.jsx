import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useCategoryDB } from '../../hooks/useCategoryDB';
import { useEffect, useState } from 'react';
import _ from 'lodash';
import { MarkdownDynamicContent } from '../../components/markdown/MarkdownDynamicContent';
import { SubcategoryType } from '../../common/SubcategoryType';

const GameContent = styled.div`
    color: ${(props) => props.$category.lightColor};
`;

export function JamsPage({ category, markdownPathType }) {
    const { link } = useParams();
    const { fetchSubcategoryItemByLink } = useCategoryDB(category);
    const [jamsJsonData, setJamsJsonData] = useState({});

    useEffect(() => {
        fetchProject();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [link]);

    const fetchProject = () => {
        if (link !== undefined || link !== null) {
            return fetchSubcategoryItemByLink(SubcategoryType.jams, link).then(
                (jamsData) => setJamsJsonData(jamsData)
            );
        }
    };

    return (
        <GameContent $category={category}>
            <MarkdownDynamicContent
                dbJsonData={jamsJsonData}
                subcategory={'jams'}
                category={category}
                link={link}
                markdownPathType={markdownPathType}
            />
        </GameContent>
    );
}

JamsPage.propTypes = {
    category: PropTypes.object,
};
