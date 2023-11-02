import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useCategoryDB } from '../../hooks/useCategoryDB';
import { useEffect, useState } from 'react';
import _ from 'lodash';
import { MarkdownDynamicContent } from '../../components/markdown/MarkdownDynamicContent';

const GameContent = styled.div`
    color: ${(props) => props.$category.lightColor};
`;

export function GamesPage({ category, markdownPathType }) {
    const { link } = useParams();
    const { fetchGameByLink } = useCategoryDB(category);
    const [gameJsonData, setGameJsonData] = useState({});

    useEffect(() => {
        fetchProject();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [link]);

    const fetchProject = () => {
        if (link !== undefined || link !== null) {
            return fetchGameByLink(link).then(
                (gameData) => setGameJsonData(gameData)
            );
        }
    }

    return (
        <GameContent $category={category}>
            <MarkdownDynamicContent
                dbJsonData={gameJsonData}
                subcategory={'games'}
                category={category}
                link={link}
                markdownPathType={markdownPathType}
            />
        </GameContent>
    );
}

GamesPage.propTypes = {
    category: PropTypes.object,
};
