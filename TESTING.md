# Testing

This project has **no test runner configured**. `npm test` deliberately exits 1 so that the
absence of tests is never mistaken for passing tests.

This document describes the intended setup, to be implemented when wanted.

## Proposed stack

| Piece | Choice | Why |
|---|---|---|
| Runner | [Vitest](https://vitest.dev) | Vite is already the build tool; Vitest reuses `vite.config.js`, so the `@src` / `@assets` aliases and the MDX plugin work with no extra config. |
| DOM | jsdom | Needed to render React components outside a browser. |
| Component testing | `@testing-library/react` | Queries by what the user sees rather than by implementation detail. |
| Assertions | Vitest built-ins + `@testing-library/jest-dom` | `toBeInTheDocument()` and friends. |

## Installing

```bash
npm install --save-dev vitest jsdom @testing-library/react @testing-library/jest-dom
```

## Configuration

Vitest reads `vite.config.js`. Add a `test` block to it:

```js
export default defineConfig({
    // ...existing config
    test: {
        environment: 'jsdom',
        globals: true,
        setupFiles: './src/setupTests.js',
    },
});
```

Create `src/setupTests.js`:

```js
import '@testing-library/jest-dom';
```

## Scripts

Replace the placeholder `test` script in `package.json` with:

```json
"test": "vitest run",
"test:watch": "vitest"
```

## Where tests live

Colocated with the code they test, as `*.test.jsx`:

```
src/hooks/useStringHelper.jsx
src/hooks/useStringHelper.test.jsx
```

Add `'**/*.test.jsx'` handling to ESLint only if lint starts complaining about test globals.

## Suggested first target

Start with pure logic, before touching rendering. `src/hooks/useStringHelper.jsx` exposes a
single pure function and needs no DOM:

```js
import { describe, it, expect } from 'vitest';
import { useStringHelper } from './useStringHelper';

describe('useStringHelper', () => {
    it('capitalizes the first letter', () => {
        const { capitalizeFirstLetter } = useStringHelper();
        expect(capitalizeFirstLetter('jams')).toBe('Jams');
    });
});
```

Then move to a small presentational component such as
`src/components/subcategories/SubcategoryItem.jsx`, which takes plain props.

Leave `useCategoryDB` for later: it calls `fetch` against `/db/...` and needs stubbing.
