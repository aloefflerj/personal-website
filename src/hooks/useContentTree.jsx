export const childrenOf = (node) =>
    Array.isArray(node.children) ? node.children : [];

// Drops every node flagged `draft: true` (and, recursively, its children) so
// draft content never reaches a grid, timeline or wiki index on the live site.
export const pruneDrafts = (items) =>
    (Array.isArray(items) ? items : [])
        .filter((item) => !item.draft)
        .map((item) =>
            Array.isArray(item.children)
                ? { ...item, children: pruneDrafts(item.children) }
                : item
        );

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
