export function CategoryCodeBlockStyle(category, inline) {
    return {
        'hljs-comment': {
            color: category.bgColor,
        },
        'hljs-quote': {
            color: '#8d8687',
        },
        'hljs-variable': {
            color: category.lightColor,
            filter: 'brightness(200%)',
        },
        'hljs-template-variable': {
            color: category.lightColor,
            filter: 'brightness(200%)',
        },
        'hljs-tag': {
            color: category.lightColor,
        },
        'hljs-name': {
            color: category.lightColor,
        },
        'hljs-selector-id': {
            color: '#ef6155',
        },
        'hljs-selector-class': {
            color: category.lightColor,
        },
        'hljs-regexp': {
            color: '#ef6155',
        },
        'hljs-link': {
            color: '#ef6155',
        },
        'hljs-meta': {
            color: '#ef6155',
        },
        'hljs-number': {
            color: '#f99b15',
        },
        'hljs-built_in': {
            color: '#f99b15',
        },
        'hljs-builtin-name': {
            color: '#f99b15',
        },
        'hljs-literal': {
            color: '#f99b15',
        },
        'hljs-type': {
            color: '#f99b15',
        },
        'hljs-params': {
            color: '#f99b15',
        },
        'hljs-deletion': {
            color: '#f99b15',
        },
        'hljs-title': {
            color: '#fec418',
        },
        'hljs-section': {
            color: '#fec418',
        },
        'hljs-attribute': {
            color: '#fec418',
        },
        'hljs-string': {
            color: category.mediumColor,
            filter: 'brightness(200%)',
        },
        'hljs-symbol': {
            color: '#48b685',
        },
        'hljs-bullet': {
            color: '#48b685',
        },
        'hljs-addition': {
            color: '#48b685',
        },
        'hljs-keyword': {
            color: '#815ba4',
        },
        'hljs-selector-tag': {
            color: '#815ba4',
        },
        hljs: {
            display: inline ? 'inline' : 'block',
            overflowX: 'auto',
            background: category.darkerColor,
            color: '#a39e9b',
            padding: inline ? '0.2em 0.4em' : '0.5em',
            fontFamily: 'pixel-medieval !important',
        },
        'hljs-emphasis': {
            fontStyle: 'italic',
        },
        'hljs-strong': {
            fontWeight: 'bold',
        },
    };
}
