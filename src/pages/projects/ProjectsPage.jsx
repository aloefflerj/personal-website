import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useCategoryDB } from '../../hooks/useCategoryDB.jsx';
import { Folder } from '../../components/folder/Folder';
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

const ProjectContent = styled.div`
    display: flex;
    background-color: ${(props) => props.$bgColor};
`;

const Title = styled.h2`
    background-color: ${(props) => props.$bgColor};
    margin: 0;
    padding: 4px 0 4px 32px;
`;

export function ProjectsPage({ category }) {
    const { fetchProjects } = useCategoryDB(category);
    const [projects, setProjects] = useState([]);
    const outlet = useOutlet();
    const outletParam = useParams();

    useEffect(() => {
        fetchProjects().then((projects) => {
            setProjects(projects);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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

    return outlet ? (
        <>
            <Title $bgColor={category.lightColor}>
                {outletParam.projectLink}
            </Title>
            <ProjectContent $bgColor={category.darkColor}>
                {outlet}
            </ProjectContent>
        </>
    ) : (
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
