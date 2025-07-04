import PropTypes from 'prop-types';
import { LightAsync as SyntaxHighlighter } from 'react-syntax-highlighter';
import { CategoryCodeBlockStyle } from './CategoryCodeBlockStyle';
import { useCategoryContext } from '../../hooks/useCategoryContext';
import { Mermaid } from '../mermaid/Mermaid';

export default function CodeBlock({ className, children, inline }) {
    const { category } = useCategoryContext();
    const language = className?.replace('language-', '') ?? 'txt';

    return className === 'language-mermaid' ? (
        <Mermaid chart={children} />
    ) : (
        <SyntaxHighlighter
            language={language}
            style={CategoryCodeBlockStyle(category, inline)}
        >
            {children}
        </SyntaxHighlighter>
    );
}

CodeBlock.propTypes = {
    children: PropTypes.array.isRequired,
    className: PropTypes.string,
    inline: PropTypes.bool,
};
