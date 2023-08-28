import PropTypes from 'prop-types';
import { LightAsync as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { paraisoDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { CategoryCodeBlockStyle } from './CategoryCodeBlockStyle';
import { useCategoryContext } from '../../hooks/useCategoryContext';

export default function CodeBlock({ language = null, children }) {
    const { category } = useCategoryContext();

    return (
        <SyntaxHighlighter
            language={language ?? 'php'}
            style={CategoryCodeBlockStyle(category)}
            // style={CategoryCodeBlockStyle(category)}
        >
            {children}
        </SyntaxHighlighter>
    );
}

CodeBlock.propTypes = {
    children: PropTypes.array.isRequired,
    language: PropTypes.string,
};
