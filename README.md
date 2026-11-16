# Team 3100 website

The public website for Team 3100, the Lightning Turtles, a FIRST Robotics
Competition team from Two Rivers High School in Mendota Heights, Minnesota.

The site is built with [Astro](https://astro.build/) and uses Bootstrap for
styling. It is a static site, with Pagefind providing the site search index.

## Requirements

- Node.js 22.12.0 or newer
- npm

## Getting started

Clone the repository, enter the project directory, and install dependencies:

```sh
npm install
```

Start the local development server:

```sh
npm run dev
```

Astro serves the site at `http://localhost:4321` by default and reloads the page
when source files change.

## Available commands

Run commands from the repository root:

| Command                   | Description                                                   |
| ------------------------- | ------------------------------------------------------------- |
| `npm run dev`             | Start the Astro development server.                           |
| `npm run build`           | Build the static site and generate the Pagefind search index. |
| `npm run preview`         | Preview the production build locally.                         |
| `npm run check`           | Run Astro diagnostics and type checking.                      |
| `npm run spellcheck`      | Check project documentation and source text with CSpell.      |
| `npm run commitlint`      | Run Commitlint against a supplied commit range.               |
| `npm run format`          | Format supported files with Prettier.                         |
| `npm run format:check`    | Check formatting without changing files.                      |
| `npm run astro -- --help` | Display available Astro CLI commands.                         |

Before opening a pull request, the main checks can be run together:

```sh
npm run spellcheck
npm run format:check
npm run check
npm run build
```

## Project structure

```text
.
├── public/                 # Files copied directly to the built site
├── src/
│   ├── assets/             # Images imported by Astro components
│   ├── components/         # Reusable Astro components
│   ├── layouts/            # Shared page layouts
│   └── pages/              # File-based routes
├── astro.config.mjs        # Astro configuration
├── commitlint.config.mjs   # Conventional Commits configuration
├── package.json             # Scripts and npm dependencies
└── package-lock.json        # Locked npm dependency versions
```

Pages in `src/pages/` become routes automatically. Current sections include:

- Home: `/`
- About: `/about`, `/about/info`, `/about/mentors`, and `/about/team-resources`
- News: `/news` and `/news/photo-gallery`
- Sponsors: `/sponsors`
- Donations: `/donate`
- Search: `/search`

## Continuous integration

GitHub Actions runs automatically for pull requests targeting `main` and for
pushes to `main`:

- **Quality checks** runs CSpell, formatting validation, Astro checks, and the
  production build.
- **Conventional Commits** validates every commit in a pull request and the pull
  request title.
- **Link check** builds the site and reports broken links with Lychee. Link
  failures are currently reported without blocking the other checks.

Repository administrators can require the **Quality checks** and **Conventional
Commits** statuses in the `main` branch protection settings.

## Contributing

1. Create a branch from `main`.
2. Make the smallest focused change possible.
3. Use a [Conventional Commit](https://www.conventionalcommits.org/) message,
   such as `feat: add team resource page` or `fix: correct navigation link`.
4. Run the local checks listed above.
5. Open a pull request using the repository template.

Pull requests should include screenshots for visual changes and should address
responsive behavior, accessibility, content accuracy, and security. Use the
issue forms when reporting bugs, requesting features, or proposing content
updates.

## Content and assets

Keep public content and images in the appropriate `src/pages/`, `src/assets/`,
or `public/` directory. Include useful alternative text for informative images.
Avoid committing secrets, credentials, or private team information.
