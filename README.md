# Engineering Ethics Portfolio

A minimal, clean portfolio website with earth tone styling.

## Folder Structure

```
portfolio/
├── index.html                   ← Home / cover page (edit meta info here)
├── assets/
│   ├── css/
│   │   ├── global.css           ← Colors, fonts, spacing — edit variables here
│   │   ├── nav.css              ← Sidebar navigation styles
│   │   └── components.css       ← Cards, callouts, timelines, etc.
│   ├── js/
│   │   └── nav.js               ← Loads nav.html into every page automatically
│   └── images/
│       └── graphical-abstract.png  ← Drop your image here
├── components/
│   └── nav.html                 ← Edit navigation links ONCE here
└── pages/
    ├── summary-reflection.html  ← Question Set 1
    ├── learning-plan.html       ← Question Set 2
    ├── critical-reflection.html
    ├── interview.html
    ├── ethics-in-news.html
    ├── ein-review.html
    ├── project.html
    └── about.html
```

## Getting Started

1. Open `portfolio/` in VS Code
2. Install the **Live Server** extension (right-click `index.html` → Open with Live Server)
3. Edit `components/nav.html` to update your name
4. Fill in each page in `pages/` with your content

## Available CSS Components

Use these in any page — just copy the HTML patterns:

| Class | What it is |
|---|---|
| `.card` | White bordered card with eyebrow, title, body |
| `.callout` | Left-border pull quote (`.callout--olive` for green) |
| `.reading-item` | Numbered list item for references |
| `.two-col` | 2-column responsive grid |
| `.stat-box` | Dark box with large number |
| `.timeline` + `.timeline-item` | Vertical timeline |
| `.toc` | Table of contents card |
| `.tag` | Small pill tag (`.tag--olive`, `.tag--terra`) |

## Customizing Colors

All colors are CSS variables in `assets/css/global.css`:

```css
--terracotta:  #b85c38;   /* headings accent, active nav */
--olive:       #5a6b3a;   /* secondary accent */
--cream:       #f4ede0;   /* page background */
--ink:         #1e1a16;   /* primary text, sidebar bg */
```

Change these once and the whole site updates.
