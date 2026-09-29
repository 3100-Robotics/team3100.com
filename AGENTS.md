# Team 3100 website agent guide

This repository contains the Team 3100 public website. It is a static Astro site
with Bootstrap styling and a Pagefind search index.

## Development requirements

- Use Node.js 22.12.0 or newer.
- Use npm only. Keep `package-lock.json` in sync with `package.json`.
- Do not add or restore Bun, pnpm, or Yarn dependency lock files unless the
  project explicitly adopts another package manager.
- Do not commit `.vscode/` settings or other editor-specific configuration.

Install dependencies with:

```sh
npm install
```

Start the development server with:

```sh
npm run dev
```

When a background server is needed, use the repository's Astro workflow:

```sh
astro dev --background
```

Manage it with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Validation

Run these checks before completing a change:

```sh
npm run format:check
npm run spellcheck
npm run check
npm run build
```

Use `npm run format` to apply Prettier formatting. The repository uses
`prettier-plugin-astro` and wraps Markdown prose at the configured width.

The GitHub Actions workflows also validate:

- Prettier formatting, spelling, Astro diagnostics, and the production build
- Conventional Commit messages and pull request titles
- Generated-site links with Lychee; link failures are currently non-blocking

Do not modify generated `dist/` or `.astro/` output manually. The build and
Astro tooling recreate those directories.

## Project conventions

- Put file-based routes in `src/pages/`.
- Put reusable Astro components in `src/components/`.
- Put shared page shells in `src/layouts/`.
- Put imported images in `src/assets/` and directly served files in `public/`.
- Add meaningful `alt` text to informative images; use empty alt text for
  decorative images.
- Check keyboard access, semantic HTML, contrast, and responsive layouts for
  user-facing changes.
- Keep changes focused and avoid unrelated reformatting.
- Update the README when commands, workflows, or contributor expectations
  change.

## Commits and pull requests

Use Conventional Commits, for example:

- `feat: add team resources page`
- `fix: correct navigation link`
- `docs: update contribution guide`
- `ci: add accessibility check`
- `chore: update dependencies`

Use the issue forms for bug reports, feature requests, and content updates. Use
the pull request template and include screenshots for visual changes. Link a
related issue when applicable.

## Astro documentation

Consult the relevant [Astro documentation](https://docs.astro.build/) before
working on related tasks:

- [Pages, dynamic routes, and middleware](https://docs.astro.build/en/guides/routing/)
- [Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Framework components](https://docs.astro.build/en/guides/framework-components/)
- [Content collections](https://docs.astro.build/en/guides/content-collections/)
- [Styling](https://docs.astro.build/en/guides/styling/)
- [Internationalization](https://docs.astro.build/en/guides/internationalization/)
