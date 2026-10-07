---
title: My changes don't show up
description: You saved a change but the site looks the same. Here is where an old version can be hiding, and how to get the new one to show.
section: troubleshooting
order: 30
permalink: /changes-not-showing/
keywords: changes not showing, not updating, old version, cache, refresh, browser cache, hard refresh, google not updated, facebook preview, logo not changing, css not working
updated: 2026-10-07
---

You saved a new logo, a new setting or a new text, the panel said it was saved, but the site still looks the same.
The change is almost always there; you're just looking at an older copy of the page. Work down this list.

## 1. Reload properly

Your browser keeps copies of pages, images and style sheets to save time. A normal reload can still use them.

- **Windows and Linux:** press **Ctrl + F5** (or **Ctrl + Shift + R**).
- **Mac:** press **Cmd + Shift + R**.
- **Phone:** close the tab and open the site again, or open it in a private tab.

Opening the site in a private or incognito window is the quickest test: it uses no stored copies. If the change
shows there, it was only your browser.
{: .tip}

## 2. Clear the site's cache

Your site also keeps ready-made copies of things like menus, category lists and listing counts. Most changes clear
them automatically, but not all.

Go to **Tools** and click **Clear cache** in the **Cache** card, then reload. See [Clear the cache](/modify-cache-time/).

## 3. Check you changed the right thing

Some settings exist more than once, and it is easy to edit a different copy from the one you're looking at.

| You changed… | Check that… |
| --- | --- |
| Theme options, logo, colours | You edited the theme the site actually uses. Options belong to each theme, so after switching themes you need to set them again. See [Theme options](/theme-options/). |
| A text in one language | You're viewing the site in that language. On a [multilingual site](/how-to-activate-multilingual-mode/), each language has its own version of pages, emails and translated texts. |
| An email template | You edited the template of the right language. The language picker at the top of **Email templates** shows which one you're editing. |
| Wording on buttons and menus | You changed it under **Settings › Translations › Edit texts** for the language the site uses. See [Language and translations](/how-to-change-language/). |
| A page, banner or widget | It is published and placed where you're looking. Widgets only show in the areas your theme has. |
| Anything, if you have several sites | You're signed in to the right marketplace. Check the address bar. |

## 4. Is the item visible to visitors yet?

- A new listing may be waiting for your approval in **Listings › Moderation**, or for the seller to confirm by email
  or pay. See [Moderation](/how-ads-moderation-works/).
- A listing may already be expired. See [Listings disappeared](/listings-disappeared/).
- While **Maintenance Mode** is on, only you and your team see the site; visitors see the maintenance page.

## 5. Changes outside your site take longer

Some copies of your pages are kept by other companies, and you can't clear them from Yclas:

| Where | How long | What you can do |
| --- | --- | --- |
| Google and Bing results | Days to weeks | Request a new crawl of the page in Google Search Console. See [Get your site into Google](/google-search-console/). |
| Link previews on Facebook, WhatsApp, LinkedIn | Until they refresh it | Paste the address into Facebook's Sharing Debugger and click "Scrape again". Other apps refresh on their own over time. |
| A new custom domain | Up to 24–48 hours | DNS changes spread slowly around the internet. See [Connect your own domain](/custom-domain/). |

## Still the old version?

Clear your browser's cache completely (in its settings, under privacy or history), try another device, and if the
change still doesn't show, [open a support ticket](/use-yclas-support-system/). Say what you changed, where you
expected to see it, and include the page address.

## Related guides

- [Clear the cache](/modify-cache-time/) — what the site's cache is.
- ["Something went wrong" errors](/error-troubleshooting-wow-seems-error/) — when you get an error instead.
- [Listings disappeared](/listings-disappeared/) — when listings vanish rather than fail to update.
{: .cards}
