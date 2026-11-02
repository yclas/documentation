---
title: Google Analytics
description: Connect Google Analytics 4 or Plausible to see how many people visit your marketplace, where they come from and which pages they use, and verify your site in Google Search Console.
section: integrations
order: 30
permalink: /google-analytics/
keywords: google analytics, ga4, analytics, gtag, google tag, global site tag, measurement id, G-, statistics, visitors, traffic, tracking, plausible, plausible analytics, cookie-free analytics, privacy-friendly analytics, self-hosted plausible, google search console, search console, site verification, google-site-verification, meta tag, verify site, sitemap, submit sitemap
updated: 2026-11-02
plans: Available on all plans
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
3. In your admin panel, go to **Add-ons** and open **Google Analytics**.
4. Paste the snippet into **Google tag**.
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

## Plausible Analytics instead

[Plausible](https://plausible.io) is a simple, privacy-friendly alternative to Google Analytics. It counts visitors,
pages and where people come from without cookies, on one short dashboard. You need a Plausible account with your site
added to it, or your own self-hosted Plausible.

1. In Plausible, add your site, exactly as visitors reach it, for example `yourdomain.com`.
2. In your admin panel, go to **Add-ons**, open the **Analytics** tab and click **Plausible Analytics**.
3. In **Domain**, enter your site exactly as you added it in Plausible, without `https://`.
4. Leave **Script address (optional)** empty, unless you host Plausible yourself or Plausible gave you a script made
   for your site. Then paste that address: it starts with `https://` and ends in `.js`.
5. Click **Save**.
{: .steps}

The Plausible script is then added to every page of your site. To check it works, visit your site in a private
window and open your Plausible dashboard. To remove it, empty **Domain** and click **Save**.

Plausible sets no cookies, but where your site asks visitors for [cookie consent](/cookie-consent/), it waits for their
consent to analytics, the same as Google Analytics. You can use Plausible and Google Analytics at the same time.
{: .note}

## Verify your site in Google Search Console

[Google Search Console](https://search.google.com/search-console) shows which Google searches bring visitors to your
site, and how Google sees your pages. Google first asks you to prove the site is yours. The **Google Search Console**
add-on adds Google's verification tag for you and gives you the sitemap address to submit.

1. In Search Console, click **Add property**, choose **URL prefix** and enter your site's address, exactly as it
   appears in the browser.
2. Choose the **HTML tag** verification method, and copy the tag Google shows. It starts with
   `<meta name="google-site-verification"`.
3. In your admin panel, go to **Add-ons**, open the **Analytics** tab and click **Google Search Console**. Paste the
   tag into **Verification tag** (the whole tag or only the code inside `content="…"`) and click **Save**.
4. Back in Search Console, click **Verify**.
5. Once verified, open **Sitemaps** in Search Console and submit the address shown under **Sitemap** on the same page.
   It ends in `/sitemap.xml`.
{: .steps}

The tag is added to every page, without waiting for cookie consent, because it doesn't track anyone. Leave it in
place after verifying: Google checks it again from time to time. To remove it, empty **Verification tag** and click
**Save**.

If the page says *Your site is kept out of search engines for now*, the sitemap stays empty until your site opens to
search engines. The sitemap lists your listings, categories and pages and stays up to date by itself, so you don't need
to submit it again when listings change.
For what to look at in Search Console, and Bing, see [Get your site into Google](/google-search-console/).

## Good to know

- **Cookie consent.** Google Analytics sets cookies. If your visitors are in the EU or the UK, you may need their
  consent first. See [Cookie consent and privacy](/cookie-consent/).
- **Other Google tags.** The same field can hold one combined Google tag for Analytics and Google Ads. For Meta
  Pixel, TikTok and other tools, see [Tracking codes and analytics pixels](/how-to-add-tracking-codes/).
- **Remove it.** Empty the field and click **Save**.

## Related guides

- [Tracking codes and analytics pixels](/how-to-add-tracking-codes/) — other analytics and advertising tags.
- [Analytics](/useful-statistics-about-your-advertisements/) — the statistics in your admin panel.
- [Get your site into Google](/google-search-console/) — what to look at in Search Console, and Bing.
- [Cookie consent and privacy](/cookie-consent/) — what to tell visitors about cookies.
- [Promote your marketplace](/promote-classifieds-website-free/) — get the visitors to measure.
{: .cards}
