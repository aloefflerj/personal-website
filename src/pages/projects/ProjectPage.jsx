import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useCategoryDB } from '../../hooks/useCategoryDB';
import { useEffect, useState } from 'react';
import { useRequest } from '../../hooks/useRequest';
import ReactMarkdown from 'react-markdown';
import emojiPlugin from 'remark-emoji';
import _ from 'lodash';
import CodeBlock from '../../components/codeblock/CodeBlock';

const ProjectContent = styled.div`
    color: ${(props) => props.$category.lightColor};
    /*code {
        background-color: ${(props) => props.$category.lightColor};
        color: ${(props) => props.$category.darkerColor};
        padding: 6px 3px;
        border-radius: 3px;
        font-family: var(--default-font);
    }*/
    code {
        font-family: var(--default-font);
    }
`;

const MarkdownSection = styled(ReactMarkdown)`
    padding: 30px 60px;

    h1 {
        color: ${(props) => props.$category.darkerColor};
        background-color: ${(props) => props.$category.lightColor};
        display: inline-flex;
        gap: 18px;
        justify-content: center;
        align-items: center;
        padding: 6px;
    }

    h2 {
        text-decoration: underline;
    }

    a {
        filter: brightness(150%);
        color: ${(props) => props.$category.lightColor};
        text-decoration: underline;
    }

    img {
        border: 3px solid ${(props) => props.$category.lightColor};
        padding: 6px;
    }

    ul {
        margin-left: 36px;
        list-style-type: square;
    }
`;

export function ProjectPage({ category }) {
    const { projectLink } = useParams();
    const { fetchProjectByLink } = useCategoryDB(category);
    const { fetchUrl } = useRequest();
    const [projectReadme, setProjectReadme] = useState({});

    useEffect(() => {
        if (projectLink !== undefined || projectLink !== null) {
            fetchProjectByLink(projectLink).then((projectData) => {
                if (
                    projectData !== null ||
                    projectData !== undefined ||
                    !_.isEmpty(projectData)
                ) {
                    fetchUrl(projectData.readmeUrl).then(
                        (projectReadmeData) => {
                            setProjectReadme(projectReadmeData);
                        }
                    );
                }
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleReadmeContent = () => {
        if (!_.isEmpty(projectReadme)) {
            return atob(projectReadme.content);
        }
    };

    return (
        <ProjectContent $category={category}>
            {/* <ProjectReadme content={handleReadmeContent()} /> */}
            <MarkdownSection
                remarkPlugins={[emojiPlugin]}
                $category={category}
                components={{ code: CodeBlock }}
            >
                {handleReadmeContent()}
            </MarkdownSection>
        </ProjectContent>
    );
}

ProjectPage.propTypes = {
    category: PropTypes.object,
};
