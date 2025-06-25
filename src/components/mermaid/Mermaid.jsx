import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

export function Mermaid({ chart }) {
    const containerRef = useRef(null);

    useEffect(() => {
        mermaid.initialize({ startOnLoad: false, fontFamily: 'pixel' });

        const renderDiagram = async () => {
            if (containerRef.current && chart) {
                const content = chart[0];

                if (typeof content === 'string' && content.trim()) {
                    const { svg } = await mermaid.render(
                        'mermaidDiagram',
                        content.trim()
                    );
                    containerRef.current.innerHTML = svg;
                }
            }
        };

        renderDiagram();
    }, [chart]);

    return <div ref={containerRef} />;
}
