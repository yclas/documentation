---
title: RSS feeds
description: Every marketplace publishes RSS feeds of its newest listings, per category and location, plus the blog and forum. Use them to share listings automatically.
section: growth
order: 60
permalink: /rss-feeds/
keywords: rss, feed, atom, xml, new listings feed, ifttt, zapier, automation, syndication, partner sites
updated: 2026-10-07
---

An RSS feed is a machine-readable list of your newest content. People can follow it in a feed reader, and, more
usefully for you, other tools can read it to do something every time a listing is posted: share it on social media,
send it to a Slack or Telegram channel, or show it on a partner's website. Your marketplace publishes feeds out of
the box; there is nothing to switch on.

## Your feeds

Replace `yoursite.com` with your own address.

| Feed | Address |
| --- | --- |
| Newest listings on the whole site | `yoursite.com/rss.xml` |
| Newest listings in one category | `yoursite.com/rss/cars.xml` |
| Newest listings in a category and location | `yoursite.com/rss/cars/london.xml` |
| Newest listings in one location, any category | `yoursite.com/rss/all/london.xml` |
| One seller's listings | `yoursite.com/user/sellername.xml` |
| Blog posts (with the Blog add-on on) | `yoursite.com/rss/blog.xml` |
| Forum topics (with the Forums add-on on) | `yoursite.com/rss/forum.xml`, or `yoursite.com/rss/forum/forum-name.xml` for one forum |

Use the same words that appear in the address of your category, location or seller page: open the category on your
site and copy the last part of its address. On a site in another language, the word `all` is translated, just like
in your category addresses.

Each listing in a feed has its title, a link, the publish date, its location and its description as plain text, with
the first photo when it has one.

Browsers and feed readers find the right feed on their own: every page of your site announces the feeds that match
it.
{: .tip}

## How many listings a feed shows

Go to **Listings › Settings › Listing pages** and set **Listings in RSS**, then click **Save**. A small number (10–20)
is plenty for automations, which check the feed often.

## Ideas for using your feeds

- **Post new listings to social media.** Tools such as IFTTT, Zapier, Make, dlvr.it or Buffer can watch a feed and post
  each new item to a Facebook page, X, LinkedIn or a Telegram channel. For direct posting from Yclas, see [Auto-post
  listings to social media](/auto-post-social-media/).
- **Niche channels.** Run a separate channel per category ("New jobs in Leeds") from the category and location feeds.
- **Partner websites.** A local newspaper, club or business association can show your newest listings on their site
  with an RSS widget, which links back to you.
- **Keep an eye on your site.** Follow your own feed in a reader to see new listings as they come in.

## Things to know

- Feeds only show published listings.
- A category feed shows listings filed directly in that category, not those in its subcategories. Use the feed of the
  subcategory, or the whole-site feed.
- Private sites and sites in maintenance mode don't serve feeds to the public.

## Related guides

- [Auto-post listings to social media](/auto-post-social-media/) — post from Yclas directly.
- [Promote your marketplace](/promote-classifieds-website-free/) — more ways to bring visitors in.
- [Newsletters and subscribers](/how-to-send-the-newsletter/) — reach members by email.
{: .cards}
