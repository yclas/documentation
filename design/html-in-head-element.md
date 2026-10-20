---
title: Add code to the head and footer
description: Paste verification tags, chat widgets, ad scripts or other third-party code into every page of your site, from Design › Custom code.
section: design
order: 80
permalink: /html-in-head-element/
redirect_from:
  - /html-in-footer/
keywords: html, head, header code, footer code, custom code, script, javascript, meta tag, verification, google search console, pinterest, facebook domain verification, chat widget, adsense, embed code, html in head element, html in footer, safe mode, design=safe, cookie consent
updated: 2026-10-20
---

Many services ask you to "paste this code into the `<head>` of your website" or "just before `</body>`": a Google
Search Console verification tag, a live-chat widget, an advertising script, a cookie tool. Yclas has two boxes for
exactly that, and whatever you put in them is added to every page of your site.

The boxes used to be in **Settings › General › Advanced** (as **HTML in HEAD Element** and **HTML in Footer**). They
are now in **Design › Custom code**, next to your [custom CSS](/how-to-use-custom-css/). Code you saved before is
still there and still works.
{: .note}

## Where to paste the code

1. In the admin panel, go to **Design › Custom code**.
2. Scroll to **Head and footer code** and paste the code into the right box:
   - **Code in the page head**: when the service says *head*, or the code is a `<meta>` or `<link>` tag.
   - **Code in the footer**: when the service says *before the closing body tag*, *footer* or *end of the page*.
     Most chat widgets and many scripts go here.
3. Click **Save changes** in the bar at the bottom. You see *Code saved*.
4. Open your site, reload it, and check that the service now works (for example, click **Verify** in Search Console).
{: .steps}

If the instructions don't say, put `<meta>` and `<link>` tags in the head, and `<script>` tags in the footer. A
script in the footer doesn't slow down how quickly your page appears.
{: .tip}

Only administrators see the head and footer boxes. Other roles with access to Design keep the CSS box only.

## What it's for

| You want to… | Use |
| --- | --- |
| Verify your site with Google Search Console, Bing, Pinterest or Facebook (meta tag method) | **Code in the page head** |
| Add a live-chat or help-desk widget | **Code in the footer** |
| Add Google AdSense auto ads or another ad network's script | **Code in the page head** (as AdSense asks) |
| Load a font or an extra stylesheet | **Code in the page head** |
| Add Google Analytics, a Meta (Facebook) pixel or another tracking code | See [Tracking codes and analytics pixels](/how-to-add-tracking-codes/) first |
| Send listings, sign-ups or orders to another app | [Webhooks](/webhooks/), not code on the page |
| Show a banner on your pages | The banner fields in [Theme options](/theme-options/) or an Image widget. See [Banners and ad slots](/how-to-add-banner/). |
| Change how the site looks | [Custom CSS](/how-to-use-custom-css/) |

## Where the code ends up

| Box | Position in the page |
| --- | --- |
| **Code in the page head** | At the end of the `<head>`, after the theme's styles and your custom CSS. |
| **Code in the footer** | At the end of the page, after the theme's scripts, just before `</body>`. |

The code is added to every public page, to registration, and to your members' own account pages (their listings,
profile, messages, favourites and wallet), in every theme.

It is **not** added to:

- the admin panel;
- the sign-in pages: log in, forgotten password, two-step login, phone login, and the page where a member sets a new
  password from a reset link;
- pages you browse in safe mode (see below).

So however broken the code is, you can always sign in and fix it.

If your site uses a custom theme made just for you, the Custom code page says so: that theme adds the code to every
page, the sign-in page included. Test your code carefully, and if it ever stops you signing in,
[contact support](/use-yclas-support-system/).
{: .note}

## If the code breaks your site

Right after you save, your site checks your home page, your newest listing and the login page. If one of them no
longer loads properly, it puts back the code your visitors had before. The next time you open **Design › Custom code**
you see a message saying what went wrong. The code you typed is still in the box, so you can fix it and save again.

That check only sees what your server sends. A script that hides the page or sends visitors elsewhere once it runs
in the browser can still get through, so always look at your site after saving.

To see your site without your custom code, add `?design=safe` to any address while you're signed in as an
administrator, for example `https://www.your-marketplace.com/?design=safe`. Safe mode lasts while you browse; add
`?design=off` to leave it. Visitors are never affected.
{: .tip}

## Cookie consent

If your site asks visitors which cookies they accept (**Ask for cookie consent** in **Settings › General**, see
[Cookie consent and privacy](/cookie-consent/)), the Custom code page shows two more settings:

| Setting | What it does |
| --- | --- |
| **This code sets cookies (wait for consent)** | On by default. The head and footer code is only added for visitors who accepted the category below. Turn it off only if your code sets no cookies, for example a site verification tag. |
| **Cookie category** | **Analytics** (the default) or **Marketing**: the category a visitor must accept for your code to load. |

The setting applies to both boxes together. A visitor who accepts gets the code from the next page they open.

New sites ask for cookie consent from the start, so a verification tag in the head waits for consent too. If a
service such as Search Console can't find your tag, turn off **This code sets cookies (wait for consent)** while it
checks, or for good if all your code is cookie-free.
{: .important}

## Be careful with code you paste

Your code runs on every page, for every visitor, exactly as you pasted it.

- Only paste code from services you trust. A script can read anything on the page, including what members type.
- A broken or unfinished tag (for example a `<div>` that is never closed, or a `<script>` without `</script>`) can
  hide parts of your site. If the site looks wrong after saving, empty the box and save again.
- Remove codes for services you no longer use. Each extra script makes your pages slower.
- Ad and tracking scripts may need your visitors' consent in the EU and UK. See [Cookie consent](#cookie-consent)
  above.

## Ads.txt and robots.txt

These two stay in **Settings › General**, in the **Advanced** group:

- **Ads.txt**: the authorised sellers file ad networks such as AdSense ask for. See
  [Banners and ad slots](/how-to-add-banner/#adstxt).
- **Robots.txt**: instructions for search engine crawlers. See
  [Search engine visibility](/allowdisallow-bots-crawlers/).

## Related guides

- [Tracking codes and analytics pixels](/how-to-add-tracking-codes/) — Google Analytics, Meta pixel and others.
- [Custom CSS](/how-to-use-custom-css/) — style changes, on the same page.
- [Cookie consent and privacy](/cookie-consent/) — the cookie banner and its categories.
- [Banners and ad slots](/how-to-add-banner/) — make money with advertising.
{: .cards}
