---
title: Your home page
description: Choose the page visitors land on, which listings the home page shows, and what each part of Nova's home page is for.
section: design
order: 30
permalink: /customise-home-page/
redirect_from:
  - /home-or-listing/
  - /manage-ads-slider/
keywords: home page, homepage, landing page, front page, edit home page, change home page, adjust home page, featured listings, latest listings, random, popular, slider, hero, hero buttons, hero text, headline, banner, button, call to action, how it works, hide categories, users page, page builder, ai page builder, design home page with ai, blog posts on home page, latest blog posts, image banner, category icons list
updated: 2026-10-27
---

Your home page is the first thing most visitors see, so it should show them straight away what your marketplace
is about and get them searching. Three things shape it:

- **which page** is the home page at all,
- **which listings** appear on it,
- and the **theme's home page sections**, set in [Theme options](/theme-options/).

On the Starter, Professional and Marketplace plans, and to try on the free trial, you can go further with the
[AI page builder](/ai-page-builder/):
describe the home page you want and the AI builds it from sections, which you then edit, reorder and publish. Its
sections go beyond Nova's standard home page, for example your latest blog posts, a wide image banner, or your
categories as a directory-style list with icons and subcategory links (see
[Sections worth knowing](/ai-page-builder/#sections-worth-knowing)).

## Choose the page visitors land on

By default your address opens the home page. You can open a different page instead:

1. Go to **Settings › General**.
2. In **Your site**, choose a **Landing Page**:
   - **Home page** — your theme's home page, with search, categories and listings (recommended).
   - **All listings** — the full list of listings, like a category page for everything.
   - **Users** — the directory of member profiles, for marketplaces that are really a directory of sellers or businesses.
3. Click **Save changes**.
{: .steps}

## Choose which listings the home page shows

1. Go to **Listings › Settings**.
2. In **Listing pages**, choose **Listings on the Home Page** (see the table below).
3. Click **Save changes**.
{: .steps}

| Option | What it shows |
| --- | --- |
| **Latest Listings** | The newest listings first. A good default while your site grows. |
| **Random Listings** | A different random set on each visit, so older listings get seen too. |
| **Featured Listings** | Only listings that are [featured](/how-to-create-featured-plan/). |
| **Features Listings Randomly** | Featured listings in random order, so every paying seller gets a turn at the top. |
| **Popular Listings Last Month** | The most viewed listings of the last month. Only offered when **Count Visits Listings** is on (same page, **Listing details**). |
| **None** | No listings row on the home page. |

The number of listings in the row is a theme option: in Nova, **Number of ads in the main homepage row** under
**Design › Theme Options › Homepage**.

If you choose a featured option and no listing is featured at the moment, Nova hides the row rather than showing an
empty box. Turn on **Show a "Just listed" row** in Nova's theme options so new listings still appear.
{: .tip}

When a visitor has picked a location (for example with [auto-locate](/auto-locate-visitors/)), the home page row
only shows listings from that location, and its name appears under the row's title.

## What's on Nova's home page

From top to bottom, and where each part is set:

| Section | What it is | Where to change it |
| --- | --- | --- |
| Hero | Headline, a short line of text, the total number of listings, and a search form with **What**, **Category** and (if you have more than one top-level location) **Location**. Under it, links to your five busiest categories. | **Design › Theme Options › Homepage**: headline, text and background image. |
| Header banner and home page HTML | Your own HTML, for an announcement or an ad. | **Theme Options**: **Header banner** (every page) and **Homepage Only Header** (home page only). |
| Map | A map of your listings, at the top or bottom. | **Home page map** in **Add-ons › Google Maps**. See [Maps](/how-to-configure-Google-Map-Settings/). |
| Categories | Your top-level categories as tiles with icons and listing counts. | **Enable categories section.** in Theme Options; icons in [Categories](/how-to-add-icons-to-categories/). |
| Listings row | The listings chosen above, with a **See all** link. | **Listings › Settings** and the number in Theme Options. |
| Just listed | The newest listings, when the main row shows something else. | **Show a "Just listed" row** in Theme Options. |
| How it works | Three steps for sellers and three for buyers. | **Show the "How it works" band.** and the step texts in Theme Options. |
| Popular locations | Your busiest locations. | **Show the most popular locations.** in Theme Options. |

The [sidebar widgets](/overview-of-widgets/) don't appear on Nova's home page. To add something of your own there,
use **Homepage Only Header, allows HTML** in Theme Options.

Once you publish a home page made with the [AI page builder](/ai-page-builder/), its sections replace Nova's standard
home page, and the home page settings in Theme Options say *Managed in the page builder*. Change the home page in the
page builder from then on.
{: .note}

## Edit the hero: headline, text and buttons

The hero is the big area at the top of the home page. In Nova you can change its words and picture in
**Design › Theme Options › Homepage**:

| To change | Use |
| --- | --- |
| The big title | **Homepage headline** |
| The line under it | **Text under the homepage headline** |
| The picture behind it | **Hero Background Image** |

Nova's hero has a search form rather than buttons, so there are no button settings in Theme Options. What you can do:

- **Rename a built-in button**, such as **Search**, **Post an ad** or **Sign up now** in the "How it works" band: change
  its wording under **Settings › Translations › Edit texts**. The new wording is used everywhere that text appears.
  See [Language and translations](/how-to-change-language/).
- **Add your own button or link** under the hero: put it in **Homepage Only Header, allows HTML**, for example
  `<a href="/contact.html" class="nv-btn nv-btn-primary">Contact us</a>`. It shows on the home page only, just
  under the search area.
- **Hide parts you don't need**: the category tiles, the "How it works" band and popular locations each have a
  **Yes**/**No** setting in Theme Options.

In **Marketplace**, the hero has a **Buy** and a **Sell** tab. **Primary Hero Action** chooses which one is shown
first, the two **Buy subtitle** fields set the buy and sell texts, and the sell side has a **Start Now** button that
opens the posting form. Rename the button the same way, under **Settings › Translations**.

## Hide some categories from the home page

You may not want every category on the home page, for example a "Wanted" or "Other" category.

1. Go to **Listings › Categories**.
2. In **Hide from the home page**, select the categories (hold Ctrl, or ⌘ on a Mac, to pick several).
3. Click **Save**.
{: .steps}

Hidden categories still work everywhere else: listings in them can be posted, searched and browsed. In Nova they
also stay out of the hero's category list and the popular category links.

## Other themes

Older themes have their own home pages, often with a slider of listings at the top. Its listings follow the same
**Listings on the Home Page** setting, and the number of slides is set in Theme Options with **Numbers of ads to
display in home slider**.

## Related guides

- [Theme options](/theme-options/) — every Nova home page setting.
- [AI page builder](/ai-page-builder/) — design your home page by describing it.
- [Featured listings and promotions](/how-to-create-featured-plan/) — fill the featured row by selling promotions.
- [Categories](/how-to-add-categories/) — the tree behind the category tiles.
- [General settings](/change-site-name-site-description/) — the rest of **Settings › General**.
{: .cards}
