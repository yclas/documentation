---
title: Search and filters
description: How buyers search your marketplace, which filters they get, and the settings that decide what search finds and how results are sorted.
section: listings
order: 190
permalink: /search-and-filters/
keywords: search, find, filter, filters, advanced search, keyword, description, sort, order, distance, near me, my location, price range, multi select, searchable, custom field filter, results, no results
updated: 2026-10-07
---

Most buyers arrive with something specific in mind, so search is the most used feature of any marketplace. This guide
explains what Yclas search looks at, and the settings you can use to make it find more, or more precisely, what your
buyers want.

## What buyers can do

The exact layout depends on your [theme](/how-to-change-theme/); in Nova:

- **The search box** in the header (*Search listings*) and in the big search on the home page (*What are you looking
  for?*, with a category and *Where*).
- **Filters** beside the results: **Keyword**, **Categories**, **Location**, **Price** and your searchable custom
  fields, with **Show results** and **Clear all**. On category and listing pages they show when your sidebar has no
  widgets of its own (the search results page always shows them).
- **Sort** to change the order of results.
- **Grid view** and **List view**, a **Map** button (when the listing map is switched on in
  [Maps](/how-to-configure-Google-Map-Settings/)), and 10, 20, 50 or 100 results **per page**.
- A distance button (for example *2 km from you*) to see listings near them, when the
  [Auto-locate](/auto-locate-visitors/) add-on is on.

## What the search box looks at

| Looks in | When |
| --- | --- |
| Listing titles | Always. Every word typed must appear in the title (or in the places below). |
| Listing descriptions | When **Include Search by Description** is on in **Settings › General › Search**. |
| Custom fields | Fields with **Searchable** and **Text searchable** switched on. See [Custom fields](/how-to-create-custom-fields/). |

Searching descriptions finds more listings but also more unrelated ones (a search for *bike* finds a sofa whose
description says "close to the bike lane"). On small marketplaces, turn it on; on large ones, try both.
{: .tip}

Search matches parts of words: *phone* also finds *iPhone* and *headphones*. It doesn't correct spelling or know
synonyms. For instant, typo-tolerant search, see [Algolia search](/algolia-search/).

## Filters

| Filter | Comes from |
| --- | --- |
| Category | Your [categories](/how-to-add-categories/). Choosing a category includes its subcategories. |
| Location | Your [locations](/how-to-add-locations/), including everything inside the chosen one. |
| Price | The **Price** field, as a from–to range. |
| Your own fields | Every custom field with **Searchable** on: a list of choices for Select and Radio fields, tick boxes for Checkbox fields, a from–to range for **Numeric Range** fields, and a time for opening hours. |

To let buyers pick several categories or locations at once, switch on **Multi Select Category and Location Search**
in **Settings › General › Search**.

Make only the fields buyers really filter by searchable: *Make*, *Fuel* and *Bedrooms* yes, *Description of the
garden* no. A short filter panel gets used; a long one gets ignored.
{: .tip}

## Sorting

The order results appear in by default is **Sort Listings** in
[Publishing options](/how-to-configure-publish-options/). Buyers can change it with **Sort**; in Nova they can choose
**Newest**, **Oldest**, **Price (Low)** and **Price (High)** (when the Price field is on), **Featured**, **Favorited**,
**Name (A-Z)**, **Name (Z-A)**, and **Distance** when Auto-locate is on. Orders such as **Rating** or **Event date**
can still be your default even though they aren't in the buyers' menu.

## Search near me

With the [Auto-locate](/auto-locate-visitors/) add-on on, a visitor can share where they are; results can then be
limited to a distance around them and sorted by **Distance**. Distances are shown in kilometres or miles according
to **Measurement Units** in **Settings › General › Regional**.

Distance only works for listings that have map coordinates, which come from the **Address** field with
[maps](/how-to-configure-Google-Map-Settings/) set up. Listings without an address aren't found by a distance search.

## What search never shows

Search results and lists only include **published** listings. They leave out:

- listings waiting in [moderation](/how-ads-moderation-works/), unconfirmed, sold, deactivated or marked as spam;
- [expired](/ad-expiration/) listings, and listings whose `eventdate` has passed;
- on a [multilingual site](/how-to-activate-multilingual-mode/), listings posted in another language.

If a seller says their listing "can't be found", check its status in **Listings › All listings** first. See also
[Listings disappeared](/listings-disappeared/).

## Related guides

- [Custom fields](/how-to-create-custom-fields/) — make fields searchable.
- [Algolia search](/algolia-search/) — instant search as you type.
- [Locations](/how-to-add-locations/) — the location tree buyers filter by.
- [SEO for your marketplace](/seo-classifieds-website/) — being found from Google, not only on your site.
{: .cards}
