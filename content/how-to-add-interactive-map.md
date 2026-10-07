---
title: Interactive map
description: Put a clickable map of countries, regions or cities on your home page or in a widget, and send visitors to the right listings when they click.
section: content
order: 90
permalink: /how-to-add-interactive-map/
keywords: interactive map, region map, country map, geochart, clickable map, home page map, regions, markers, states
updated: 2026-10-07
---

The interactive map is a coloured map of the world, a continent, a country or a US state, where the regions you
choose are highlighted. Visitors hover over a region to see a tooltip and click it to go where you want, usually
the listings for that region. It's a friendly way into a marketplace that covers several countries, states or
cities.

This is different from the Google Map that shows where each listing is. For that, see
[Maps](/how-to-configure-Google-Map-Settings/).

## Open the map editor

The map editor isn't in the sidebar. While signed in as an administrator, open it at this address on your site:

`https://your-marketplace.com/oc-panel/map`

Replace `your-marketplace.com` with your own domain. The editor has three tabs, **General**, **Geocoding** and
**Configuration**, and a live preview of the map.

## Build your map

1. On the **Configuration** tab, choose the **Region to Display**: the whole world, a continent or part of one, a
   country, or a US state or its metropolitan areas.
2. Choose the **Display Mode**: **Regions** colours whole regions, **Markers (Text Location)** puts a dot on a place
   you name, **Markers (Coordinates)** puts a dot on a latitude and longitude.
3. Add your regions one by one. For each, fill in the **Region Code** (mandatory; follow the suggestions next to the
   field, for example a country code such as `ES` or a state code such as `US-CA`), the **Title** and **Tooltip**
   (the two lines shown on hover), an **Action Value** (usually the web address to open) and a **Color**, then
   click **Add**.
4. Choose the **Active Region Action**: **None**, **Open URL (same window)** or **Open URL (new window)**.
5. Under **Interactivity**, choose whether the map reacts to the mouse (**Enable**), shows tooltips
   (**Show Tooltip**) and allows formatting in them (**Render HTML in Tooltip**).
6. On the **General** tab, set the colours and size (see below) and switch on **Map on Homepage** if you want it there.
7. Click **Save changes**.
{: .steps}

The best **Action Value** is the address of a location's listings on your site. Open the location on your site
(for example by choosing it in the search) and copy the address from your browser.
{: .tip}

In the editor's preview, clicking a region shows its action value in a message instead of opening it, so you can
check the links without leaving the page.

## Look and size (General tab)

| Setting | What it does |
| --- | --- |
| **Map on Homepage** | Shows the map on your home page (in themes that support it, such as Nova and Mercury). |
| **Background Color** | The colour around the map. |
| **Map Border Color** and **Map Border Width (px)** | The outline of the map. |
| **Inactive Region Color** | The colour of regions you didn't add. |
| **Tooltip Text Color** | The colour of the text on hover. |
| **Markers Size** | The size of the dots in marker modes. |
| **Width (px)** and **Height (px)** | The size of the map. |
| **Responsive (Beta)** | Lets the map shrink to fit narrow screens such as phones. |
| **Keep Aspect Ratio** | Keeps the map's proportions when it resizes. |

## Geocoding tab

Some maps, especially **Markers (Text Location)**, need Google's Geocoding service to turn the names you typed into
places. If your map stays empty, create a Geocoding API key in your Google Cloud account and paste it into
**API Key** on the **Geocoding** tab.

## Show the map elsewhere

Besides the home page, you can show the same map in a widget area:

1. Go to **Design › Widgets**.
2. Add the **Interactive Map** widget to the area you want, such as the sidebar.
{: .steps}

The widget doesn't show on the home page while **Map on Homepage** is on, so the map never appears twice. See
[Widgets](/overview-of-widgets/).

## Tips

- Keep the number of active regions small and meaningful: the regions where you actually have listings.
- Use the same colour for all active regions, or one colour per country, so the map reads at a glance.
- Check the map on a phone after saving. If it's cut off, switch on **Responsive (Beta)**.

## Related guides

- [Locations](/how-to-add-locations/) — the places your listings are filed under.
- [Maps](/how-to-configure-Google-Map-Settings/) — show where each listing is on Google Maps.
- [Widgets](/overview-of-widgets/) — add the map to your sidebar.
{: .cards}
