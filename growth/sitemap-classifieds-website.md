---
title: Your sitemap
description: The list of your pages that search engines read. Find its address, see what's in it, refresh it and submit it to Google.
section: growth
order: 40
permalink: /sitemap-classifieds-website/
keywords: sitemap, sitemap.xml, xml, google, search console, generate, submit, index, crawl
updated: 2026-10-07
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

Search engines can find it without your help too: your [robots.txt](/allowdisallow-bots-crawlers/) points to it.

## What's in it

| Included | How many |
| --- | --- |
| Your home page | 1 |
| Your latest listings | The 1,000 most recently published |
| Top-level categories | Up to 100 |
| Top-level locations | Up to 100 |
| Your pages (About, Terms…) | All published pages |
| FAQ | The FAQ page and every answer, if the FAQ add-on is on |
| Seller profiles | The 100 newest members who have at least one published listing |

Subcategories, older listings, blog posts and forum topics aren't listed, but that doesn't keep them out of Google:
search engines find them by following the links on the pages that are in the sitemap. The sitemap's job is to point
them at your newest content quickly.

## When it's updated

The sitemap is rebuilt automatically once a day by a [scheduled job](/how-to-set-crons/). To rebuild it right away,
for example after [importing listings](/how-to-import-ads/):

1. Go to **Tools**.
2. In the **Sitemap** card, click **Generate now**.
{: .steps}

The date under the address changes to show it was generated.

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
| The sitemap address shows an old domain | You connected a new domain. Submit the sitemap again under the new address, as a new property in Search Console. |
| New listings aren't in it | Click **Generate now** under **Tools**, or wait for the daily rebuild. Listings waiting for approval aren't included. |
| "Submitted URL marked noindex" | **Hide from search engines** is on under **Settings › General**. Switch it off. |

## Related guides

- [Get your site into Google](/google-search-console/) — verify your site and submit the sitemap.
- [SEO for your marketplace](/seo-classifieds-website/) — what else helps you rank.
- [The Tools page](/tools-overview/) — where the sitemap card lives.
{: .cards}
