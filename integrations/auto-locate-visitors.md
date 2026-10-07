---
title: Auto-locate visitors
description: Use visitors' location to suggest their nearest area on your home page and show how far away each listing is.
section: integrations
order: 90
permalink: /auto-locate-visitors/
keywords: auto locate, geolocation, location, nearby, near me, distance, closest, user location, gps, km, miles
updated: 2026-10-07
---

On a local marketplace, the best listing is often the closest one. Auto-locate asks visitors' browsers for their
position, suggests the nearest of your locations, and lets them see listings by distance from where they are.

## What visitors see

- **On the home page**, the browser asks for permission to use their location. If they allow it, a window titled
  *Please choose your closest location* lists your locations within the distance you set, nearest first, with the
  distance to each. Picking one shows the home page for that location. A **Change Location** link in the footer
  clears the choice.
- **On listing pages**, a button such as *50 km from you* lets them limit results to listings near them and see how
  far away each one is, and the **Sort** menu gets a **Distance** option to show the nearest first.

Nothing is shared unless the visitor allows it in their browser, and their position stays in their browser: Yclas
uses it to sort and filter, it doesn't save it to their account.

## What you need

- **A secure (https) site.** Browsers only share a location with secure sites. Sites hosted by Yclas have a
  certificate; if you use your own domain, check that it opens with https. See
  [Connect your own domain](/custom-domain/).
- **Google Maps connected.** Auto-locate uses Google Maps to place visitors. See [Maps](/how-to-configure-Google-Map-Settings/).
- **Coordinates on your locations.** Only locations with a latitude and longitude can be suggested. Set them on each
  location in **Listings › Locations**. See [Locations](/how-to-add-locations/).
- **Positions on your listings.** Distances can only be worked out for listings posted with the map in the posting
  form. See [How listings get onto the map](/how-to-configure-Google-Map-Settings/#how-listings-get-onto-the-map).

## Turn it on

1. Go to **Addons** and open **Auto locate**.
2. Click **Enable**.
3. Go to **Integrations › Google Maps** and set **Auto locate distance**: how far away a location can be and still be
   suggested. Click **Save**.
{: .steps}

You can also switch it on with the **Auto Locate Visitors** box on the Google Maps page; both control the same
setting.

| Setting | What it does |
| --- | --- |
| **Auto locate** (Addons) or **Auto Locate Visitors** (Google Maps) | Turns the feature on or off. |
| **Auto locate distance** | The largest distance for suggested locations, and the starting distance of the *from you* filter on listing pages. It is in kilometres or miles, following **Measurement Units** in **Settings › General**. The default is 100. |

## Choosing the distance

Pick a distance that matches how far people travel for your kind of listings: 10 to 30 for a city marketplace, 50
to 100 for a region, more for a whole country. If the window on the home page is empty for many visitors, the
distance is too small or your locations are missing coordinates.

## Troubleshooting

**The browser never asks for the location.** The site isn't opened with https, the add-on is off, or the visitor
blocked location access for your site in their browser settings earlier.

**The window doesn't appear after allowing.** None of your locations with coordinates is within the distance. Add
coordinates to your locations or increase the distance.

**Distances look wrong.** Check the coordinates of the location or listing. A latitude and longitude swapped, or a
missing minus sign, puts a place on the other side of the world.

## Related guides

- [Locations](/how-to-add-locations/) — set up locations and their coordinates.
- [Maps](/how-to-configure-Google-Map-Settings/) — connect Google Maps.
- [Interactive map](/how-to-add-interactive-map/) — let visitors pick their region on a map instead.
{: .cards}
