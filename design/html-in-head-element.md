---
title: Add code to the head and footer
description: Paste verification tags, chat widgets, ad scripts or other third-party code into every page of your site.
section: design
order: 80
permalink: /html-in-head-element/
redirect_from:
  - /html-in-footer/
keywords: html, head, header code, footer code, script, javascript, meta tag, verification, google search console, pinterest, facebook domain verification, chat widget, adsense, embed code
updated: 2026-10-07
---

Many services ask you to "paste this code into the `<head>` of your website" or "just before `</body>`": a Google
Search Console verification tag, a live-chat widget, an advertising script, a cookie tool. Yclas has two boxes for
exactly that, and whatever you put in them is added to every page of your site.

## Where to paste the code

1. In the admin panel, go to **Settings › General**.
2. Open **Advanced** (at the bottom of the list on the left).
3. Paste the code into the right box:
   - **HTML in HEAD Element** — when the service says *head*, or the code is a `<meta>` or `<link>` tag.
   - **HTML in Footer** — when the service says *before the closing body tag*, *footer* or *end of the page*.
     Most chat widgets and many scripts go here.
4. Click **Save changes**.
5. Open your site, reload it, and check that the service now works (for example, click **Verify** in Search Console).
{: .steps}

If the instructions don't say, put `<meta>` and `<link>` tags in the head, and `<script>` tags in the footer. A
script in the footer doesn't slow down how quickly your page appears.
{: .tip}

## What it's for

| You want to… | Use |
| --- | --- |
| Verify your site with Google Search Console, Bing, Pinterest or Facebook (meta tag method) | **HTML in HEAD Element** |
| Add a live-chat or help-desk widget | **HTML in Footer** |
| Add Google AdSense auto ads or another ad network's script | **HTML in HEAD Element** (as AdSense asks) |
| Load a font or an extra stylesheet | **HTML in HEAD Element** |
| Add Google Analytics, a Meta (Facebook) pixel or another tracking code | See [Tracking codes and analytics pixels](/how-to-add-tracking-codes/) first |
| Show a banner on your pages | The banner fields in [Theme options](/theme-options/) or an Image widget. See [Banners and ad slots](/how-to-add-banner/). |
| Change how the site looks | [Custom CSS](/how-to-use-custom-css/) |

## Where the code ends up

| Box | Position in the page |
| --- | --- |
| **HTML in HEAD Element** | At the end of the `<head>`, after the theme's styles. |
| **HTML in Footer** | At the very end of the page, after the theme's scripts, just before `</body>`. |

Both boxes are added to every public page and to your members' account pages, in every theme. They are not added
to the admin panel.

## Be careful with code you paste

Your code runs on every page, for every visitor, exactly as you pasted it.

- Only paste code from services you trust. A script can read anything on the page, including what members type.
- A broken or unfinished tag (for example a `<div>` that is never closed, or a `<script>` without `</script>`) can
  hide parts of your site. If the site looks wrong after saving, empty the box and save again: the admin panel
  doesn't use this code, so you can always get back in to fix it.
- Remove codes for services you no longer use. Each extra script makes your pages slower.
- Ad and tracking scripts may need your visitors' consent in the EU and UK. See [Cookie consent and
  privacy](/cookie-consent/).

## Ads.txt and robots.txt

The same **Advanced** group has two more boxes:

- **Ads.txt** — the authorised sellers file ad networks such as AdSense ask for. See
  [Banners and ad slots](/how-to-add-banner/#adstxt).
- **Robots.txt** — instructions for search engine crawlers. See
  [Search engine visibility](/allowdisallow-bots-crawlers/).

## Related guides

- [Tracking codes and analytics pixels](/how-to-add-tracking-codes/) — Google Analytics, Meta pixel and others.
- [Banners and ad slots](/how-to-add-banner/) — make money with advertising.
- [Custom CSS](/how-to-use-custom-css/) — style changes.
- [General settings](/change-site-name-site-description/) — the rest of **Settings › General**.
{: .cards}
