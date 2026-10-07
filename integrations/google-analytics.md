---
title: Google Analytics
description: Connect Google Analytics 4 to see how many people visit your marketplace, where they come from and which pages they use.
section: integrations
order: 30
permalink: /google-analytics/
keywords: google analytics, ga4, analytics, gtag, google tag, global site tag, measurement id, G-, statistics, visitors, traffic, tracking
updated: 2026-10-07
---

Google Analytics tells you who visits your marketplace: how many people, from which countries and devices, how they
found you (Google, social media, an ad) and which pages they look at. It is free and complements the
[Analytics page](/useful-statistics-about-your-advertisements/) in your admin panel, which counts listings, members
and orders.

## Create a Google Analytics property

If you already have a Google Analytics 4 property for your marketplace, skip to the next section.

1. Go to [analytics.google.com](https://analytics.google.com) and sign in with your Google account.
2. Click **Start measuring** (or **Admin › Create › Property** if you already use Analytics), and give the property
   your marketplace's name, time zone and currency.
3. When asked for a platform, choose **Web**, enter your marketplace's address and a stream name, and click
   **Create stream**.
{: .steps}

## Connect it to your marketplace

1. In Google Analytics, open the web stream you created (**Admin › Data streams**) and click **View tag
   instructions**, then **Install manually**.
2. Copy the whole code snippet. It starts with `<!-- Google tag (gtag.js) -->` and contains your measurement ID,
   which looks like `G-XXXXXXXXXX`.
3. In your admin panel, go to **Integrations** and open **Google Analytics**.
4. Paste the snippet into **Analytics Goblal Site Tag**.
5. Click **Save**.
{: .steps}

The field needs the **whole snippet**, including the `<script>` tags, not just the `G-` measurement ID. If you paste
only the ID, nothing is tracked.
{: .important}

The tag is added to every public page of your marketplace. Pages of the admin panel aren't tracked, so your own work
doesn't inflate the numbers.

## Check it works

1. Open your marketplace in a private or incognito window and click around.
2. In Google Analytics, open **Reports › Realtime**. You should appear within a minute.
{: .steps}

If you don't, check that the snippet was pasted completely and that your browser isn't blocking trackers (many
ad blockers block Google Analytics).

## Good to know

- **Cookie consent.** Google Analytics sets cookies. If your visitors are in the EU or the UK, you may need their
  consent first. See [Cookie consent and privacy](/cookie-consent/).
- **Other Google tags.** The same field can hold one combined Google tag for Analytics and Google Ads. For Meta
  Pixel, TikTok and other tools, see [Tracking codes and analytics pixels](/how-to-add-tracking-codes/).
- **Search Console.** To see which Google searches bring visitors, also verify your site in Google Search Console.
  See [SEO for your marketplace](/seo-classifieds-website/).
- **Remove it.** Empty the field and click **Save**.

## Related guides

- [Tracking codes and analytics pixels](/how-to-add-tracking-codes/) — other analytics and advertising tags.
- [Analytics](/useful-statistics-about-your-advertisements/) — the statistics in your admin panel.
- [Cookie consent and privacy](/cookie-consent/) — what to tell visitors about cookies.
- [Promote your marketplace](/promote-classifieds-website-free/) — get the visitors to measure.
{: .cards}
