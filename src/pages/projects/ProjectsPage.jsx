import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useCategoryDB } from '../../hooks/useCategoryDB.jsx';
import { Folder } from '../../components/folder/Folder';
import { useEffect, useState } from 'react';

const FoldersList = styled.div`
    padding: 32px;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(7, 0.25fr);
    grid-gap: 32px;
    background-color: ${(props) => props.$bgColor};
`;

const Title = styled.h2`
    background-color: ${(props) => props.$bgColor};
    margin: 0;
    padding: 4px 0 4px 32px;
`;

export function ProjectsPage({ category }) {
    const { fetchData } = useCategoryDB(category, 'projects');
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetchData().then((projects) => {
            setProjects(projects);
        });
    }, [fetchData]);

    const listProjects = () => {
        return projects.map(({ id, title, link }) => {
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

    return (
        <>
            <Title $bgColor={category.lightColor}>Projects</Title>
            <FoldersList $bgColor={category.darkColor}>
                {listProjects()}
            </FoldersList>
        </>
    );
}

ProjectsPage.propTypes = {
    category: PropTypes.object,
};
