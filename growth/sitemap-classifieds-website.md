---
title: Your sitemap
description: The list of your pages that search engines read. Find its address, see what's in it, refresh it, submit it to Google, and how IndexNow reports changes straight away.
section: growth
order: 40
permalink: /sitemap-classifieds-website/
keywords: sitemap, sitemap.xml, sitemap index, sitemap-index.xml, xml, google, bing, search console, generate, submit, index, crawl, indexnow, lastmod
updated: 2026-10-16
---

A sitemap is a file that lists the pages of your website, so search engines can find them without having to follow
every link. Yclas builds yours automatically and keeps it up to date. All you need to do is tell Google and Bing
where it is.

## Find your sitemap

Your sitemap is always at:

```
https://yoursite.com/sitemap.xml
```

with your own address instead of `yoursite.com`. You can also see it in the admin panel: go to **Tools** and look at
the **Sitemap** card, which shows the address and when the sitemap was last generated.

A sitemap file holds at most 10,000 addresses. A bigger marketplace gets several files and an index that lists them,
at `yoursite.com/sitemap-index.xml`. You don't need to do anything about it: `sitemap.xml` always works, and leads
search engines to the index when there is one.

Search engines can find it without your help too: your [robots.txt](/allowdisallow-bots-crawlers/) points to it.

## What's in it

| Included | Which |
| --- | --- |
| Your home page | Always |
| Listings | Every published listing that hasn't expired |
| Categories and locations | Every category and location with at least one published listing (in itself or below it) |
| Category and location landing pages | Each category in each location with at least 3 listings, such as *Cars in Madrid* |
| Your pages (About, Terms…) | All published pages, except ones you have hidden from search engines in the page builder |
| FAQ | The FAQ page and every answer, if the FAQ add-on is on |
| Seller profiles | The 100 newest members who have at least one published listing |

Each address comes with the date it last really changed (a listing's last edit, a category's newest listing), so
search engines know what to visit again first. Blog posts and forum topics aren't listed: search engines find them by
following your links.

## When it's updated

The sitemap is rebuilt automatically once a day by a [scheduled job](/how-to-set-crons/). To rebuild it right away,
for example after [importing listings](/how-to-import-ads/):

1. Go to **Tools**.
2. In the **Sitemap** card, click **Generate now**.
{: .steps}

The date under the address changes to show it was generated.

## IndexNow: changes reported straight away

Search engines that take part in [IndexNow](https://www.indexnow.org), such as Bing and Yandex, don't have to wait
for their next visit. Each time your sitemap is rebuilt, Yclas sends them the addresses of listings and pages that
are new or have changed, and of listings that have gone (sold, expired or deleted), so they update their results
quickly. Google doesn't use IndexNow; it reads your sitemap.

There's nothing to set up. IndexNow starts on its own a day after your sitemap is first built. It isn't used while
your site is in [maintenance mode](/how-to-activate-maintenance-mode/) or **Hide from search engines** is on.

## Submit it to search engines

You only have to do this once.

- **Google:** in [Google Search Console](https://search.google.com/search-console), open **Sitemaps**, enter
  `sitemap.xml` and click **Submit**. See [Get your site into Google](/google-search-console/) for setting up Search
  Console.
- **Bing:** in [Bing Webmaster Tools](https://www.bing.com/webmasters), open **Sitemaps** and submit the full address.

After that, search engines come back to the sitemap regularly on their own.

## Troubleshooting

| Problem | What to check |
| --- | --- |
| Search Console says it couldn't fetch the sitemap | Open the address in your browser. If it loads, wait a day and try again. Make sure the site isn't in maintenance mode or private, and that its plan is active. |
| The sitemap address answers "not found" | Your site is on a free trial or the free plan, which search engines are asked not to list (your dashboard says **Not on Google yet**). The sitemap appears once you choose a plan. |
| The sitemap address shows an old domain | You connected a new domain. Submit the sitemap again under the new address, as a new property in Search Console. |
| New listings aren't in it | Click **Generate now** under **Tools**, or wait for the daily rebuild. Listings waiting for approval aren't included, and neither are expired ones. |
| "Submitted URL marked noindex" | **Hide from search engines** is on under **Settings › General**. Switch it off. |

## Related guides

- [Get your site into Google](/google-search-console/) — verify your site and submit the sitemap.
- [SEO for your marketplace](/seo-classifieds-website/) — what else helps you rank.
- [The Tools page](/tools-overview/) — where the sitemap card lives.
{: .cards}
