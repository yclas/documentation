---
title: Get your site into Google
description: Verify your marketplace in Google Search Console and Bing Webmaster Tools, submit your sitemap and see which searches bring visitors.
section: growth
order: 30
permalink: /google-search-console/
keywords: google search console, webmaster tools, bing, verify, verification, meta tag, submit sitemap, indexing, not on google, request indexing
updated: 2026-10-07
---

Google finds new websites on its own, but slowly. **Google Search Console** is Google's free tool for site owners:
you tell Google your site exists, hand it your sitemap, and in return you see which searches show your pages, how
often people click, and any problems Google runs into. Every marketplace should have it.

## Before you start

- Make sure **Hide from search engines** is off under **Settings › General › Access & privacy**, and the site isn't in
  maintenance mode or private. Google can't list what it isn't allowed to see.
- If you're going to use your own domain, [connect it](/custom-domain/) first, then verify that address. Google treats
  each address as a separate site.

## Verify your site

1. Go to [search.google.com/search-console](https://search.google.com/search-console) and sign in with a Google account.
2. Click **Add property** and choose **URL prefix**. Enter your site's full address, exactly as it appears in the
   browser, for example `https://www.yoursite.com/`.
3. Under the verification methods, choose **HTML tag**. Google shows a line that starts with
   `<meta name="google-site-verification"`. Copy it.
4. In your admin panel, go to **Settings › General › Advanced**, paste the line into **HTML in HEAD Element**
   (below anything already there) and click **Save**.
5. Back in Search Console, click **Verify**.
{: .steps}

Leave the tag in place after verifying. Google checks it again from time to time, and removing it un-verifies the
site.

If your site uses Google Analytics with the same Google account, Search Console may offer to verify through Analytics
instead. That works too. And if you connected your own domain, you can choose the **Domain** property type and verify
with a DNS record at your domain provider, which covers every version of your address at once.
{: .tip}

## Submit your sitemap

1. In Search Console, open **Sitemaps** in the left menu.
2. Under **Add a new sitemap**, type `sitemap.xml` and click **Submit**.
{: .steps}

You can copy the full sitemap address from the **Sitemap** card under **Tools** in your admin panel. Google reads the
sitemap regularly from now on; you don't need to submit it again when listings change. See
[Sitemap](/sitemap-classifieds-website/) for what's in it.

## What to look at

| Report | Tells you |
| --- | --- |
| **Performance** | Which searches show your site, how many people clicked, and your average position. Look for searches where you appear but few people click: a better title or description can help. |
| **Pages** | Which pages Google has added to its results, and why others were left out. "Crawled – currently not indexed" on thin or duplicate pages is normal. |
| **URL inspection** | Paste any address to see whether it's in Google, and click **Request indexing** to ask Google to visit a new or changed page sooner. |

It usually takes a few days before the first data appears, and a few weeks before a new site shows up for real
searches. That's normal.

## Bing and other search engines

Bing also powers results in DuckDuckGo, Yahoo and others. In [Bing Webmaster Tools](https://www.bing.com/webmasters)
you can import your site straight from Google Search Console, or verify it with a meta tag in **HTML in HEAD
Element** the same way, and submit the same sitemap.

## Related guides

- [SEO for your marketplace](/seo-classifieds-website/) — how to rank better once you're in.
- [Sitemap](/sitemap-classifieds-website/) — what's in it and how often it updates.
- [Add code to the head and footer](/html-in-head-element/) — the box you paste verification tags into.
{: .cards}
