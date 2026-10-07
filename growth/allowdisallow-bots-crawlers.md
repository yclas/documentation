---
title: Search engine visibility and robots.txt
description: Hide your marketplace from Google while you build it, show it again at launch, and change the robots.txt file search engines read.
section: growth
order: 20
permalink: /allowdisallow-bots-crawlers/
keywords: bots, crawlers, robots.txt, noindex, hide from google, search engines, index, block, crawl, disallow, ads.txt
updated: 2026-10-07
---

Search engines find your pages with programs called bots or crawlers. Most of the time you want them to: that's how
people find your marketplace. But while you are still building, or for a private community, you may want to keep them
away. Yclas gives you two controls: a switch that asks search engines not to list your site, and the `robots.txt`
file that tells them which parts to visit.

## Hide your site from search engines

1. In the admin panel, go to **Settings › General**.
2. In **Access & privacy**, switch on **Hide from search engines**.
3. Click **Save changes**.
{: .steps}

Every page now carries a "noindex, nofollow" instruction. Google, Bing and other well-behaved search engines won't add
your pages to their results, and will drop pages they already have the next time they visit. Your site stays open to
people: anyone with the address can still use it.

To appear in search results again, switch **Hide from search engines** off and click **Save changes**. Then submit your
sitemap in Google Search Console to speed things up. See [Get your site into Google](/google-search-console/).

Forgetting this switch is the most common reason a launched marketplace never shows up in Google. Add it to your
[launch checklist](/launch-checklist/).
{: .warning}

### Which option to use

| You want to… | Use |
| --- | --- |
| Keep a site out of Google, but open to visitors | **Hide from search engines** |
| Close the site to everyone but your team while you build | [Maintenance mode](/how-to-activate-maintenance-mode/) |
| Open the site only to signed-in members | [Private site](/private-site/) |

Maintenance mode and a private site keep search engines out on their own, since they can't see the pages either.

## Your robots.txt file

`robots.txt` is a small public file at `yoursite.com/robots.txt` that tells crawlers which addresses they may visit.
Yclas writes a sensible one for you:

```
User-agent: *
Crawl-delay: 10
Disallow: /search.html
Disallow: /user$
Disallow: /user?
Disallow: /*?*sort=
Sitemap: https://yoursite.com/sitemap.xml
```

It asks crawlers to slow down a little, skips search-result pages and sorted lists (every combination of filters
would otherwise be a new page to crawl, which wastes their time and slows your site), skips the member directory,
and points them to your sitemap. Your listings, categories, pages and seller profiles stay open. (The search address
follows your site's language, so it may not be `/search.html` on your site.)

### Change it

You can replace the file with your own, for example to block a particular bot that is hammering your site.

1. Go to **Settings › General › Advanced**.
2. Paste the full content you want into **Robots.txt**.
3. Click **Save changes**, then open the link under the box to check the result.
{: .steps}

<div class="warning" markdown="1">
**Your text replaces the default completely.** Start from the default above and change only what you need, and keep
the `Sitemap:` line, or search engines lose track of your sitemap. To go back to the default, empty the box and save.

A single `Disallow: /` under `User-agent: *` blocks your whole site from every search engine.
</div>

Only well-behaved bots follow `robots.txt`. Scrapers and spam bots ignore it, so it isn't a security tool. To stop
spam, see [Fight spam](/how-to-avoid-spam-in-my-site/).

## ads.txt

Right under **Robots.txt** there's an **Ads.txt** box. If you show ads from Google AdSense or another ad network,
they ask you to publish an `ads.txt` file listing who may sell ads on your site. Paste the line they give you and
click **Save changes**. See [Banners and ad slots](/how-to-add-banner/#adstxt).

## Related guides

- [SEO for your marketplace](/seo-classifieds-website/) — what helps you rank.
- [Sitemap](/sitemap-classifieds-website/) — the file your robots.txt points to.
- [General settings](/change-site-name-site-description/) — everything else on the General page.
{: .cards}
