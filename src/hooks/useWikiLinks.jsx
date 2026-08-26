import { useStringHelper } from './useStringHelper';

const WIKI_LINK_RE = /\[\[([^\]\n]+)\]\]/g;

export const useWikiLinks = () => {
    const { slugify } = useStringHelper();

    // A label resolves by title first so that renaming a page's title in the
    // admin does not silently break inbound links, then by slug.
    const resolveSlug = (items, label) => {
        const normalized = label.trim().toLowerCase();
        const byTitle = items.find(
            (item) => String(item.title).trim().toLowerCase() === normalized
        );
        if (byTitle) return byTitle.link;

        const slug = slugify(label);
        return items.some((item) => item.link === slug) ? slug : null;
    };

    return {
        linkWikiPages: (markdown, basePath, items) =>
            markdown.replace(WIKI_LINK_RE, (match, label) => {
                const slug = resolveSlug(items || [], label);
                const text = label.trim();

                if (!slug) {
                    return `<span class="wiki-missing">${text}</span>`;
                }

                return `[${text}](${basePath}/${slug})`;
            }),
    };
};
