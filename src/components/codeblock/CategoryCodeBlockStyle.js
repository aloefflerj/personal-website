export function CategoryCodeBlockStyle(category) {
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
            display: 'block',
            overflowX: 'auto',
            background: category.darkerColor,
            color: '#a39e9b',
            padding: '0.5em',
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
// export function CategoryCodeBlockStyle(category) {
//     return {
//         'code[class*="language-"]': {
//             color: category.lightColor,
//             textShadow: '0 1px rgba(0, 0, 0, 0.3)',
//             fontFamily:
//                 // "Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace",
//                 'pixel-medieval',
//             direction: 'ltr',
//             textAlign: 'left',
//             whiteSpace: 'pre',
//             wordSpacing: 'normal',
//             wordBreak: 'normal',
//             lineHeight: '1.5',
//             MozTabSize: '4',
//             OTabSize: '4',
//             tabSize: '4',
//             WebkitHyphens: 'none',
//             MozHyphens: 'none',
//             msHyphens: 'none',
//             hyphens: 'none',
//         },
//         'pre[class*="language-"]': {
//             color: category.lightColor,
//             textShadow: '0 1px rgba(0, 0, 0, 0.3)',
//             fontFamily:
//                 "Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace",
//             direction: 'ltr',
//             textAlign: 'left',
//             whiteSpace: 'pre',
//             wordSpacing: 'normal',
//             wordBreak: 'normal',
//             lineHeight: '1.5',
//             MozTabSize: '4',
//             OTabSize: '4',
//             tabSize: '4',
//             WebkitHyphens: 'none',
//             MozHyphens: 'none',
//             msHyphens: 'none',
//             hyphens: 'none',
//             padding: '1em',
//             margin: '.5em 0',
//             overflow: 'auto',
//             borderRadius: '0.3em',
//             background: category.darkerColor,
//         },
//         ':not(pre) > code[class*="language-"]': {
//             background: category.darkerColor,
//             padding: '.1em',
//             borderRadius: '.3em',
//         },
//         comment: {
//             color: '#7C7C7C',
//         },
//         prolog: {
//             color: '#7C7C7C',
//         },
//         doctype: {
//             color: '#7C7C7C',
//         },
//         cdata: {
//             color: '#7C7C7C',
//         },
//         punctuation: {
//             color: '#c5c8c6',
//         },
//         '.namespace': {
//             Opacity: '.7',
//         },
//         property: {
//             color: '#96CBFE',
//         },
//         keyword: {
//             color: '#96CBFE',
//         },
//         tag: {
//             color: '#96CBFE',
//         },
//         'class-name': {
//             color: '#FFFFB6',
//             textDecoration: 'underline',
//         },
//         boolean: {
//             color: '#99CC99',
//         },
//         constant: {
//             color: '#99CC99',
//         },
//         symbol: {
//             color: '#f92672',
//         },
//         deleted: {
//             color: '#f92672',
//         },
//         number: {
//             color: '#FF73FD',
//         },
//         selector: {
//             color: '#A8FF60',
//         },
//         'attr-name': {
//             color: '#A8FF60',
//         },
//         string: {
//             color: '#A8FF60',
//         },
//         char: {
//             color: '#A8FF60',
//         },
//         builtin: {
//             color: '#A8FF60',
//         },
//         inserted: {
//             color: '#A8FF60',
//         },
//         variable: {
//             color: '#C6C5FE',
//         },
//         operator: {
//             color: '#EDEDED',
//         },
//         entity: {
//             color: '#FFFFB6',
//             cursor: 'help',
//         },
//         url: {
//             color: '#96CBFE',
//         },
//         '.language-css .token.string': {
//             color: '#87C38A',
//         },
//         '.style .token.string': {
//             color: '#87C38A',
//         },
//         atrule: {
//             color: '#F9EE98',
//         },
//         'attr-value': {
//             color: '#F9EE98',
//         },
//         function: {
//             color: '#DAD085',
//         },
//         regex: {
//             color: '#E9C062',
//         },
//         important: {
//             color: '#fd971f',
//             fontWeight: 'bold',
//         },
//         bold: {
//             fontWeight: 'bold',
//         },
//         italic: {
//             fontStyle: 'italic',
//         },
//     };
// }
