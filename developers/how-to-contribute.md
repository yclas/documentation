---
title: Improve the Help Centre
description: Spotted a mistake or a missing guide? Suggest a fix in a couple of clicks, or write a whole article on GitHub.
section: developers
order: 20
permalink: /how-to-contribute/
keywords: contribute, documentation, github, edit, pull request, jekyll, markdown, typo, suggest
updated: 2026-10-07
---

The Help Centre is open source. Every article is a Markdown file in the
[yclas/documentation](https://github.com/yclas/documentation) repository on GitHub, and anyone can suggest a change.
The Yclas team reviews each suggestion before it goes live.

You don't need to be a developer: fixing a typo or an out-of-date step takes a GitHub account and a few minutes.

To report a problem with the product itself rather than with a guide, open a ticket with
[Yclas support](/use-yclas-support-system/) instead.
{: .note}

## Suggest a quick fix

1. Open the article you want to improve.
2. At the bottom of the page, click **Suggest an edit**. GitHub opens the article's file.
3. Sign in to GitHub if asked, then click the pencil icon. GitHub offers to make your own copy (a "fork") of the
   repository; accept.
4. Make your change in the editor. The file is plain Markdown, so you edit the text directly.
5. Click **Commit changes**, describe what you changed and why, and choose to create a **pull request**.
{: .steps}

That's it. We'll review the pull request, maybe ask a question in it, and merge it. The site updates about a minute
after we merge.

## Write a new article

For anything bigger than a small fix, work on your own copy of the repository.

1. Fork [yclas/documentation](https://github.com/yclas/documentation) and create a branch from `gh-pages`, the
   branch the live site is built from.
2. Add a Markdown file in the folder of the section it belongs to (`listings/`, `payments/`, …). The file name
   becomes the address, so `listings/how-to-add-categories.md` is published at `/how-to-add-categories/`.
3. Start the file with front matter, as below. The sidebar, the section pages, the home page and search are built
   from it, so you never edit a menu by hand.
4. Preview it on your computer if you like (see below), then open a pull request into `gh-pages`.
{: .steps}

```yaml
---
title: Add and organise categories
description: Build the category tree your listings are filed under.
section: listings
order: 30
permalink: /how-to-add-categories/
keywords: category, subcategory, parent, tree
updated: 2026-10-07
---
```

| Field | What it does |
| --- | --- |
| `title` | The page title, in sentence case, saying what the reader will do or learn. |
| `description` | One sentence shown under the title, in search results and in Google. |
| `section` | The section id, from `_data/sections.yml`. |
| `order` | The position in the section, in steps of 10. |
| `permalink` | The address, one level deep. It never changes once published. |
| `redirect_from` | Old addresses that should now land on this article. |
| `keywords` | Extra words people might search for. |
| `updated` | The date you last checked the article against the product. |
| `plans` | Optional note shown under the title, such as which plans include the feature. |

## Style

The repository's `README.md` has the full guide. The essentials:

- Write for a marketplace owner who isn't technical. Short sentences, one idea per paragraph, British spelling.
- Start with what the feature does and why you'd use it, then how.
- Quote menu paths and labels exactly as the admin panel shows them, in bold: **Settings › General**, **Save**.
- Number the steps, and only describe what the product does today.
- No videos, embeds or screenshots of old screens, and never any passwords, keys or customer data.

## Preview your changes

The site is built with Jekyll by GitHub Pages. With Ruby installed, run this in the repository folder and open
`http://localhost:4000`:

```
bundle install
bundle exec jekyll serve
```

## Licence

The repository is published under the GNU General Public License, version 2 (see its `LICENSE` file). By
contributing you agree that your changes are published under the same licence.

## Related guides

- [REST API](/api-documentation/) — build on top of your marketplace.
- [Get help from Yclas support](/use-yclas-support-system/) — report a bug or ask a question.
{: .cards}
