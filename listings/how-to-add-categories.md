---
title: Categories
description: Build the category tree your listings are filed under, nest and reorder it, charge for posting in a category, choose who can post in it and hide categories from the home page.
section: listings
order: 70
permalink: /how-to-add-categories/
redirect_from:
  - /hide-categories/
keywords: category, categories, subcategory, parent, child, tree, order, reorder, drag, seoname, url, description, price to post, paid category, change price, bulk price, replace price, all categories, same price, several categories, multiple categories, how many categories, hide, home page, meta title, translations, delete, business price, who can post, business only category, private sellers only
updated: 2026-10-20
---

Categories are the backbone of your marketplace: sellers file each listing under one, and buyers browse and filter
by them. A good tree is short at the top (around 6 to 12 main categories) with subcategories underneath, using the
words your buyers would search for.

Everything is in **Listings › Categories**. The page shows your tree, with the number of published listings in each
category (including its subcategories), and tools on the right.

## Add categories quickly

1. Go to **Listings › Categories**.
2. In **Quick add**, type several names separated by commas, for example `Cars, Furniture, Electronics`.
3. Click **Add categories**.
{: .steps}

They are added at the top level. Drag them under another category to make them subcategories (see below).

To create a large tree in one go, use a spreadsheet: see [Import categories and locations](/use-import-tool-categories-locations/).

## Add a category with all its details

1. Go to **Listings › Categories** and click **New category**.
2. Fill in the fields below.
3. Click **Submit**.
{: .steps}

| Field | What it does |
| --- | --- |
| **Name** | The name shown on your site, up to 145 characters. |
| **Order** | Its position among its sister categories. You can also drag it into place later. |
| **Parent** | The category it sits under. Choose *Home category* (the invisible top of the tree) to make it a main category. |
| **Seoname** | The part of the web address for this category, for example `/used-cars`. Filled in from the name; letters, numbers and dashes. |
| **Description** | A short text about the category. Themes show it on the category page and it is used for search engines. |
| **Price** | The price to post a listing in this category, used when you charge for posting (see below). Leave 0 for free. |
| **Business price** | What [business accounts](/account-types/#charge-businesses-a-different-price) pay to post here instead of the **Price**. Leave 0 to charge them the **Price**. |
| **Icon Font** | Pick an icon from the icon library. See [Category icons and images](/how-to-add-icons-to-categories/). |

Once the category exists, its edit page has more:

- **Search engines** — a **Meta title** and **Meta description** for search engines (up to 255 characters each).
  Leave them empty to use the name and description. On a multilingual site this card is replaced by
  **Translations**, where you enter the name and description in each language.
- **Category icon** — upload an image icon.
- **Who can post here** — shown while [business accounts](/business-sellers/) are on: everyone, business accounts
  only or private sellers only. See [Who can post in each category](/account-types/#who-can-post-in-each-category).
- **Custom fields** — which [custom fields](/how-to-create-custom-fields/) apply to this category. Click
  **+ Add** to add one, **Remove** to take it away.
- **View on site ↗** — opens the category page.

## Nest and reorder categories

Drag a category by its handle to move it up or down, or drop it inside another category to make it a subcategory.
The new order is saved as soon as you drop it.

You can nest as deep as you like, but buyers find two levels (for example *Vehicles › Cars*) much easier than four.
{: .tip}

## Charge for posting in a category

A category's **Price** is charged only when new listings go live with **Pay to post** or **Pay to post, then you
approve** (set under **Settings › Payments › Pay to post**, see [Pay to post](/pay-to-post/)). Categories that charge
show a *… to post* pill in the tree.

- A subcategory with a price of 0 uses the price of the nearest category above it that has one.
- If no category above it has a price either, posting there is free.
- If a seller moves a listing to another paid category, they are asked to pay for the new one.
- Business accounts pay the **Business price** where you set one. See
  [Private and business accounts](/account-types/#charge-businesses-a-different-price).

You also need a [payment gateway](/setup-payment-gateways/) to take the money.

### Change the price of many categories at once

Use [Make money](/make-money/) in the sidebar: in its **What sellers pay for** step, **Pay to post** lists every
category with its price, so you can change them all on one page.

To save work in the future, let subcategories use their parent's price:

1. Set the price you want on each top-level category.
2. Set the subcategories under it to 0. They now charge the price of the category above them.
3. Next time the price changes, you only edit the top-level categories.
{: .steps}

This works at any depth: a subcategory with 0 uses the nearest category above it that has a price. Give a subcategory
its own price only when it should cost something different. Business prices are set on each category's own page.

## Hide categories from the home page

Some categories are useful but don't deserve a place on the home page.

1. Go to **Listings › Categories**.
2. In **Hide from the home page**, select the categories. Hold Ctrl (⌘ on a Mac) to pick several.
3. Click **Save**.
{: .steps}

Hidden categories still work everywhere else: sellers can post in them and buyers can browse and search them. To show
them again, unselect them and click **Save**.

## Delete a category

1. Open the category and, in **Delete this category**, click **Delete category**.
2. Confirm.
{: .steps}

Nothing is lost with it: its subcategories and its listings move up to its parent category.

**Start over › Delete all categories** removes every category at once. All listings move to *Home category*, and
members' email alerts for specific categories are deleted too. It can't be undone.
{: .warning}

## Good to know

- Each listing belongs to exactly one category. A listing in a subcategory also shows up when buyers browse the
  categories above it, so put it in the most specific one (*Vehicles › Cars* rather than *Vehicles*). If an item
  really fits two places, the seller posts it in the one buyers are most likely to look in.
- Changing a **Seoname** changes the address of the category page, so old links to that page stop working.
  Listing pages keep working.
- New categories may take a moment to appear on your site because of caching. If they don't show up, see
  [My changes don't show up](/changes-not-showing/).
- The [Categories widget](/overview-of-widgets/) adds a category list to a sidebar or footer.

## Related guides

- [Category icons and images](/how-to-add-icons-to-categories/) — make categories recognisable.
- [Custom fields](/how-to-create-custom-fields/) — different fields for different categories.
- [Import categories and locations](/use-import-tool-categories-locations/) — build a big tree from a spreadsheet.
- [Locations](/how-to-add-locations/) — the other way buyers narrow down listings.
{: .cards}
