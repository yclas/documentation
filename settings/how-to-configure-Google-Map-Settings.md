---
title: Maps
description: Show listings on a map, let members pin their address when posting and add a map to your home page, with free OpenStreetMap maps or your own Google Maps key.
section: settings
order: 110
permalink: /how-to-configure-Google-Map-Settings/
redirect_from:
  - /integrating-google-maps-classifieds-website/
  - /how-to-add-map-on-the-homepage/
keywords: openstreetmap, osm, free maps, map provider, no api key, google maps, map, api key, google cloud, billing, free, quota, map style, zoom, latitude, longitude, homepage map, map page, address, location, static map, geocoding, places, autocomplete, view on google maps
updated: 2026-10-16
plans: Available on all plans
---

Maps show where things are: a map on each listing and member profile, a map in the posting form so members can pin
their address, a page with every listing on one map, and a map on your home page.

Yclas can draw these maps in two ways:

| | **OpenStreetMap** | **Google Maps** |
| --- | --- | --- |
| Cost | Free, no account and no key | Your own Google key, billed to your Google account (most sites stay in Google's free allowance) |
| Setup | Pick it and save | About 15 minutes in Google Cloud, with a payment card |
| Themes | Nova and Atlantic Lite | Every theme |
| Extras | | Map styles, [auto-locate](/auto-locate-visitors/), address suggestions |

New sites start on **Automatic**: OpenStreetMap until you add a Google key, then Google Maps. A site created earlier
stays on Google Maps until you choose OpenStreetMap yourself, so if you never added a Google key, your maps are off
until you pick one of the two.

## Choose a map provider

1. In the admin panel, go to **Add-ons** and open **OpenStreetMap** (or **Google Maps**: both pages have the
   same choice).
2. In **Map provider**, choose:
   - **OpenStreetMap (free, no key)**
   - **Google Maps (needs your own key)**
   - **Automatic: Google Maps once a key is set, OpenStreetMap until then**
3. Set the map position and the features you want (see [Settings](#settings)).
4. Click **Save**.
{: .steps}

Under the choice, **Now in use** shows which map your visitors actually see.

## Free maps with OpenStreetMap

[OpenStreetMap](https://www.openstreetmap.org) is a free world map made by volunteers. With it, everything works
without a key: the listing and profile maps, the map in the posting form, the home page map and the map page.

- **Finding addresses.** In the posting form, members type their address and press Enter, click **Find on map**, or
  simply move on to the next field; the pin jumps to the address and they can drag it to the exact spot. On the map
  page, visitors use **Search near a place** (with a distance) or **Search this area**.
- **Links.** Next to a listing's address, **View on the map** opens the place on openstreetmap.org.
- **Credits.** A small OpenStreetMap credit sits on every map, as its licence requires.

<div class="note" markdown="1">
**What OpenStreetMap doesn't do (yet):**

- It only draws on the **Nova** and **Atlantic Lite** themes. With another theme, maps need a Google key whichever
  provider you choose; the OpenStreetMap page tells you so.
- [Auto-locate](/auto-locate-visitors/) (**Locate visitors**) still uses Google, so it needs a Google key.
- There are no map styles, and addresses are found when the member searches, not suggested as they type.
- The map in **Listings › Locations** for setting a location's coordinates still uses Google.
</div>

Map tiles are part of the page, like the map itself, so they load without waiting for
[cookie consent](/cookie-consent/).

## Use Google Maps

With your own Google Maps API key, maps work on every theme, with map styles, address suggestions and
[auto-locate](/auto-locate-visitors/). Setting coordinates on your [locations](/how-to-add-locations/) also relies on it.

Even without a key, every listing with an address gets a **View on Google Maps** link that opens the place in
Google Maps. That link needs no key and costs nothing.

### What it costs

The maps use your own Google Maps API key, so Google bills your Google account for the maps your site shows. Google
gives every project 10,000 free map loads a month for each kind of map, and most marketplaces never go past that.
Google still asks for a payment card before the maps work, and you can set a daily limit so you're never charged
(step 4 below).

### Get a Google Maps API key

The **Add-ons › Google Maps** page in your admin panel has the same checklist, with links that open each step and
your site's address ready to copy.

1. Open [Google's Maps setup](https://console.cloud.google.com/google/maps-apis/start) and sign in with your Google
   account. It creates a project, asks for a payment card for billing, switches on the maps and gives you a key.
   Copy the key.
2. Check that these four APIs are switched on for the project (each link opens it in Google Cloud; click **Enable**
   if it isn't):
   - [Maps JavaScript API](https://console.cloud.google.com/apis/library/maps-backend.googleapis.com): interactive
     maps
   - [Maps Static API](https://console.cloud.google.com/apis/library/static-maps-backend.googleapis.com): the map
     image on listing and profile pages
   - [Geocoding API](https://console.cloud.google.com/apis/library/geocoding-backend.googleapis.com): turning
     addresses into map positions
   - [Places API (New)](https://console.cloud.google.com/apis/library/places.googleapis.com): address suggestions
     when visitors search near a place
3. Keep the key for your site only. Open [your keys](https://console.cloud.google.com/apis/credentials), click the
   key, choose **Websites** under **Application restrictions** and add your site's address followed by `/*`, for
   example `https://yourdomain.com/*`. If your site also opens on its yclas.com address, add that too. Click
   **Save**.
4. Optional, so you're never charged: on [Google's quotas page](https://console.cloud.google.com/google/maps-apis/quotas),
   set a daily limit for each map API. About 300 a day keeps you inside the free 10,000 a month.
{: .steps}

Always restrict your key to your website. Your key is visible in your pages, and an unrestricted key can be used by
anyone, on your bill. If you change your domain later, add the new address to the key.
{: .warning}

### Connect Google Maps

1. In the admin panel, go to **Add-ons** and open **Google Maps**.
2. Set **Map provider** to **Google Maps** or **Automatic**.
3. Paste your key into **API key**.
4. Set the map position and the features you want (see the table below).
5. Click **Save**.
{: .steps}

When you save, Yclas checks the key with Google straight away. A green message means your maps can load. If Google
refuses the key, a red message says why and what to fix (see [Troubleshooting](#troubleshooting)). After fixing it in
Google Cloud, click **Check again**.

On Google Maps, the map features stay off until you add a key, even if they're ticked, so visitors never see a
broken map.
{: .note}

## Settings

Both pages share the same map settings, so you set them once. The ones marked *Google only* are on the Google Maps
page.

| Setting | What it does |
| --- | --- |
| **Map provider** | Which map your site uses (see [above](#choose-a-map-provider)). |
| **API key** | *Google only.* Your key from Google. Without it, Google maps stay off. |
| **Map style** | *Google only.* A colour scheme for your maps, from greyscale to dark. **None** uses Google's normal look. |
| **Zoom level** | How close maps start: around 5 shows a country, 10 a region, 14 a town, 17 a street. |
| **Default latitude** and **Default longitude** | Where maps are centred when there's nothing else to go on, for example in the posting form before a member enters an address. Use the centre of your area, for example `40.4168` and `-3.7038` for Madrid. To find a place's coordinates, right-click it in Google Maps. |
| **Locate visitors** | *Google only, needs a key.* Asks visitors for their position and suggests the nearest of your locations. See [Auto-locate visitors](/auto-locate-visitors/). |
| **Nearby distance** | *Google only.* How far away a location can be and still be suggested, in kilometres or miles depending on **Distance units** in **Settings › General**. |
| **Home page map** | Shows a map of your listings at the **Top** or **Bottom** of the home page, or **None**. |
| **Home page map height** | The height of the home page map in pixels (400 when empty). Phones resize it automatically. |
| **Full-screen button** | Adds a full-screen button to the home page map. |
| **Map in the posting form** | Adds a map to the posting form: members type their address and can drag the pin to the exact spot. |
| **Map on listings and profiles** | Shows a map on listing pages and member profiles, and adds a **Map** link to the footer that opens a page with every listing on one map. |

## How listings get onto the map

A listing appears on maps only when it has a map position. It gets one from the map in the posting form, so:

- Make sure the **address** field is shown in the posting form. See
  [Listing page and form fields](/how-to-manage-advertisement-fields/).
- Switch on **Map in the posting form**. Members type their address, the pin moves to it, and they can drag it to
  the exact spot. On a secure (https) site there is also a **Locate me** button. Without this map, listings are saved
  with an address but no position.
- Listings posted before you switched it on have no position. They show on maps once the member (or you) edits the
  listing and saves the address with the map.

When **Map on listings and profiles** is on, the listings pages also get a map button next to the grid and list views.

## Troubleshooting

**There's no map anywhere.** Check **Now in use** on the **OpenStreetMap** or **Google Maps** page. On Google Maps
without a key, maps stay off: add a key or switch to OpenStreetMap. If your theme isn't Nova or Atlantic Lite,
OpenStreetMap can't draw there, so you need a Google key.

**"The place search is busy" or "No place found".** OpenStreetMap's address search is shared and limited to a few
searches a second; wait a moment and try again. Searching for a town or street name works better than a full address
with a flat number.

### Google key problems

If Google refuses your key, visitors see no map at all (instead of Google's grey error), and the
**Add-ons › Google Maps** page tells you why:

| Message | What to do |
| --- | --- |
| **Billing isn't switched on** | Add a payment card to the project in Google Cloud under **Billing**. Google won't serve any maps, even free ones, until you do. |
| **Your key only works on other websites** | Add your site's address followed by `/*` to the key's website restrictions (step 3 above). |
| **The maps aren't switched on for its Google Cloud project** | Enable the Maps JavaScript API and the Maps Static API (step 2 above). |
| **Google doesn't recognise this key** or **Your key has expired** | Copy the key again from [your keys](https://console.cloud.google.com/apis/credentials), or create a new one, and paste it in **API key**. |

**The address suggestions don't appear when visitors search near a place.** Enable **Places API (New)** for the
project (step 2 above). Visitors can still type an address without suggestions.

**The listing page shows no map.** The listing has no map position, or **Map on listings and profiles** is off.
The **View on Google Maps** (or **View on the map**) link still shows next to the address.

**The home page map is empty.** None of your listings has an address with a map position yet.

## Related guides

- [Auto-locate visitors](/auto-locate-visitors/) — show visitors the listings near them.
- [Locations](/how-to-add-locations/) — set coordinates on your locations.
- [Interactive map](/how-to-add-interactive-map/) — a clickable map of regions on your home page.
- [Widgets](/overview-of-widgets/) — the map widget for sidebars.
{: .cards}
