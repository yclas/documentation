---
title: Menu and footer links
description: Put your own links in the top bar of your site, and see where the links in the header and footer come from.
section: design
order: 50
permalink: /modify-top-menu/
keywords: menu, top menu, navigation, nav bar, header links, footer links, link, icon, reorder, external link
updated: 2026-10-07
---

The top bar of your site is how visitors find their way around. Out of the box your theme shows sensible links,
such as **Browse**, **Blog** and **FAQ**. With **Design › Menu** you replace them with your own: a link to your
"How to sell" page, your best category, your shop on another site, anything with an address.

## How the menu works

- **No links in Design › Menu:** your theme shows its default links. In Nova that is **Browse**, plus **Blog**,
  **FAQ** and **Forums** when those features are switched on.
- **One or more links:** your links replace the default ones. Add every link you want visitors to see, including
  the defaults you want to keep.

In Nova, the **Post an ad** button, the sign-in and account menu and the category bar under the header always
stay; they are not part of the menu.
{: .note}

## Add a link

1. In the admin panel, go to **Design › Menu**.
2. Click **+ Add link**.
3. Fill in the form (see the table below).
4. Click **Add link**.
{: .steps}

| Field | What to enter |
| --- | --- |
| **Title** | The text visitors see, for example *How it works*. Keep it short so the bar fits on smaller screens. |
| **URL** | The full address the link opens, for example `https://www.example.com/how-it-works.html`. |
| **Opens in** | **Same tab** for pages on your site, **New tab** for other websites. |
| **Icon** | Optional. Click the field and pick an icon to show before the title, or type its name (for example `fa fa-home`). |
| **Language** | Only on [multilingual sites](/how-to-activate-multilingual-mode/). See the note below. |

Links that start with `javascript:`, `data:` or `vbscript:` are refused, so a menu link can never run a script on
your visitors' browsers.

### Addresses on your own site

The easiest way to get the right address is to open the page on your site and copy it from your browser's address
bar. On an English site the main pages are:

| Page | Address after your domain |
| --- | --- |
| All listings | `/all` |
| A category | `/` followed by the category's SEO name, for example `/cars` |
| Post a listing | `/publish-new.html` |
| Search | `/search.html` |
| Contact | `/contact.html` |
| One of your [pages](/how_to_add_pages/) | `/` followed by its SEO title and `.html`, for example `/about-us.html` |
| Blog, FAQ, Forum | `/blog`, `/faq`, `/forum` |
| Member directory | `/user` |

On a site in another language some addresses are translated, which is why copying them from the browser is safest.
{: .tip}

## Reorder, edit or delete links

- **Reorder:** drag a link by its handle (the dots on the left) to a new position. The order is saved straight away.
- **Edit:** click **Edit** next to the link, change it and click **Save**.
- **Delete:** click **Edit**, then **Delete** and confirm. Delete every link to bring back the theme's default links.

## Where the footer links come from

You don't edit the footer link by link. In Nova the footer is built for you:

| Footer column | What it lists | How to change it |
| --- | --- | --- |
| Your site name | Your **Site Description**, and icons for your social profiles. | Description in **Settings › General**; social links in **Design › Theme Options › General** (**Facebook link**, **Twitter link**, **Instagram link**). |
| **Marketplace** | Browse Listings, Post an ad, Pricing (when membership plans are on) and Map (when the map is on). | Follows your settings. |
| **Information** | Every published [page](/how_to_add_pages/), in page order, plus Blog, FAQ and Contact. | Publish, unpublish or reorder pages under **Pages** in the admin panel. |
| **Account** | Log in and Sign up, or My Listings, My Favorites and Edit profile for signed-in members. | Automatic. |

Need more in the footer? Add [footer widgets](/overview-of-widgets/), such as **Links** or **Follow**, or a
**Footer banner** in [Theme options](/theme-options/).

## Things to know

- **Language field:** on multilingual sites each link can be given a language, but Nova and Marketplace currently
  show every link in every language. Use titles that work for all your visitors, or keep your menu short.
- **Space:** on phones the top bar folds into a menu button, but on a laptop too many links push each other onto
  two lines. Five or six short links is a good maximum.
- **Changes don't show?** See [My changes don't show up](/changes-not-showing/).

## Related guides

- [Pages](/how_to_add_pages/) — create the pages your menu and footer link to.
- [Widgets](/overview-of-widgets/) — add blocks of links to the sidebar or footer.
- [Theme options](/theme-options/) — social links and the category bar under the header.
{: .cards}
