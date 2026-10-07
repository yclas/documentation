---
title: My site is down or slow
description: Your marketplace won't load, shows a 502, 504 or other error page, or is sometimes very slow. Find out where the problem is, what you can fix yourself and what to send support.
section: troubleshooting
order: 15
nav_title: Site down or slow
permalink: /site-down-or-slow/
keywords: site down, website down, server down, not loading, not working, offline, can't access, error 504, 504 gateway timeout, 502, bad gateway, 503, 520, 521, 522, 524, 525, 526, cloudflare error, timeout, slow, very slow, loading slowly, speed, too many redirects, outage
updated: 2026-10-07
---

When your marketplace won't open, or only opens very slowly, a few quick checks tell you whether the problem is on
one page, in your own settings or code, with your domain, or on our side. Most of them take a minute, and the
answers are exactly what support needs if you do have to write to us.

## 1. Is it the whole site, or one page?

Open your site in a private or incognito window, then try the home page, a listing and the admin panel.

| What you see | What it usually means |
| --- | --- |
| Only one page fails | The problem is in that page, not the server. See ["Something went wrong" errors](/error-troubleshooting-wow-seems-error/). |
| An error page that mentions Cloudflare, "DNS" or "too many redirects" | The problem is usually in your domain's DNS or Cloudflare settings. See step 2. |
| The public site fails or is slow, but the admin panel works | Look at code you added recently. See step 3. |
| It only fails for you | Try another browser, another device or mobile data instead of your Wi-Fi. If it works there, the problem is your browser or network. |
| Every page and every address fails | Go to step 4 and contact support. |

"Site expired" or "We are working on our site" are not errors: the first means the plan or trial has ended, the
second that maintenance mode is on. See ["Something went wrong" errors](/error-troubleshooting-wow-seems-error/).
{: .note}

## 2. Check your domain and Cloudflare

If you connected your [own domain](/custom-domain/), its DNS is managed in your own Cloudflare account, and a
change there can take your site offline even though nothing changed at Yclas. Error pages with Cloudflare's name on
them come from this step.

| You see | Check in Cloudflare |
| --- | --- |
| Too many redirects, or error 525 / 526 | **SSL/TLS** is set to **Flexible**, not **Full** or **Full (strict)**. |
| "DNS address could not be found", or error 1001 / 1016 | **DNS** still has the CNAME record `@` pointing to `yclas.ovh`, with the orange cloud (**Proxied**). |
| Error 521 / 522 / 523 | The `@` record points to `yclas.ovh` and there's no old **A** record left over. |
| Error 502, 504 or 524 | Usually a page took too long on our side. If it lasts more than a few minutes, contact support. |
| Your domain stopped working on a certain date | The domain itself hasn't expired at the company you bought it from. |

Also check that no Cloudflare rule you added (a page rule, a firewall rule, "Under Attack" mode or a cache rule)
blocks or changes your site's pages.

## 3. Undo recent custom code

Code you paste into your site runs on every page, for every visitor. A broken tag or a slow third-party script
(a chat widget, an ad network, a tracking code) can stop pages from loading properly or make them very slow, while
the admin panel, which doesn't load that code, keeps working.

1. Go to **Settings › General** and open **Advanced**.
2. Copy what's in **HTML in HEAD Element** and **HTML in Footer** somewhere safe, then empty both boxes.
3. Click **Save changes** and reload your site in a private window.
{: .steps}

If the site is fine now, add your code back one piece at a time to find the one causing trouble. Do the same with
[custom CSS](/how-to-use-custom-css/) if parts of pages have disappeared. See
[Add code to the head and footer](/html-in-head-element/).

## 4. Clear the cache and try again

If pages look broken or half-loaded rather than missing, go to **Tools** and click **Clear cache** in the **Cache**
card, then reload in a private window. See [Clear the cache](/modify-cache-time/).

## Why a site can be slow now and then

A page that loads quickly most of the time but slowly now and then is usually caused by one of these:

- **Heavy third-party scripts.** Every chat widget, ad script, pixel and font you add is loaded from another
  company's server, and the page waits for it. Remove the ones you no longer use.
- **Large images loaded from elsewhere.** Photos uploaded to your site are resized for you, but an image you link
  to on another website, or put in a banner or custom code, loads at its full size. Upload images to your site's
  [media library](/how-to-manage-uploaded-images/) instead, or keep them under about 300 KB.
- **The first visit after a change.** After you clear the cache or save a setting, the next page is built from
  scratch and can take a little longer, once.
- **A burst of automated traffic.** Bots and scrapers that fetch hundreds of pages a minute are slowed down or
  blocked automatically. If you run a link checker or a scraper on your own site, set it to a slow pace.

To see what slows a page down, test it with a free tool such as Google's PageSpeed Insights: it lists the scripts
and images that take longest.
{: .tip}

## What Yclas does

Your marketplace runs on servers that the Yclas team runs and maintains for you. You don't need to restart
anything, renew a server or install updates. When we update the software, the site can show *We are working on our
site* for a few seconds. A problem on our side usually affects many marketplaces at once, and we fix it as fast as
we can, but a ticket from you still helps: it tells us exactly which address and which page failed, and when.

## Contact support

If the site is still down or slow after these checks, [open a support ticket](/use-yclas-support-system/). If you
can't get into your admin panel, sign in at yclas.com and click **Support** in the top menu. Include:

- the exact address (URL) that fails, and whether other pages and the admin panel open;
- the error you see, word for word, including any error code (504, 522…) and, on a Cloudflare error page, the
  **Ray ID** at the bottom;
- the date and time it happened, with your time zone, and whether it happens every time or only sometimes;
- what you changed shortly before, if anything (domain, Cloudflare, custom code, theme).

## Related guides

- ["Something went wrong" errors](/error-troubleshooting-wow-seems-error/) — when one page shows an error.
- [Connect your own domain](/custom-domain/) — the DNS and Cloudflare settings your domain needs.
- [Add code to the head and footer](/html-in-head-element/) — the custom code boxes and how to use them safely.
- [Get help from Yclas support](/use-yclas-support-system/) — how support tickets work.
{: .cards}
