---
title: Tracking codes and analytics pixels
description: Add Google Analytics, the Meta (Facebook) Pixel, Google Ads, TikTok, Hotjar or any other tracking code to every page of your marketplace.
section: growth
order: 50
permalink: /how-to-add-tracking-codes/
keywords: tracking code, analytics, google analytics, ga4, gtag, facebook pixel, meta pixel, google ads, conversion, tiktok pixel, hotjar, clarity, tag manager, gtm
updated: 2026-10-07
---

Tracking codes are small snippets of JavaScript from services like Google Analytics or Meta that measure who visits
your site, where they come from and what they do. With them you can see which promotion works, and run ads that reach
people who already visited your marketplace.

The admin panel already shows basic numbers under **Analytics** (see [Analytics](/useful-statistics-about-your-advertisements/)).
Add a tracking code when you need more: traffic sources, audiences, conversions or ad campaigns.

## Google Analytics

Google Analytics has its own place in the panel: paste the whole Google tag snippet into **Integrations › Google
Analytics** and click **Save**. The code is then added to every page of your site. See
[Google Analytics](/google-analytics/) for the step-by-step guide.

## Any other tracking code

Everything else goes into the head of your pages:

1. Copy the code from the service. For the Meta Pixel, Google Ads, TikTok, LinkedIn, Pinterest, Hotjar, Microsoft
   Clarity or Google Tag Manager this is usually called the "base code" or "install code".
2. In your admin panel, go to **Settings › General › Advanced**.
3. Paste it into **HTML in HEAD Element**. If there is already code in the box, paste yours on a new line below it.
4. Click **Save changes**.
{: .steps}

Some services also give you a second part to place "right after the opening body tag" (Google Tag Manager does, for
example). Put that part into **HTML in Footer**: it works there too, and it is the only other place you can add code.

Use Google Analytics **or** Google Tag Manager with an Analytics tag inside, not both, or every visit is counted
twice.
{: .warning}

## Tips

- **One code, one place.** Pasting the same pixel twice counts every visit twice. Before adding a code, check
  **HTML in HEAD Element** and the Google Analytics integration for an older copy.
- **Test with the service's own tool.** Meta's Pixel Helper, Google's Tag Assistant and similar browser extensions
  show whether the code fires on your pages.
- **Broken code can break pages.** A missing `</script>` can stop menus or buttons from working. If something breaks
  right after you add a code, remove it and paste it again carefully. See [Add code to the head and
  footer](/html-in-head-element/).
- **Tracking codes and privacy.** In the EU, UK and some other places you need visitors' consent before setting
  tracking cookies. The built-in **Cookie Consent** notice under **Settings › General** tells visitors you use cookies,
  but it doesn't block tracking codes until they agree. If you need that, use the consent features of your analytics
  service (such as Google's Consent Mode) or a consent tool that you add in the head. See [Cookie consent and
  privacy](/cookie-consent/).

## Related guides

- [Google Analytics](/google-analytics/) — the integration in detail.
- [Get your site into Google](/google-search-console/) — search data from Google Search Console.
- [Promote your marketplace](/promote-classifieds-website-free/) — get the visitors you're now measuring.
{: .cards}
