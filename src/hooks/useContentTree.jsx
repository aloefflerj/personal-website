export const childrenOf = (node) =>
    Array.isArray(node.children) ? node.children : [];

export const useContentTree = () => {
    return {
        findNodeByPath: (items, segments) => {
            const trail = [];
            let siblings = Array.isArray(items) ? items : [];

            for (const segment of segments) {
                const node = siblings.find(
                    (candidate) => candidate.link === segment
                );
                if (!node) return { node: null, trail: [] };

                trail.push(node);
                siblings = childrenOf(node);
            }

            return {
                node: trail.length > 0 ? trail[trail.length - 1] : null,
                trail,
            };
        },
    };
};
