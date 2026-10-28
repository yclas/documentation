---
title: Let visitors compare listings side by side
nav_title: Compare listings
description: Add an "Add to compare" button to every listing so buyers can put up to 4 listings side by side in one comparison table.
section: listings
order: 1150
permalink: /compare-listings/
keywords: compare, compare listings, comparison, comparison table, side by side, add to compare, compare button, compare products, compare cars, compare properties, compare businesses, compare page, /compare
updated: 2026-10-23
plans: Available on all plans
---

Buyers often hesitate between a few similar listings: three cars, two flats, four plumbers. Instead of jumping
between tabs, they can add them to a compare list and see them side by side in one table, with the price, the
location, the rating and the details of each one. It helps them decide, and keeps them on your site while they do.

## Switch it on

Compare listings is off until you switch it on (new directory sites start with it on):

1. Go to **Settings › General**.
2. In **Access & privacy**, switch on **Compare listings**.
3. Click **Save changes** in the bar at the bottom.
{: .steps}

If the switch says *Set by Yclas support for your site*, ask us through **Support** to change it.

## How visitors compare

1. On a listing page, the visitor clicks **Add to compare**. The button changes to **Added to compare**.
2. A **Compare (1)** link appears next to it. The number goes up as they add more listings from other listing pages.
3. When they're ready, they click **Compare** to open the comparison page.
4. On that page, **Remove** under a listing takes it out of the table and out of their list.
{: .steps}

Up to 4 listings can be compared at a time. When a visitor adds a fifth, the oldest one drops off the list.
Clicking **Added to compare** again takes a listing off the list.

The list is kept in the visitor's own browser, so nobody needs an account or has to sign in. It stays there when
they come back later on the same device. Only published listings have the button, and only listings a visitor can
see anywhere else on your site show on the comparison page.

## What the comparison shows

The comparison page is at `/compare` on your domain. Each listing gets a column with its first photo and its title,
which links back to the listing. Under them, one row per detail:

| Row | When it shows |
|---|---|
| **Price** | When your site shows prices. A listing without a price shows a dash. |
| **Location** | When the listing has a location. |
| **Rating** | When [reviews](/review-system-works/) are on and the listing has been rated, as a score out of 5. |
| Your custom fields | Every field the listing page shows, with the field's own name as the row label. |

When a listing has no value for a row, its cell shows a dash. Tick boxes show as **Yes** or **No**. Opening hours
and lists of services aren't included, as they have their own blocks on the listing page.

The comparison page is not shown to search engines, so it never competes with your listings in search results.
{: .note}

### Make the comparison useful

The table is only as good as the details sellers fill in. The custom fields are what make listings comparable:

- Add [custom fields](/how-to-create-custom-fields/) for what buyers weigh up in your niche, such as size, year,
  condition, brand or number of rooms.
- Use short field names. They become the row labels, and long ones are cut short.
- Make the important fields required, so every listing has a value and the table has fewer dashes.
- Prefer selects and numbers over free text where you can: the same values in every listing are easier to compare.

## Themes

The **Add to compare** button shows on the listing page of every built-in theme. Nova draws it in its own style;
the other themes show a plain button that fits any design. The comparison page works the same on every theme.

Don't give a category the URL name `compare`. While a category has that name, `/compare` opens the category instead
of the comparison page.
{: .warning}

## Compare in the vehicles and property packs

The [vehicles pack](/vehicles-pack/) and the [property pack](/property-pack/) each have their own compare, made for
their listings: **Compare this vehicle** (up to 3 vehicles) and **Compare** (up to 4 properties). They work without
this switch, while the pack is on.

With **Compare listings** switched on, your site has one comparison page for everything:

- Vehicle listings show the vehicles pack's key specs (make, model, year, mileage and so on) as their rows, instead of
  the custom fields.
- Property listings show the property pack's key specs, and the price per area when you show it.
- The property pack's own **Compare** buttons are replaced by **Add to compare**.
- The vehicles pack's **Compare this vehicle** link stays, but it opens the general comparison page.

The [equipment pack](/equipment-pack/) has no compare of its own: with **Compare listings** on, machines are compared
with their custom fields like any other listing.

## Good to know

- Compare listings is a single switch for your whole site. You can't limit it to some categories.
- The list belongs to the browser, not the member: on another device or after clearing the browser's data it starts
  empty.
- Anyone can share a comparison by copying the page address, as it carries the listings being compared.
- Switching it off removes the buttons and the comparison page. Your listings aren't changed.

## Related guides

- [Search and filters](/search-and-filters/) — how visitors find the listings they want to compare.
- [Custom fields](/how-to-create-custom-fields/) — the details that fill the comparison table.
- [Vehicles pack](/vehicles-pack/) — key specs, compare and more for car marketplaces.
- [Property pack](/property-pack/) — key specs, compare and more for property portals.
{: .cards}
