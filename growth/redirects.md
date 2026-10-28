---
title: Redirects and the 404 log
description: Send old addresses to the right page instead of "page not found", automatically when you rename something, and find broken links with the 404 log.
section: growth
order: 45
permalink: /redirects/
keywords: redirect, redirects, 301, 302, permanent redirect, temporary redirect, 404, page not found, broken link, broken links, old url, old address, renamed category, changed url, seoname, 404 log, not found log
updated: 2026-10-16
plans: Available on all plans
---

When an address on your site changes, for example because you renamed a category, links to the old address from
Google, other websites or old emails end on "page not found". A **redirect** sends visitors and search engines from the
old address to the new one, so you keep both the visitor and the place you had earned in search results.

Yclas creates these redirects for you when you rename something, lets you add your own, and can keep a **404 log** of
the addresses that people and search engines asked for and didn't find.

## Switch them on

1. In the admin panel, go to **Settings › SEO**.
2. In **Features**, switch on **Redirects** and, if you want it, **404 log**.
3. Click **Save changes**.
{: .steps}

**Redirects** is on for new sites. On a site created earlier, both start off.

With **Redirects** switched off, the redirects you have are kept but not used. Switch it back on and they work again.
{: .note}

## Automatic redirects

While **Redirects** is on, Yclas adds a permanent redirect every time the address of one of these changes:

- a category or a location (its **Seoname**);
- a blog post;
- a page.

A category redirect also covers the category's pages in every location, and a location redirect covers it in every
category. Listings don't need one: a listing opened under its old category address is always sent to its current
address.

## Add a redirect yourself

Use a manual redirect when you delete a page and want to send people to a similar one, when you move from another
website to Yclas, or when you want a short address for a campaign.

1. Go to **Settings › SEO** and click **Open the redirects manager**.
2. Under **Add a redirect**, fill in:
   - **From**: a path on your site, for example `/old-page.html`.
   - **To**: a path on your site, or a full `https://` address.
   - **Type**: **Permanent** (301) when the move is for good, which tells search engines to move the old address's
     ranking to the new one; **Temporary** (302) when it isn't.
3. Click **Add redirect**.
{: .steps}

The list shows every redirect with its **Type**, its **Source** (**Automatic** or **Manual**) and how many **Hits** it has
had. Click **Delete** to remove one.

Good to know:

- A redirect is only used when its **From** address would otherwise answer "page not found". It can't take over a
  page that exists.
- **From** must match exactly, including capitals: `/Old-Page` and `/old-page` are two different addresses.
- The rest of the address after a `?` is kept when the visitor is redirected.
- Yclas refuses a redirect that would send visitors round in a circle.

## The 404 log

With **404 log** on, Yclas keeps a list of the addresses on your site that answered "page not found". Open it from
**Settings › SEO**, **Open the 404 log**.

Each row shows the **Path**, how many **Hits** it had, the **Referrer** (the page that linked to it, when known) and when
it was **Last seen**, most requested first. Click **Make a redirect** to send that address somewhere useful, or
**Delete** to clear a row you don't care about.

Requests for images and files, and obvious hacking scans and scripts, aren't logged, so the list stays readable. Search
engines are logged, so you see the broken links Google finds.

A good habit: once a month, open the 404 log, redirect the top few addresses that should go somewhere, and delete
the rest.
{: .tip}

The **SEO health** card on your **Analytics** page also shows how many broken links have been logged.

## Related guides

- [SEO for your marketplace](/seo-classifieds-website/) — everything else Yclas does for search engines.
- [Categories](/how-to-add-categories/) — renaming a category changes its address.
- [Get your site into Google](/google-search-console/) — Search Console reports the broken links Google finds too.
{: .cards}
