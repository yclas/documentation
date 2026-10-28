# Yclas Help Centre

Source of [docs.yclas.com](https://docs.yclas.com). GitHub Pages builds it with Jekyll from the `gh-pages` branch:
whatever is merged into `gh-pages` is live a minute later. Work on a branch and open a pull request.

## Adding or editing an article

Articles are Markdown files in the folder of their section (`listings/`, `payments/`, …). The sidebar, the section
pages, the home page and search are generated from front matter, so an article only needs a file:

```yaml
---
title: Add and organise categories          # sentence case, says what the reader will do or learn
description: Build the category tree your listings are filed under, reorder it and charge for posting.  # one sentence, shown under the title, in search and in Google
section: listings                           # id from _data/sections.yml
order: 30                                   # position in the section, steps of 10
permalink: /how-to-add-categories/          # one level only, never change it once published
redirect_from:                              # old URLs that now land here (optional)
  - /hide-categories/
keywords: category, subcategory, parent, tree, icon, price   # extra search words people might type
updated: 2026-10-07
plans: Available on all plans               # optional pill under the title
---
```

Rules:

- **Permalinks are forever.** The admin panel, yclas.com and old emails link to them. To retire an article, add its
  URL to the `redirect_from` of the article that replaces it and delete the file.
- Permalinks are one level deep (`/slug/`): yclas.com's support form reads `search.json` and builds links from them.
- `section` + `order` place the article; `nav_title` (optional) shortens the sidebar label; `nav: false` hides it.

## Writing style

- Write for a marketplace owner who is not technical. Plain, friendly, direct English with British spelling, as
  on yclas.com: "colour", "organise", "licence" (noun), "favourites". Keep the panel's own spelling when quoting
  a label.
- Lead with what the feature does and why you'd use it, then how. One idea per paragraph, short sentences.
- Address the reader as "you"; call their visitors "members" or "users" and items "listings" (not "ads", except
  where the panel itself says "ad").
- Name menu paths exactly as the admin panel shows them, in bold with › between steps:
  **Settings › General**. Button and field names in bold: **Save**.
- Steps are a numbered list followed by `{: .steps}` on the next line.
- Callouts are a paragraph followed by `{: .note}`, `{: .tip}`, `{: .warning}` or `{: .important}`. For a callout with
  several paragraphs or a list use `<div class="note" markdown="1"> … </div>`.
- Settings reference: a two-column table (**Setting** | **What it does**).
- Link related articles with root-relative links: `[custom fields](/how-to-create-custom-fields/)`.
- Lists of related articles: a bullet list followed by `{: .cards}` where each item starts with the link.
- No videos, no embeds, no screenshots of old interfaces. Only document what the product does today.
- Screenshots: WebP in `assets/img/panel/`, taken with `script/screenshots/shoot.mjs` (see
  [Screenshots](#screenshots)) from a test site with made-up data, never a customer's site. Add them with the
  figure include, which adds the caption and click-to-enlarge:
  `{% include figure.html src="panel/name.webp" alt="What the picture shows" caption="What to look at (optional)." %}`.
  Pass `height="…"` when the shot isn't the usual 1600 × 1075.
- Never put secrets, customer names, customer data or internal server details in an article.

## Running it locally

```
bundle install
ruby script/serve.rb                         # preview at http://127.0.0.1:4010, rebuilds on save
bundle exec jekyll build                     # then, before opening a pull request:
ruby script/check.rb                         # front matter, duplicate permalinks, broken links and anchors
node script/search-test.js _site/search.json # real support questions must find the right article
```

`script/search-queries.txt` lists questions customers have asked support, each with the article that answers it.
When you add an article for a common question, add the question there too.

`assets/css/docs.css` holds the whole design (light and dark); `assets/js/docs.js` the "On this page" list, the
mobile menu and the search box; `assets/js/search-core.js` the search ranking (filler words, plurals, synonyms);
`assets/js/legacy-links.js` sends old guides.yclas.com links to the right article.

## Screenshots

`script/screenshots/shots.json` lists every panel screenshot by name: the page (`url`) and optionally `steps`
(JavaScript run on the page first, such as unticking a box), `scrollTo` (a selector to scroll to), `selector` (crop
to one element), `height` (a shorter crop in CSS pixels; the picture is 1.25 times that), `mark` (selectors to
outline in blue) and `wait` (milliseconds, for tables that load afterwards). Retake them after a panel redesign:

```
YCLAS_REPO=../yclas.com PHP_INI=php.ini node script/screenshots/shoot.mjs          # every shot
YCLAS_REPO=../yclas.com PHP_INI=php.ini node script/screenshots/shoot.mjs stripe   # one shot
YCLAS_REPO=../yclas.com node script/screenshots/shoot.mjs --links /oc-panel         # list a page's links
```

It needs Node 22+, Chrome, PHP with mysqli, mbstring, gd, intl and curl, and the yclas.com code (a checkout of
`production`, so the pictures match what customers see) with its local databases: `yclas` and the test site's own,
by default site 995980 *Harlow Bay Herald* at `news.yclas-saas.test` (`SITE_ID` and `SITE_HOST` pick another).
The script starts PHP's built-in server on port 8301 (`PORT`), signs in as the site's admin with the same one-time
link as **Open admin** on yclas.com, hides the staging bar, chat and cookie notices, and shows local addresses as
`yourdomain.com`. On Git Bash for Windows, set `MSYS_NO_PATHCONV=1` so `/oc-panel` isn't turned into a file path.

Pages served by yclas.com itself (Domain & SSL, plans and billing) and pages that need real listing photos can't be
taken this way.

## Section pages, sharing images and feedback

- `start` in `_data/sections.yml` lists the three guides shown as **Start here** on a section page: the ones support
  is asked about most. Leave it out for small sections.
- Each section has its own sharing picture (`assets/img/og/<section>.png`), which its articles use. After changing
  a section's title, description or icon, run `node script/og-images.mjs` to redraw them.
- Long articles open with an **In short** box: `<div class="summary" markdown="1">` around 3 to 5 bullets, at most
  75 words (search only reads the first 450 words of an article).
- The **Was this helpful?** buttons send `article_feedback` to Google Analytics, with `helpful` (yes / no) and
  `page_path`.
