import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useCategoryDB } from '../../hooks/useCategoryDB';
import { useEffect, useState } from 'react';
import _ from 'lodash';
import { MarkdownDynamicContent } from '../../components/markdown/MarkdownDynamicContent';

const ProjectContent = styled.div`
    color: ${(props) => props.$category.lightColor};
`;

export function ProjectPage({ category, markdownPathType }) {
    const { link } = useParams();
    const { fetchProjectByLink } = useCategoryDB(category);
    const [projectJsonData, setProjectJsonData] = useState({});

    useEffect(() => {
        fetchProject();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const fetchProject = () => {
        if (link !== undefined || link !== null) {
            return fetchProjectByLink(link).then(
                (projectData) => setProjectJsonData(projectData)
            );
        }
    }

    return (
        <ProjectContent $category={category}>
            <MarkdownDynamicContent
                dbJsonData={projectJsonData}
                subcategory={'projects'}
                category={category}
                link={link}
                markdownPathType={markdownPathType}
            />
        </ProjectContent>
    );
}

ProjectPage.propTypes = {
    category: PropTypes.object,
};
