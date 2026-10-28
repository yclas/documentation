---
title: Locations
description: Set up the countries, regions and towns sellers pick when they post, import a whole country in one click, and keep the list in order.
section: listings
order: 90
permalink: /how-to-add-locations/
keywords: location, locations, country, region, state, province, county, city, town, neighbourhood, geonames, import, csv, spreadsheet, coordinates, latitude, longitude, order, alphabetical, sub-locations, state and city search, pick a city, city filter, category in city, plumbers in dallas, location page text, seo text
updated: 2026-10-27
---

Locations let sellers say where an item is, and let buyers find listings near them. Like categories, they form a
tree: a country, its regions, their towns. You only need locations if your marketplace covers more than one place;
for a single town, switch the **Location** field off in
[Listing page and form fields](/how-to-manage-advertisement-fields/).

Everything is in **Listings › Locations**. The page shows one level at a time: click a location to see what is inside
it. Each row shows how many locations it contains and how many published listings it has (including everything
inside it).

## Import a whole country

The quickest start for most marketplaces:

1. Go to **Listings › Locations**.
2. In **Import**, choose a country under **A whole country**.
3. Click **Import**.
{: .steps}

The country's regions and towns are added at the top level of your tree. Delete the ones you don't need afterwards.

To import your own list instead, click **Choose a CSV file** under **Or a spreadsheet** in the same box, pick the
file and click **Import**. **Download example** shows the format; see
[Import categories and locations](/use-import-tool-categories-locations/).

## Import from GeoNames

For countries that aren't in the list, or to fill one place with what is inside it:

1. Open the location you want to fill (or stay at the top level) and click **import from GeoNames**.
2. Choose a **Continent**, then a **Country**, **State/Province**, **Region** and **City**, as far down as you need.
   The buttons change to match, for example **Import states/provinces**.
3. Click **Save**.
{: .steps}

The places below the last level you picked are added inside the location you started from. This uses the free
GeoNames service, so the names are in GeoNames' spelling; you can rename them afterwards.

## Add locations by hand

**Quick add** — type several names separated by commas, for example `Madrid, Valencia, Seville`, and click
**Add locations**. When you have opened a location, the box is called **Add inside …** and adds them there.

**New location** — for one location with all its details:

| Field | What it does |
| --- | --- |
| **Name** | The name shown on your site. |
| **Parent** | The location it sits in. |
| **Seoname** | The part of the web address for this location. *Leave empty to make it from the name.* |
| **Description** | A short text about the location. |
| **Latitude** / **Longitude** | Where it is on the map. Type an address and click **Find on the map** to fill them in (needs a Google Maps key, see [Maps](/how-to-configure-Google-Map-Settings/)). |

After saving, the location's edit page also has **SEO Meta Data** (or **Translations** on a multilingual site), a
**Location icon** for themes that use one, and **See what is inside**.

Coordinates matter if you use distance search or [auto-locate visitors](/auto-locate-visitors/): searching around a
location only finds anything when the location has latitude and longitude.
{: .tip}

## Order and find locations

- Drag a location by its handle to change its position. The order is saved when you drop it.
- To list every location A to Z instead, switch on **Automatically Sort All Locations Alphabetically** in
  **Settings › General › Search**. Your own order is then ignored.
- With hundreds of places, use **Search all locations** at the top of the list.
- To let buyers pick several locations (and categories) at once in search, switch on
  **Multi Select Category and Location Search** in the same section.

## How visitors pick a location

Buyers choose a location in the search on your home page and in the search filters. On a big site, for example
every state of a country with all its cities, one long list is hard to use. In the **Nova** theme:

- **Home page search.** When a location in **Where** has locations inside it (a state with its cities), picking it
  shows a **City** field next to it with that state's cities. Leave it on **All cities** to search the whole state.
- **Search filters.** With 100 or more locations, the filter is a state list followed by a searchable **City** list.
  After a search, the state and city stay picked.

Searching a state always includes the listings in its cities. Sites whose locations have nothing inside them, sites
with 100 or more top-level locations, and sites where buyers can pick several locations at once keep the single
list.

## Your own text for category-in-location pages

Every category in every location has a page of its own, such as *Plumbers in Dallas*, that can rank in search
engines for that search. By default it shows the category's and the location's descriptions. For your busiest
pages you can write a text of their own:

1. Go to **Settings › SEO** and click **Category and city pages**. The page lists your 100 busiest pages first, with
   their number of listings and whether they have **Your text** or the **Default** one.
2. Click **Edit** next to a page. On a multilingual site, pick the language at the top first: each language has its
   own text.
3. Fill in the **Search title**, the **Search description** and the **Intro at the top of the page**.
4. Click **Save**.
{: .steps}

The search title and description are what search engines show, in every theme. The intro replaces the two
descriptions at the top of the page's listings in the Nova and Mercury themes. Leave everything empty to go back
to the default text.

On a paid plan, switch on **Write with AI** at the top of **Category and city pages** to get a **Write with AI**
button in the editor. It drafts the three texts from the category, the location and the listings there, without
made-up numbers or "best" claims. Edit the draft before you save.

## Delete locations

Click **Edit** next to a location and, in **Delete this location**, click **Delete location**. *We will move the siblings locations and ads to
the parent of this location* — nothing inside it is lost.

**Start over › Delete all locations** at the top level deletes every location; inside a location it deletes everything
inside that location. It can't be undone.
{: .warning}

## Good to know

- Keep the tree as small as your marketplace needs. Thousands of tiny places make the location picker slow to use;
  regions and main towns are usually enough.
- Spreadsheet imports and country imports always go to the top level. See
  [Import categories and locations](/use-import-tool-categories-locations/).
- The [Locations widget](/overview-of-widgets/) adds a list of locations to a sidebar or footer.

## Related guides

- [Categories](/how-to-add-categories/) — the other tree your listings use.
- [Import categories and locations](/use-import-tool-categories-locations/) — from a spreadsheet.
- [Maps](/how-to-configure-Google-Map-Settings/) — maps on listings and the map page.
- [Search and filters](/search-and-filters/) — how buyers use locations to search.
{: .cards}
