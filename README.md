# Portfolio & Blog

A Next.js (App Router, plain JavaScript) portfolio site with a Markdown-powered blog, built for
static export and deployment on Azure Static Web Apps.

## Local development

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Writing blog posts

Add a Markdown file to `content/posts/`, e.g. `content/posts/my-new-post.md`:

```md
---
title: My New Post
published_date: 2026-08-20
category: Notes
description: A one-line summary shown in the post list and search results.
draft: false
---

Post body goes here, in Markdown.
```

Set `draft: true` to keep a post out of the published list while it's still a work in progress.
The file's slug (used in the URL, `/blog/<slug>`) is the filename without `.md`.

Post images go in `public/blog/<slug>/`, referenced with an absolute path in the Markdown, e.g.
`![alt text](/blog/my-new-post/cover.png)`.

## Building for production

```bash
npm run build
```

This runs `next build` with static export (`output: 'export'` in `next.config.js`) and writes the
site to `out/` — a plain folder of HTML/CSS/JS ready to host anywhere static, including Azure
Static Web Apps.

## Deploying to Azure Static Web Apps

A GitHub Actions workflow is already set up at
`.github/workflows/azure-static-web-apps.yml` (builds the site and uploads `out/`). To wire it up:

1. Push this repo to GitHub.
2. In the [Azure Portal](https://portal.azure.com), create a **Static Web App** resource
   (free tier is fine), choosing "Other" as the build preset (this repo already brings its own
   workflow) and pointing it at your GitHub repo/branch.
3. Azure will add an `AZURE_STATIC_WEB_APPS_API_TOKEN` secret to your GitHub repo automatically as
   part of that setup — the workflow here already expects a secret with that exact name.
4. Push to `main` and the Actions workflow will build and deploy automatically. Pull requests get
   their own preview deployment; closing a PR tears the preview down.

Custom domains and free SSL can be added afterward from the Static Web App resource's "Custom
domains" page in the Azure Portal.
