# wplace-art-gallery

A simple web gallery that displays a list of pixel arts I worked on in [wplace](https://wplace.live).

This project uses [Astro](https://astro.build) for fast static rendering, and Content Collections to manage the pixel art data in a structured way.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/pixel-art-wplace-gallery.git
cd pixel-art-wplace-gallery
```

2. Install dependencies:

```bash
bun install
```

## Usage

1. Start the development server:

```bash
bun dev
```

Open http://localhost:4321 in your browser to view the gallery.

2. Build for production:

```bash
bun build
```

Static files will be generated in the `dist/` folder.

3. Add content:

- Create Markdown files in src/content/pixel-arts/ (e.g., `watamelon.md`).
- Example frontmatter in a Markdown file:

```markdown
---
name: "My First Pixel Art"
image: "/images/my-art.png"
coords:
  tlX: 676
  tlY: 940
  pxX: 571
  pxY: 508
source: "Inspired by r/place 2022"
---

Optional description here.
```

4. Deploy to a host like [Vercel](https://vercel.com), [Netlify](https://www.netlify.com), or [GitHub Pages](https://pages.github.com) – Astro is perfect for this!

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command               | Action                                           |
| :-------------------- | :----------------------------------------------- |
| `bun install`         | Installs dependencies                            |
| `bun dev`             | Starts local dev server at `localhost:4321`      |
| `bun build`           | Build your production site to `./dist/`          |
| `bun preview`         | Preview your build locally, before deploying     |
| `bun astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `bun astro -- --help` | Get help using the Astro CLI                     |
