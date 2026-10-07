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
