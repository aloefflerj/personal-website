import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const ProjectContent = styled.div`
    color: ${(props) => props.$fontColor};
`;

export function ProjectPage({ category }) {
    const { projectId } = useParams();
    return (
        <ProjectContent $fontColor={category.lightColor}>
            <h1>Título x</h1>
            <h3>{projectId}</h3>
        </ProjectContent>
    );
}

ProjectPage.propTypes = {
    category: PropTypes.object,
};
