import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useCategoryDB } from '../../hooks/useCategoryDB.jsx';
import { Folder } from '../../components/folder/Folder';
import { useEffect, useState } from 'react';

const FoldersList = styled.div`
    display: grid;
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
                />
            );
        });
    };

    return (
        <FoldersList>
            <h1>Projects</h1>
            {listProjects()}
        </FoldersList>
    );
}

ProjectsPage.propTypes = {
    category: PropTypes.object,
};
