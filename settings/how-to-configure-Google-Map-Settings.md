---
title: Maps
description: Connect Google Maps to show listings on a map, let members pin their address when posting, and add a map to your home page.
section: settings
order: 110
permalink: /how-to-configure-Google-Map-Settings/
redirect_from:
  - /integrating-google-maps-classifieds-website/
  - /how-to-add-map-on-the-homepage/
keywords: google maps, map, api key, google cloud, map style, zoom, latitude, longitude, homepage map, map page, address, location, static map, geocoding, places
updated: 2026-10-07
---

With Google Maps connected, your marketplace can show where things are: a map on each listing and member profile, a
map in the posting form so members can pin their address, a page with every listing on one map, and a map on your
home page. It is also what [auto-locate](/auto-locate-visitors/) and setting coordinates on your
[locations](/how-to-add-locations/) rely on.

All of this uses your own Google Maps API key, so Google bills your Google account for the maps your site shows.
Most marketplaces stay within the monthly free usage Google gives every account.

## Get a Google Maps API key

1. Go to the [Google Cloud console](https://console.cloud.google.com/) and sign in with your Google account.
2. Create a project for your marketplace.
3. Set up billing for the project. Google asks for a payment card even if you stay within the free usage.
4. Under **APIs & Services › Library**, enable these four APIs:
   - **Maps JavaScript API** (interactive maps)
   - **Maps Static API** (the map image on listing and profile pages)
   - **Geocoding API** (turning addresses into map positions)
   - **Places API** (address suggestions)
5. Under **APIs & Services › Credentials**, click **Create credentials › API key**.
6. Restrict the key: under **Application restrictions** choose **Websites** and add your addresses, for example
   `https://yourdomain.com/*` and `https://*.yourdomain.com/*`. Under **API restrictions**, select the four APIs above.
7. Copy the key.
{: .steps}

Always restrict your key to your website. An unrestricted key can be copied from your pages and used by anyone, on
your bill. If you change your domain later, add the new address to the key.
{: .warning}

## Connect Google Maps

1. In the admin panel, go to **Integrations** and open **Google Maps**.
2. Paste your key into **Google Maps API Key**.
3. Set the map position and the features you want (see the table below).
4. Click **Save**.
{: .steps}

## Settings

| Setting | What it does |
| --- | --- |
| **Google Maps API Key** | Your key from Google. Without it, maps don't load. |
| **Google map style** | A colour scheme for your maps, from greyscale to dark. **None** uses Google's normal look. |
| **Google map zoom level** | How close maps start: around 5 shows a country, 10 a region, 14 (the default) a town, 17 a street. |
| **Map latitude coordinates** and **Map longitude coordinates** | Where maps are centred when there's nothing else to go on, for example in the posting form before a member enters an address. Use the centre of your area, for example `40.4168` and `-3.7038` for Madrid. To find a place's coordinates, right-click it in Google Maps. |
| **Auto Locate Visitors** | Asks visitors for their position and suggests the nearest of your locations. See [Auto-locate visitors](/auto-locate-visitors/). |
| **Auto locate distance** | How far away a location can be and still be suggested, in kilometres or miles depending on **Measurement Units** in **Settings › General**. |
| **Homepage Map** | Shows a map of your listings at the **Top** or **Bottom** of the home page, or **None**. |
| **Homepage Map height** | The height of the home page map, for example `400px` (the default when empty). Phones resize it automatically. |
| **Homepage Map full screen option** | Adds a full-screen button to the home page map. |
| **Google Maps in Publish New** | Adds a map to the posting form: members type their address and can drag the pin to the exact spot. |
| **Google Maps in Ad and Profile page** | Shows a map on listing pages and member profiles, and adds a **Map** link to the footer that opens a page with every listing on one map. |

## How listings get onto the map

A listing appears on maps only when it has a map position. It gets one from the map in the posting form, so:

- Make sure the **address** field is shown in the posting form. See
  [Listing page and form fields](/how-to-manage-advertisement-fields/).
- Switch on **Google Maps in Publish New**. Members type their address, the pin moves to it, and they can drag it to
  the exact spot. On a secure (https) site there is also a **Locate me** button. Without this map, listings are saved
  with an address but no position.
- Listings posted before you switched it on have no position. They show on maps once the member (or you) edits the
  listing and saves the address with the map.

When **Google Maps in Ad and Profile page** is on, the listings pages also get a map button next to the grid and list
views.

## Troubleshooting

**The map is grey or says "This page can't load Google Maps correctly".** Google refused the key. Check that billing
is set up, that all four APIs are enabled, and that your site's address is in the key's website restrictions. The
browser console usually names the exact problem, such as `RefererNotAllowedMapError` or `ApiNotActivatedMapError`.

**The listing page shows no map.** The listing has no address, or **Google Maps in Ad and Profile page** is off.

**The home page map is empty.** None of your listings has an address with a map position yet.

## Related guides

- [Auto-locate visitors](/auto-locate-visitors/) — show visitors the listings near them.
- [Locations](/how-to-add-locations/) — set coordinates on your locations.
- [Interactive map](/how-to-add-interactive-map/) — a clickable map of regions on your home page.
- [Widgets](/overview-of-widgets/) — the map widget for sidebars.
{: .cards}
