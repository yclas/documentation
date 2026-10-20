---
title: Seller storefronts and the stores directory
nav_title: Storefronts and stores directory
description: Let each seller turn their profile into a store with a name, logo, banner, policies and a search of their own, and list every store on one page at /stores.
section: users
order: 640
permalink: /storefronts/
keywords: storefront, storefronts, store, stores, shop, seller shop, seller page, vendor, vendor page, vendor directory, seller directory, stores directory, list of stores, all stores, store logo, store banner, shipping policy, returns policy, multi-vendor
updated: 2026-10-20
plans: Marketplace plan
---

On a multi-seller marketplace, regular sellers want a place of their own: a page with their name and logo that they
can share, where buyers browse only their items. With storefronts, each seller can turn their profile into a store.
The **stores directory** at `/stores` then lists every store on your site, so buyers can find sellers as well as
items.

Storefronts are part of the **Marketplace** plan and work with the **Nova** theme.
{: .note}

## Switch storefronts on

Storefronts are off until you switch them on:

1. Go to **Settings › General**.
2. In **Business sellers**, switch on **Seller storefronts**.
3. Click **Save changes** in the bar at the bottom.
{: .steps}

The switch only shows on the Marketplace plan with the Nova theme. If it says *Set by Yclas support for your site*,
ask us through **Support** to change it.

## How a seller sets up their store

1. In the menu of their account pages, the seller clicks **My store**.
2. They fill in the store details (see below) and click **Save**.
3. Once the store is saved, they add a **Logo (square)** and a **Banner (wide)** under **Pictures**, and save again.
{: .steps}

| Field | What it's for |
| --- | --- |
| **Store name** | Required, up to 120 characters. |
| **Short address** | A short link to the store, such as `/store/smith-tools`, made from the name if left empty. Lower-case letters, numbers and dashes; each store's must be different. |
| **Tagline** | One line under the name, up to 200 characters. |
| **About the store** | Who they are and what they sell. |
| **Shipping policy** | How and when they ship. |
| **Returns policy** | Their returns terms. Buyers also see it when they ask for a [return](/returns/). |
| **Search engines: Title** and **Description** | The store's own title (up to 70 characters) and description (up to 170) in Google. Left empty, the store name and tagline are used. |

Pictures follow your [photo settings](/how-to-configure-image-settings/) for file types and size. **Remove** under a
picture takes it off.

## What buyers see

A seller's store replaces their profile page, at the same address (`/user/their-name`); the short address leads there
too. The store shows:

- the banner, logo, store name and tagline;
- the seller's published listings, with category buttons and a **Search this store** box of their own;
- **About the store**, **Shipping** and **Returns**, when the seller filled them in.

Sellers who haven't set up a store keep their normal [profile](/member-profiles/). A store with no published listings
is kept out of search engines until it has some.

## The stores directory

With storefronts on, `/stores` lists every store on your site, 24 to a page. Each card shows the store's banner, logo,
name, tagline and number of listings, and links to the store.

Buyers can:

- search stores by name or tagline (**Search stores**);
- filter by category, to see the stores that sell in it;
- sort by most listings (the default), newest or name.

Only stores of active sellers with at least one published listing are listed. The directory is in your sitemap; a
search or a filter is kept out of search engines so Google sees one directory, not hundreds of copies. Each store
page has a **Stores** link back to the directory in its breadcrumbs.

The directory isn't added to your menu automatically. Add a link to `/stores` in your [menu](/modify-top-menu/) so
buyers can find it.
{: .tip}

If one of your categories already uses `stores` as its URL name, `/stores` keeps showing that category and there is no
directory. Rename the category's URL to use the directory.
{: .note}

## Good to know

- If you switch storefronts off, profiles go back to normal and the short addresses stop working. Sellers' store
  details are kept for when you switch them on again.
- Stores are in your sitemap, so search engines find them.

## Related guides

- [Member profiles](/member-profiles/) — the profile page a store replaces, and the members directory.
- [Business sellers](/business-sellers/) — business accounts, bulk import and stock feeds.
- [Sales dashboard for sellers](/sales-dashboard/) — every seller's sales and views.
- [Menu and footer links](/modify-top-menu/) — add the stores directory to your menu.
{: .cards}
