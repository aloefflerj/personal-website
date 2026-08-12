# personal-website

Pixel-art themed personal portfolio: games, drawings, music, worldbuilding. React 18 +
Vite 4, plain JavaScript/JSX (no TypeScript), styled-components, react-router v6. Deployed
to Vercel as an SPA. Code and documentation in English.

## Tooling

`npm run dev` | `build` | `preview` | `lint` | `lint:fix` | `prettier:check` |
`prettier:format`

`npm test` is **not implemented** and exits 1 on purpose. There is no test runner in this
project. Never claim tests pass. See `TESTING.md`.

## Folder structure

Respect this layout. Do not invent parallel folders.

```
src/
├── pages/       Route-level components, one folder per area (jams/, games/, ink/...).
│                pages/categories/ holds the five top-level category pages.
├── components/  Feature components, one folder per feature (audioPlayer/, markdown/...).
├── elements/    Reusable UI primitives (buttons/, sidebar/).
├── style/       Colors.jsx (the palette), Option.jsx, Background.jsx.
├── hooks/       useCategoryContext, useCategoryDB, useMarkdownPath, useRequest...
├── contexts/    CategoryContext, SidebarContext.
├── categories/  The Category class, its six instances, and CategoriesKeys.
├── common/      Enum-like constants (MarkdownPathType, SubcategoryType).
├── model/       Plain data classes.   icons/  SVG components.
└── routes/      Router.jsx - every route, deeply nested.

public/db/<category>/<subcategory>/<subcategory>.json      content index
public/content/<category>/<subcategory>/<slug>/<slug>.md   content body
public/assets/img/categories/<category>/<subcategory>/     content images
```

Content is data-driven: one piece of content needs all three of the `public/` entries above.

## Code conventions

- **Colors come only from `src/style/Colors.jsx`**, via the `Category` object (`bgColor`,
  `mediumColor`, `lightColor`, `lighterColor`, `darkColor`, `darkerColor`). There are zero
  hex literals in `src/` outside that file. Keep it that way.
- The category reaches styled-components as the transient prop `$category`, read as
  `props.$category.lightColor`. See `src/elements/buttons/PixelButton.jsx`.
- **Every new component declares `PropTypes`**, at the bottom of the file.
- Named exports. `src/App.jsx` is the only default export; do not add a second.
- `@src` and `@assets` path aliases exist in `vite.config.js`.
- Prettier is fixed: 4-space indent, single quotes, semicolons, 80 columns. Do not fight it;
  run `npm run prettier:format`.
- Fix only lint errors you introduced. Do not mass-fix pre-existing style issues.

**For any non-trivial component or styling work, use the `building-components` skill.**

## Verification

At the end of the development cycle, not after every edit:

1. `npm run lint` passes.
2. `npm run build` passes.
3. Report the real output of both. Never assert success without it.

For visual changes there is no screenshot tooling here. Start `npm run dev` in the
background and give the user the URL and the exact route. **Never claim a visual change
looks right before the user confirms it.**

## Git workflow

Requires the `gh` CLI. If `gh` is missing, stop and say so rather than skipping the issue
step.

1. **Task starts.** Ask the user: new issue, or existing one?
   - Existing: `gh issue list`, show them as `#<number> — <title>`, ask which one.
   - New: `gh issue create --title "<task>" --body "<short scope>"`.

   Never guess or auto-pick an issue.
2. **Branch.** `git checkout -b issue/<number>` off `main`, or check out the existing branch
   when resuming.
3. **Work.** Edit, then lint and build.
4. **Task finishes. Ask before committing.** On approval:
   `<gitmoji> <type>: <description> #<number>`
   e.g. `:sparkles: feat: adds sidebar hover animation #123`
5. **All tasks finish. Ask before** `git push origin issue/<number>`.
6. **After the push.** `gh pr create --base main --head issue/<number> --title "<task>"
   --body "Closes #<number>"`, then give the user the PR URL. Do not merge; that is the
   user's call.

`:sparkles:` feat · `:bug:` fix · `:lipstick:` style/visual · `:recycle:` refactor ·
`:memo:` docs · `:wrench:` config

## Agent checklist

Before finishing any task that creates or edits `.js` / `.jsx` files:

1. **Location** — component in `src/components/<name>/`, page in `src/pages/<area>/`,
   primitive in `src/elements/<group>/`, styling in `src/style/`.
2. **Patterns** — matches the neighbouring files.
3. **Colors** — from the theme; no hex literal introduced.
4. **PropTypes** — declared on every new component.
5. **Dependencies** — none added without asking. Check `package.json` first.
6. **Lint and build** — both run, real output reported.

## Do not do without asking

- Add packages or upgrade dependency versions.
- Change ESLint, Prettier, or Vite configuration.
- Restructure `src/routes/Router.jsx`.
- Commit, push, or open a pull request.
- Delete anything under `public/`.
