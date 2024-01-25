import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

export const MarkdownSection = styled(ReactMarkdown)`
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
        /* border: 3px solid ${(props) => props.$category.lightColor}; */
        padding: 6px;
        background-color: ${(props) => props.$category.bgColor};
        padding: 12px 12px;
    }

    ul {
        margin-left: 36px;
        list-style-type: square;
    }
    
    li {
        list-style-type: square;
        margin-top: 12px;
    }

    hr {
        height: 3px;
        background-color: ${(props) => props.$category.lightColor};
        border: none;
    }

    code {
        font-family: var(--default-font);
    }

    blockquote {
        filter: brightness(120%);
        color: ${(props) => props.$category.mediumColor};
        margin: 0 0 0 12px;
        padding: 0;
        p {
            margin: 0;
        }
    }
`;
