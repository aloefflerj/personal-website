---
name: building-components
description: Use when creating, editing, or restyling a React component, page, or styled-component in the personal-website repo - covers the theme-color threading, transient props, context hooks, file placement, and the pixel-art visual constraints.
---

# Building components in personal-website

## The one rule that matters

Every visual value is derived from a `Category`. A component never picks a color; it
receives one.

`src/categories/Categories.js` exports six `Category` instances (`Blank`, `Code`,
`Drawings`, `Game`, `Music`, `Worldbuilding`). Each carries six color slots, resolved from
`src/style/Colors.jsx`:

| Slot | Typical use |
|---|---|
| `bgColor` | page background |
| `darkerColor` | outlines, drop shadows, text on light surfaces |
| `darkColor` | pressed and hover-inset surfaces |
| `mediumColor` | default surface of a control |
| `lightColor` | highlights, body text on dark surfaces |
| `lighterColor` | strongest highlight, active-state text |

There are **zero** hex literals anywhere in `src/` outside `Colors.jsx`. Keep it that way.
If a design needs a shade that does not exist, add it to `Colors.jsx` for all six
categories rather than inlining it in one component.

## Threading the category through

The whole `Category` object is passed to styled-components as the transient prop
`$category`. The `$` prefix keeps styled-components from forwarding it to the DOM, which
would produce a React unknown-attribute warning.

Read it as `props.$category.<slot>`, with a `Blank` fallback for slots that may be missing
while the category context is still resolving:

```jsx
import styled from 'styled-components';
import { Blank } from '../../categories/Categories';

const Panel = styled.div`
    background-color: ${(props) =>
        props.$category.mediumColor ?? Blank.mediumColor};
    color: ${(props) => props.$category.lightColor ?? Blank.lightColor};
`;
```

Reference implementation: `src/elements/buttons/PixelButton.jsx`. It is the canonical
example of the pixel-art border technique (nested `box-shadow` insets plus `::before` /
`::after` bars) and of the fallback pattern.

## Where the category comes from

Two sources, and picking the wrong one is the most common mistake:

- **Route-level pages get it from context.** `useCategoryContext()` returns
  `{ category, setCategory }`. Category pages set it in an effect when it is still `Blank`
  (see `src/pages/categories/GamePage.jsx`).
- **Leaf components get it as a prop**, passed down explicitly. `SubcategoryItem`,
  `MarkdownDynamicContent` and the per-subcategory pages all take `category` as a prop.

Rule of thumb: if the component is rendered directly by a `<Route>`, use the context hook.
Otherwise take a `category` prop. Do not call `useCategoryContext()` deep in a leaf just to
avoid passing a prop; it couples the component to the router.

`useSidebarContext()` returns `{ retracted, setRetracted }` and is only for sidebar
behaviour.

## Data hooks

- `useCategoryDB(category)` returns `{ fetchSubcategory, fetchSubcategoryItemByLink }`.
  Both `fetch` from `/db/<categoryKey>/<subcategory>/<subcategory>.json`.
  `fetchSubcategory(subcategory)` resolves to the whole array;
  `fetchSubcategoryItemByLink(subcategory, link)` resolves to the single matching entry or
  `null`.
- `useMarkdownPath()` builds the URL for a content markdown file. Which strategy it uses is
  chosen by the `MarkdownPathType` enum in `src/common/MarkdownPathType.js`
  (`internal`, `githubRaw`, `githubApi`).
- `useRequest()` is the thin fetch wrapper.
- `useStringHelper()` exposes `capitalizeFirstLetter`.

Subcategory names are not free-form strings: use `SubcategoryType` from
`src/common/SubcategoryType.js`.

## File placement

| Kind of thing | Goes in | Mirror this |
|---|---|---|
| Route-level page | `src/pages/<area>/` | `src/pages/jams/JamsPage.jsx` |
| Top-level category page | `src/pages/categories/` | `src/pages/categories/GamePage.jsx` |
| Feature component | `src/components/<feature>/` | `src/components/pixel/` |
| Reusable UI primitive | `src/elements/<group>/` | `src/elements/buttons/PixelButton.jsx` |
| Shared styled base | `src/style/` | `src/style/Option.jsx` |
| Hook | `src/hooks/` | `src/hooks/useCategoryDB.jsx` |

One component per file, file named after the component. Extension is `.jsx` even for
hooks.

## Conventions checklist

- **Named exports.** `export function Foo()` for components,
  `export const Foo = styled.div\`...\`` for styled ones. `src/App.jsx` is the only default
  export in the codebase; do not add a second.
- **`import styled from 'styled-components'`** — the default import. The named
  `import { styled }` form also appears in the codebase, but the default form is the
  majority; use it in new files.
- **PropTypes on every component**, declared at the bottom of the file after the component:

  ```jsx
  SidebarOption.propTypes = {
      children: PropTypes.string,
      to: PropTypes.string,
  };
  ```

  `category` is `PropTypes.object`. Note that `prop-types` is imported by most of the
  codebase but is **not declared in `package.json`** — it resolves transitively. Do not
  "fix" this as a side effect of component work; it is a separate decision.
- **Styled-components are declared at module scope**, above the component that uses them,
  never inside the render function.

## Visual constraints

The site is pixel-art themed and the look is deliberate. New work must match it.

- Two fonts, declared in `src/index.css` and loaded from `public/assets/fonts/`:
  `pixel` (handjet.ttf, the default, exposed as `var(--default-font)`) and `pixel-medieval`.
  Use `var(--default-font)`, not a font name.
- Base `font-size` is `30px` on `body`. Components size up from there (the sidebar options
  are `36px`). Small type looks broken in these fonts; do not go below ~18px.
- Borders and shadows are hard-edged, in multiples of `3px`, built from `box-shadow` rather
  than `border`. No `border-radius`. No soft or blurred shadows.
- `ul`, `ol` and `li` have their list styling stripped globally in `index.css`. Re-add
  markers deliberately if a list needs them.
- Hover states use `filter: brightness(150%)` plus a deeper inset, as in `PixelButton`.

## Before you finish

Run `npm run lint` and `npm run build`, and report their real output. There is no test
runner and no screenshot tooling in this project, so for anything visual, start
`npm run dev` in the background and give the user the URL and the exact route to look at.
Do not claim a visual change looks right until they confirm it.
