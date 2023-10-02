import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useCategoryDB } from '../../hooks/useCategoryDB.jsx';
import { Folder } from '../../components/folder/Folder.jsx';
import { useEffect, useState } from 'react';
import { useOutlet, useParams } from 'react-router-dom';

const FoldersList = styled.div`
    padding: 32px;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(7, 0.25fr);
    grid-gap: 32px;
    background-color: ${(props) => props.$bgColor};
`;

const FolderContent = styled.div`
    display: flex;
    background-color: ${(props) => props.$bgColor};
`;

const Title = styled.h2`
    background-color: ${(props) => props.$bgColor};
    margin: 0;
    padding: 4px 0 4px 32px;
    color: ${(props) => props.$fontColor};
`;

export function FoldersPage({ category, page }) {
    const { fetchProjects, fetchRoadmaps } = useCategoryDB(category);
    const [folders, setFolders] = useState([]);
    const outlet = useOutlet();
    const outletParam = useParams();

    useEffect(() => {
        switch (page) {
            case 'projects':
                fetchProjects().then((folders) => {
                    setFolders(folders);
                });
                break;
            case 'roadmaps':
                fetchRoadmaps().then((folders) => {
                    setFolders(folders);
                });
                break;
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [outletParam]);

    const listFolders = () => {
        return folders.map(({ id, title, link }) => {
            return (
                <Folder
                    to={link}
                    title={title}
                    key={`folder-${category.categoryKey}-${id}`}
                    category={category}
                />
            );
        });
    };

    const title = outlet ? outletParam.link : page;
    const formattedTitle = title.charAt(0).toUpperCase() + title.slice(1);

    const content = outlet ? outlet : listFolders();
    const wrappedContent = outlet ? (
        <FolderContent $bgColor={category.darkColor}>{content}</FolderContent>
    ) : (
        <FoldersList $bgColor={category.darkColor}>{content}</FoldersList>
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

FoldersPage.propTypes = {
    category: PropTypes.object,
    page: PropTypes.string,
};
