import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useCategoryDB } from '../../hooks/useCategoryDB';
import { useEffect, useState } from 'react';
import _ from 'lodash';
import { MarkdownDynamicContent } from '../../components/markdown/MarkdownDynamicContent';
import { SubcategoryType } from '../../common/SubcategoryType';

const SongContent = styled.div`
    color: ${(props) => props.$category.lightColor};
`;

export function SongPage({ category, markdownPathType }) {
    const { link } = useParams();
    const { fetchSubcategoryItemByLink } = useCategoryDB(category);
    const [songJsonData, setSongJsonData] = useState({});

    useEffect(() => {
        fetchProject();
    }, [link]);

    const fetchProject = () => {
        if (link !== undefined || link !== null) {
            return fetchSubcategoryItemByLink(SubcategoryType.songs, link).then(
                (songData) => setSongJsonData(songData)
            );
        }
    }

    return (
        <SongContent $category={category}>
            <MarkdownDynamicContent
                dbJsonData={songJsonData}
                subcategory={'songs'}
                category={category}
                link={link}
                markdownPathType={markdownPathType}
            />
        </SongContent>
    );
}

SongPage.propTypes = {
    category: PropTypes.object,
};
